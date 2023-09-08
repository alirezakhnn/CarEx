import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { BtnShadow } from "ui";
import { Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { Switcher } from "ui/modules/Switcher";
import { toast, ToastContainer } from "react-toastify";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { status } = useSession();
  if (status === "authenticated") router.replace("/");

  const signupHandler = async () => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.status === "success") {
      toast.success("sign up successfully done");
      router.push("/signin");
    }
    toast.warning(`${data.message} or wrong info!`);
  };

  const labelsClass = `
    font-monsterratItalic dark:text-white text-midnight
    `;
  const inputsClass = `
    rounded-lg outline-none px-4 py-1
    focus:shadow-lg focus:shadow-midnight bg-gradient-to-r from-white to-silver
    font-monsterratMedium focus:shadow-outline focus:scale-110
    transition-all m-2
    `;
  return (
    <div className="flex justify-center gap-2 mt-20">
      <div className="grid justify-center">
        <div className="grid place-items-center rounded-l-lg border-2 border-oceanBlue max-w-[600px] xxs:px-5 sm:px-16 py-12 xxs:mx-5 sm:mx-0">
          <div className="grid grid-cols-2 place-items-center mr-10 mb-4">
            <Switcher />
            <Typography
              variant="h4"
              className="dark:text-white text-midnight font-monsterratItalic font-bold text-md"
            >
              Sign Up
            </Typography>
          </div>
          <div className="grid gap-y-2">
            <label className={labelsClass} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputsClass}
              required
            />
          </div>
          <div className="grid gap-y-2">
            <label className={labelsClass} htmlFor="password">
              password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputsClass}
              required
            />
          </div>
          <BtnShadow
            onClick={signupHandler}
            className="shadow-lg shadow-deepOcean hover:shadow-md hover:shadow-deepOcean dark:text-white text-midnight"
          >
            SignUp
          </BtnShadow>
          <BtnShadow className="shadow-md shadow-oceanBlue hover:shadow-none dark:text-white text-midnight flex gap-2 hover:bg-aboveOcean hover:text-white hover:scale-110">
            <GoogleIcon />
            SignIn with Google
          </BtnShadow>
          <p className="dark:text-white text-midnight font-monsterratItalic">
            {" "}
            do you have account?
            <Link className="text-oceanBlue" href="/signin">
              {" "}
              &nbsp;Login
            </Link>
          </p>
        </div>
      </div>
      <Image
        width={550}
        height={550}
        src="/images/dark/modernDarkCarMoonlightBlue.jpg"
        alt="edgeCar_signup"
        className="max-w-[600px] max-h-[550px] rounded-r-lg shadow-md shadow-oceanBlue opacity-[40%] xxs:hidden xl:block"
      />
      <ToastContainer />
    </div>
  );
}
