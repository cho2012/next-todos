import React from "react";

interface Props {
  userName: string | undefined;
}

const Title: React.FC<Props> = ({ userName }) => {
  return (
    <div>
      <div className="flex  items-center justify-start ">
        <div className="h-[50px] w-[50px] bg-cover bg-[url('./todo/image/hG.png')]"></div>
        <div className="ml-[10px] font-[110] text-[24px]">{userName}</div>
      </div>
    </div>
  );
};

export default Title;
