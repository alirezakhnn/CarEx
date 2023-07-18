import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { BtnShadow } from "ui";

export default function SignUp() {
    const router = useRouter();
    const { status } = useSession();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (status === 'authenticated') router.replace('/');
    }, [status]);

    const labelsClass = `
    font-monsterratBold dark:text-white text-midnight
    `;
    const inputsClass = `
    rounded-lg outline-none border-none px-4 py-1
    bg-gradient-to-r dark:from-silver dark:to-white
    from-midnight to-silver dark:text-midnight text-white
    font-monsterratMedium
    `;
    const loginHandler = async () => {
        const res: any = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (!res.error) router.push("/");
    };
    return (
        <div className="grid justify-center">
            <div className="grid place-items-center gap-y-4 rounded-lg shadow-lg dark:shadow-oceanBlue shadow-silver max-w-[600px] mt-6 px-16 py-6">
                <div className="grid gap-y-2">
                    <label className={labelsClass} htmlFor="email">Email</label>
                    <input id="email" type="text" value={email}
                        onChange={e => setEmail(e.target.value)}
                        className={inputsClass}
                    />
                </div>
                <div className="grid gap-y-2">
                    <label className={labelsClass} htmlFor="password">password</label>
                    <input id="password" type="password" value={password}
                        onChange={e => setPassword(e.target.value)}
                        className={inputsClass}
                    />
                </div>
                <BtnShadow onClick={loginHandler}>
                    SignIn
                </BtnShadow>
                <p
                    className="dark:text-white text-midnight font-monsterratMedium"
                > Create An Account?
                    <Link className="text-oceanBlue" href="/signup"> Sign Up</Link>
                </p>
            </div>
        </div>
    );
}