import React from "react";

interface Props {
  name?: string;
  color?: string;
  isBorder?: boolean;
}

const Button: React.FC<Props> = ({
  name = "",
  color = "skyblue",
  isBorder = false,
}) => {
  return (
    <div
      className={`${
        isBorder && "border"
      } w-[80px] text-center py-2 rounded-lg cursor-pointer`}
      style={{ color: color }}
    >
      {name}
    </div>
  );
};

export default Button;
