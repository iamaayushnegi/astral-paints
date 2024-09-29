import Link from "next/link";
import React from "react";

type PropsType = {
  text: string;
  color?: string;
  link: string;
  variant?: string;
};

const Button = ({ text, color, link, variant = "filled" }: PropsType) => {
  const buttonStyles =
    variant === "outlined"
      ? `aayush-border-[1px]`
      : "aayush-border-none aayush-bg-white";

  return (
    <Link href={link}>
      <button
        style={{
          color: color,
          borderColor: variant === "outlined" ? color : "",
        }}
        className={`aayush-px-4 aayush-py-[14px] aayush-text-xs aayush-font-semibold aayush-rounded-[20px] ${buttonStyles}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
