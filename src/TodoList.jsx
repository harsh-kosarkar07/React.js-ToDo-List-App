import React, { useContext, useState } from "react";
import TaskList from "./TaskList";
import { FaClipboardList } from "react-icons/fa";
import { TodoContext } from "./TodoContext/TodoContext";

const TodoList = () => {
  const { activity, setActivity, update, handleAddTask } =
    useContext(TodoContext);

  return (
    <div className="md:w-96 border-2 border-black p-3 ">
      <div>
        <p className=" text-2xl mb-3 font-semibold flex gap-1 items-center ">
          Todo List{" "}
          <span className=" text-orange-600">
            <FaClipboardList size={30} />
          </span>
        </p>
        <div className="flex flex-col gap-2 items-center">
          <input
            type="text"
            className="w-[300px] px-2 text-lg rounded-md border-2 border-black"
            placeholder="Please write your task..."
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
          {update ? (
            <button
              onClick={handleAddTask}
              className=" bg-orange-700 rounded-md px-2 py-1 text-white"
            >
              Add Task
            </button>
          ) : (
            <button
              onClick={handleAddTask}
              className=" bg-orange-700 rounded-md px-2 py-1 text-white"
            >
              Update Task
            </button>
          )}

          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
