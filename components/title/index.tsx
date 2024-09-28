import React from "react";

type PropsType = {
  text: string;
};

const Title = ({ text }: PropsType) => {
  return <p className="aayush-text-3xl aayush-font-bold">{text}</p>;
};

export default Title;
