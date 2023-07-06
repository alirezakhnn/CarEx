import React, { useState, useEffect } from 'react';
import { Main, Header, SquareLoader } from 'ui';
import axios from 'axios';

function Web({ pictureContent }: any) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (pictureContent.dark.length > 0 && pictureContent.light.length > 0) {
      setIsLoading(false);
    }
  }, [pictureContent]);

  return (
    <div>
      {isLoading ? (
        <SquareLoader />
      ) : (
        <>
          <Header pictureContent={pictureContent} />
          <Main />
        </>
      )}
    </div>
  );
}

export default Web;

async function getAuthorizationHeader() {
  const token = process.env.GITHUB_TOKEN;
  return { Authorization: `Bearer${token}` };
}

export async function getStaticProps() {
  const baseUrl = 'https://api.github.com/repos/alirezakhnn/CarExPics';
  const headers = await getAuthorizationHeader();

  // Fetch the list of directories
  const directories = await axios({
    method: 'get',
    url: `${baseUrl}/contents`,
    headers,
  }).then((res) => res.data);

  // For each directory, fetch the list of files and their download URLs
  const promises = directories.map(async (directory: { url: any }) => {
    const dirUrl = directory.url;
    const dirResponse = await axios.get(dirUrl, { headers }); // Pass headers
    const files = dirResponse.data;

    return files.map((file: { name: any; download_url: any }) => ({
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
}