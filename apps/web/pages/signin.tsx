import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { BtnShadow } from "ui";
import { Typography } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import { Switcher } from "ui/modules/Switcher";

export default function SignIn() {
    const router = useRouter();
    const { status } = useSession();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (status === 'authenticated') router.replace('/');
    }, [status]);

    const labelsClass = `
    font-monsterratItalic dark:text-white text-midnight
    `;
    const inputsClass = `
    rounded-lg outline-none px-4 py-1
    focus:shadow-lg focus:shadow-midnight bg-gradient-to-r from-white to-silver
    font-monsterratMedium focus:shadow-outline focus:scale-110
    transition-all m-2
    `;
    const loginHandler = async () => {
        const res: any = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (!res.error) router.replace("/");
    };
    return (
        <div className="flex justify-center gap-2 mt-20">
            <div className="grid justify-center">
                <div className="grid place-items-center rounded-l-lg border-2 border-oceanBlue max-w-[600px] xxs:px-5 xs:px-16 py-12 xss:mx-5 sm:mx-0">
                    <div className="grid grid-cols-2 place-items-center mr-10 mb-4">
                        <Switcher />
                        <Typography
                            variant="h4"
                            className="dark:text-white text-midnight font-monsterratItalic font-bold text-md">
                            Sign In
                        </Typography>
                    </div>
                    <div className="grid gap-y-2">
                        <label className={labelsClass} htmlFor="email">Email</label>
                        <input id="email" type="text" value={email}
                            onChange={e => setEmail(e.target.value)}
                            className={inputsClass}
                            required
                        />
                    </div>
                    <div className="grid gap-y-2">
                        <label className={labelsClass} htmlFor="password">password</label>
                        <input id="password" type="password" value={password}
                            onChange={e => setPassword(e.target.value)}
                            className={inputsClass}
                            required
                        />
                    </div>
                    <BtnShadow
                        onClick={loginHandler}
                        className="shadow-lg shadow-deepOcean hover:shadow-md hover:shadow-deepOcean dark:text-white text-midnight"
                    >
                        SignIn
                    </BtnShadow>
                    <BtnShadow
                        className="shadow-md shadow-oceanBlue hover:shadow-none dark:text-white text-midnight flex gap-2 hover:bg-aboveOcean hover:text-white hover:scale-110"
                    >
                        <GoogleIcon />
                        SignIn with Google
                    </BtnShadow>
                    <p
                        className="dark:text-white text-midnight font-monsterratItalic"
                    > Create An Account?
                        <Link className="text-oceanBlue" href="/signup"> Sign Up</Link>
                    </p>
                </div>
            </div>
            <img
                src="/images/dark/edgeCar.jpg"
                alt="edgeCar_signin"
                className="max-w-[550px] max-h-[550px] rounded-r-lg shadow-md shadow-oceanBlue opacity-[40%] xxs:hidden xl:block"
            />
        </div>
    );
}