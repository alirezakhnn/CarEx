import React, { useState, useEffect } from "react";
import { Main, Header, SquareLoader } from "ui";
import axios, { AxiosResponse } from "axios";
import { Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

interface WebProps {
  pictureContent: {
    dark: Array<{ name: string; downloadUrl: string }>;
    light: Array<{ name: string; downloadUrl: string }>;
  };
}

interface Directory {
  url: string;
}

interface File {
  name: string;
  download_url: string;
}

async function getAuthorizationHeader() {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const token = process.env.GITHUB_TOKEN;
  return { Authorization: `Bearer${token}` };
}

export async function getStaticProps() {
  try {
    const baseUrl = "https://api.github.com/repos/alirezakhnn/CarExPics";
    const headers = await getAuthorizationHeader();

    // Fetch the list of directories
    const directoriesResponse: AxiosResponse<Directory[]> = await axios.get(
      `${baseUrl}/contents`,
      { headers }
    );
    const directories: Directory[] = directoriesResponse.data;

    // For each directory, fetch the list of files and their download URLs
    const promises = directories.map(async (directory: Directory) => {
      const dirResponse: AxiosResponse<File[]> = await axios.get(
        directory.url,
        {
          headers,
        }
      );
      const files: File[] = dirResponse.data;

      return files.map((file: File) => ({
        name: file.name,
        downloadUrl: file.download_url,
      }));
    });

    // Wait for all the promises to resolve and collect the results
    const [dir1Files, dir2Files] = await Promise.all(promises);

    const pictureContent = {
      dark: dir1Files,
      light: dir2Files,
    };

    return {
      props: {
        pictureContent,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        pictureContent: null,
      },
    };
  }
}

function Web({ pictureContent }: WebProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (pictureContent) {
      if (pictureContent.dark.length > 0 && pictureContent.light.length > 0) {
        setIsLoading(false);
      }
    } else {
      setError(true);
      setIsLoading(false);
    }
  }, [pictureContent]);

  return (
    <div>
      {isLoading ? (
        <SquareLoader />
      ) : (
        <>
          {error ? (
            <Typography
              variant="h3"
              color="primary.main"
              className="text-center mt-[10%]  xxs:text-md leading-relaxed sm:text-lg lg:text-xl mx-20"
            >
              Bad Credential or Request Limit Reached!
            </Typography>
          ) : (
            <>
              <Header pictureContent={pictureContent} />
              {status === "authenticated" ? <Main /> : null}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Web;
