import { ColorStroke } from "@/assets/svg";
import React from "react";

type PropsType = {
  text: string;
  color?: string;
  stroke?: boolean;
};

const Title = ({ text, color, stroke = true }: PropsType) => {
  return (
    <div className="aayush-flex aayush-items-center aayush-gap-x-6">
      <p className="aayush-text-3xl aayush-font-bold">{text}</p>
      {stroke && <ColorStroke color={color} />}
    </div>
  );
};

export default Title;
