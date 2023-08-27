import { useSession } from "next-auth/react";
import { SquareLoader } from "../modules/SquareLoader";
import { TimeLine } from "../modules/TimeLine";
import React from "react";

export function Main() {
    const { status } = useSession();
    return (
        <div className="z-10 mt-[45vh]">
            {status === 'authenticated' ? <TimeLine /> : <SquareLoader />}
        </div>
    );
}
