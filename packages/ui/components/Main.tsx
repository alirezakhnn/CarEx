import { useSession } from "next-auth/react";
import { SquareLoader } from "../modules/SquareLoader";
import { TimeLine } from "../modules/TimeLine";
import { BrandNav } from "../modules/BrandNav";
import { AboutMeCard } from "../modules/AboutMeCard";
import React from "react";

export function Main() {
  const { status } = useSession();
  return (
    <div className="z-10 xxs:mt-[15rem] sm:mt-[40rem] md:mt-[20rem] lg:mt-[5rem]">
      <BrandNav />
      {status === "authenticated" ? <TimeLine /> : <SquareLoader />}
      <AboutMeCard />
    </div>
  );
}
