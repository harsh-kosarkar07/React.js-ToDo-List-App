import React from "react";
import { CiSquareCheck } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useTodoContext } from "./TodoContext/TodoContext";

const TaskList = () => {

  const {task,handleComplete,handleDelete,handleEdit,handleRemoveAll} = useTodoContext()

  return (
    <div className=" w-full">
      <ul
        className=" flex
      flex-col gap-3 text-lg"
      >
        {task.map((todotask) => (
          <li
            key={todotask.id}
            className={` bg-zinc-200 flex justify-between ${
              todotask.complete?"line-through":""
            } `}
          >
            <div className="flex gap-2">
              <span
                onClick={() => handleComplete(todotask.id)}
                className=" cursor-pointer"
              >
                <CiSquareCheck size={25} />
              </span>
              <span> {todotask.title}</span>
            </div>
            <div className="flex gap-2">
              <span
                onClick={() => handleEdit(todotask.id)}
                className=" cursor-pointer"
              >
                <FaEdit size={25} />
              </span>
              <span
                onClick={() => handleDelete(todotask.id)}
                className=" cursor-pointer"
              >
                <MdDelete size={25} />
              </span>
            </div>
          </li>
        ))}
      </ul>
      {task.length >= 1 && (
        <div className=" w-full flex justify-center">
          <button
            onClick={handleRemoveAll}
            className=" bg-blue-900 mt-2 rounded-md px-2 py-1 text-white w-[100px]"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskList;
