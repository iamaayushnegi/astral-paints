import React from "react";
import Button from "../button";
import Link from "next/link";
import { Logo } from "@/assets/svg";

const HEADER_URL_DATA = [
  {
    id: 1,
    name: "About",
    href: "#",
  },
  {
    id: 2,
    name: "Category",
    href: "#",
  },
  {
    id: 3,
    name: "Services",
    href: "#",
  },
  {
    id: 4,
    name: "Colours",
    href: "#",
  },
  {
    id: 5,
    name: "Downloads",
    href: "#",
  },
  {
    id: 6,
    name: "Become a dealer",
    href: "#",
  },
  {
    id: 7,
    name: "Blogs",
    href: "#",
  },
  {
    id: 8,
    name: "Contact",
    href: "#",
  },
];

const Header = () => {
  const renderLinks = (item: any) => {
    return (
      <Link
        className="aayush-text-sm aayush-font-semibold aayush-text-white"
        href={item.href}
        key={item.id}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <div className="aayush-sticky aayush-top-0 aayush-z-10 aayush-h-[100px] aayush-bg-[#0060AF] aayush-px-[80px] aayush-flex aayush-items-center aayush-justify-between">
      <Logo />
      <div className="aayush-flex aayush-items-center aayush-gap-8">
        {HEADER_URL_DATA.map(renderLinks)}
        <Button variant="filled" text="Enquire Now" link="#" color="#0060AF" />
      </div>
    </div>
  );
};

export default Header;
