"use client";
import Header from "@/components/header";
import { useEffect, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";

type TodoType = {
  id: string;
  todo: string;
  done: boolean;
  size?: number;
};

export default function Todo() {
  const [input, setInput] = useState<string>("");

  const [todos, setTodos] = useState<TodoType[]>(() => {
    if (typeof window !== "undefined") {
      const savedTodos = window.localStorage.getItem("myTodos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    } else {
      return [];
    }
  });

  const addButtonHandle = () => {
    console.log(input.replace(/\s/g, ""), length);

    if (input.replace(/\s/g, "") !== "") {
      const addTodo = [
        ...todos,
        { id: String(new Date()), todo: input, done: false },
      ];

      window.localStorage.setItem("myTodos", JSON.stringify(addTodo));
      setTodos(addTodo);
      setInput("");
    }
  };

  const removeTodo = () => {};

  const deleteHandle = (e: any, param: string) => {
    console.log(param);
    const filtered = todos.filter((todo) => todo.id !== param);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("myTodos", JSON.stringify(filtered));
    }
    setTodos(filtered);
  };
  const doneHandle = (e: any, param: string) => {
    const editTodos = todos.map((todo) =>
      todo.id === param ? { ...todo, done: !todo.done } : { ...todo }
    );
    setTodos(editTodos);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("myTodos", JSON.stringify(editTodos));
    }
  };

  useEffect(() => {});

  return (
    <div className="bg-white ">
      <div className="bg-[url('./todo/image/bg.png')] w-screen h-screen bg-cover">
        <div className=">mt-20">
          {/* <Destructuring array={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} /> */}
        </div>
        <div className="flex justify-around">
          <div className="justify-start mt-[400px] ">
            <div className="text-[2rem]  bg-white inline-grid   ">
              {todos?.map((item, index) => {
                return (
                  <div key={index} className="relative text-black  ">
                    <div
                      onClick={(e) => doneHandle(e, item.id)}
                      className={`border-black w-[25rem] m-4   ${
                        (item.size && "text-[1rem]",
                        item.done && "line-through opacity-50")
                      }`}
                    >
                      {item.todo}
                    </div>
                    <FaDeleteLeft
                      onClick={(e) => deleteHandle(e, item.id)}
                      className="absolute left-[22rem]  top-6"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* <button
          className="border bg-white text-black m-2 p-2 rounded-lg"
          onClick={() => {
            setInput("");
            }}
            >
            클리어
            </button> */}
          <div className="justify-end">
            <div className="inline text-center">
              <div className=" text-[15rem] font-extrabold pt-32  text-black">
                Todo
              </div>
              <div className="border-red-500">
                <div className=" ">
                  <input
                    type="text"
                    value={input}
                    placeholder="여기에 입력하세요"
                    className="   text-[2rem] text-center  text-black "
                    onChange={(e) => setInput(e.target.value)}
                    onClick={addButtonHandle}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// const todos: string[] = ["동해물과", "백두산이"];

// const ex = { todos: ["동해물과", "백두산이"] };

// function addText(글자: string) {
//   console.log("클릭");
//   todos.push(글자);
// }
