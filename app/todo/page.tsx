"use client";
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
    <div className="flex flex-col items-center">
      <div className="mt-20">
        {/* <Destructuring array={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} /> */}
      </div>
      <div className="title text-[5rem] font-extrabold mt-32">Todo</div>
      <div className="border-red-500">
        <input
          type="text"
          value={input}
          placeholder="여기에 입력하세요"
          className="text-black text-3xl p-2 max-w-[15rem]"
          onChange={(e) => setInput(e.target.value)}
        />

        {/* <button
          className="border bg-white text-black m-2 p-2 rounded-lg"
          onClick={() => {
            setInput("");
          }}
        >
          클리어
        </button> */}
      </div>

      <button
        className="border bg-white text-black m-2 p-2 rounded-lg"
        onClick={addButtonHandle}
      >
        할일 추가
      </button>
      <div className="text-[2rem]">
        {todos?.map((item, index) => {
          return (
            <div key={index} className="relative">
              <div
                onClick={(e) => doneHandle(e, item.id)}
                className={`border w-[25rem] m-4 p-2 ${
                  (item.size && "text-[1rem]",
                  item.done && "line-through opacity-50")
                }`}
              >
                {item.todo}
              </div>
              <FaDeleteLeft
                onClick={(e) => deleteHandle(e, item.id)}
                className="absolute right-8 top-4"
              />
            </div>
          );
        })}
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
