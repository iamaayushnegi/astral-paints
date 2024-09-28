import React from "react";

type PropsType = {
  text: string;
};

const Subtitle = ({ text }: PropsType) => {
  return <p className="aayush-text-lg aayush-font-medium">{text}</p>;
};

export default Subtitle;
