import { useState } from "react";
// import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from 'next/link';
import { BtnShadow } from "ui";



export default function SignUp() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const labelsClass = `
    font-monsterratBold dark:text-white text-midnight
    `;
    const inputsClass = `
    rounded-lg outline-none border-none px-4 py-1
    bg-gradient-to-r dark:from-silver dark:to-white
    from-midnight to-silver dark:text-midnight text-white
    font-monsterratMedium
    `;
    const signupHandler = async () => {
        console.log(email, password);
        const res = await fetch('/api/auth/signup', {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" }
        });
        const data = await res.json();
        if (data.status === 'success') {
            router.push('/signin');
        }
    }
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
                    <label className={labelsClass} htmlFor="password">Password</label>
                    <input id="password" type="password" value={password}
                        onChange={e => setPassword(e.target.value)}
                        className={inputsClass}
                    />
                </div>
                <BtnShadow onClick={signupHandler}>
                    Submit
                </BtnShadow>
                <p
                    className="dark:text-white text-midnight font-monsterratMedium"
                > Do you have Account?
                    <Link className="text-oceanBlue" href="/signin"> Sign In</Link>
                </p>
            </div>
        </div>
    );
}