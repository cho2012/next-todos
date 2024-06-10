import React from "react";

interface Props {
  array: number[];
}

const Destructuring: React.FC<Props> = ({ array }) => {
  const copyArray = [...array];
  const one = copyArray.shift();
  const two = copyArray.shift();
  return (
    <div className="text-[3rem]">
      <div>Destructuring</div>
      <div>
        <div>array</div>
        {array.map((num) => num + " ")}
        <div>one</div>
        {one}
        <div>two</div>
        {two}
        <div>copy arrdy</div>
        {copyArray}
      </div>
    </div>
  );
};

export default Destructuring;
