import { Logo } from "../modules/Logo";
import Link from "next/link";
import { CurvedBorder } from "../modules/Icons";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export function Footer() {
  const { theme } = useTheme();
  const footerLinks = [
    {
      title: "About",
      links: [
        { title: "How it works", url: "/" },
        { title: "Featured", url: "/" },
        { title: "Partnership", url: "/" },
        { title: "Bussiness Relation", url: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "Events", url: "/" },
        { title: "Blog", url: "/" },
        { title: "Podcast", url: "/" },
        { title: "Invite a friend", url: "/" },
      ],
    },
    {
      title: "Socials",
      links: [
        { title: "Discord", url: "/" },
        { title: "Instagram", url: "/" },
        { title: "Twitter", url: "/" },
        { title: "Facebook", url: "/" },
      ],
    },
  ];

  const [fillColor, setFillColor] = useState(false);
  useEffect(() => {
    if (
      theme === "dark" ||
      theme === "system" ||
      theme === "undefined" ||
      theme !== "light"
    ) {
      setFillColor(true);
    } else if (theme === "light") {
      setFillColor(false);
    }
  }, [theme]);

  return (
    <div className="mt-[20%] z-0">
      <CurvedBorder fill={fillColor ? "#000" : "#fff"} />
      <footer className="grid align-center py-12 text-white bg-deepOcean gap-y-6 px-24 mt-5 xxs:min-w-[100vw] md:min-w-screen">
        <Logo className="dark:text-white text-silver" />
        <ul className="grid place-items-center ml-[5%] font-monsterratMedium xxs:grid-cols-2 xxs:gap-x-5 md:gapx-x-0 md:grid-cols-4 gap-y-5 list-none dark:text-white mt-20">
          {footerLinks.map((item) => (
            <div key={item.title} className="grid gap-y-3">
              <h3 className="font-bold text-silver font-monsterratBold">
                {item.title}
              </h3>
              <div className="flex flex-col gap-5 font-monsterratItalic font-normal text-xs">
                {item.links.map((link) => (
                  <Link key={link.title} href={link.url} className="text-white">
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </ul>
        <h6 className="font-monsterratItalic justify-self-center my-5">
          All rights reserved &copy;
        </h6>
      </footer>
      <CurvedBorder fill="#03234f" className="xxs:mt-[-2%]" />
    </div>
  );
}
