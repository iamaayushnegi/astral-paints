import Link from "next/link";
import React from "react";

type PropsType = {
  text: string;
  color?: string;
  link: string;
};

const Button = ({ text, color, link }: PropsType) => {
  return (
    <Link href={link}>
      <button>{text}</button>
    </Link>
  );
};

export default Button;
