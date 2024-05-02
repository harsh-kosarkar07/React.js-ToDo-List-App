import {createContext,useContext,useEffect,useState} from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

const useTodoContext = ()=> useContext(TodoContext)

const getLocalItem = ()=>{
    const storeItem = localStorage.getItem("list")
    return storeItem ? JSON.parse(localStorage.getItem("list")) : []
}

const TodoProvider = ({ children }) => {
  const [activity, setActivity] = useState("");

  const [task, setTask] = useState(getLocalItem());

  const [update, setUpdate] = useState(true);

  const [edit, setEdit] = useState(null);

  useEffect(()=>{
    localStorage.setItem("list", JSON.stringify(task))
  },[task])

  const handleAddTask = () => {
    if (activity === "") {
      alert("Please fill the Input box.");
    } else if (!update) {
      setTask(
        task.map((newEl) => {
          if (newEl.id === edit) {
            return { ...newEl, title: activity };
          }
          return newEl;
        })
      );
      setActivity("");
      setUpdate(true);
    } else {
      const allActivity = { id: uuidv4(), title: activity, complete: false };
      setTask([...task, allActivity]);
      setActivity("");
      setEdit(null);
    }
  };

  
  const handleDelete = (id) => {
    const isConfirm = window.confirm("Are you sure, you want to remove it?")
    if(isConfirm){
      const filterItem = task.filter((item) => id != item.id);
      setTask(filterItem);
    }
    
  };

  const handleEdit = (id) => {
    const findItem = task.find((el) => {
      return id === el.id;
    });
    console.log(findItem);
    setActivity(findItem.title);
    setUpdate(false);
    setEdit(id);
  };

  const handleRemoveAll = () => {
    setTask([]);
  };

  const handleComplete = (id) => {
    setTask(
      task.map((compItem) => {
        if (compItem.id === id) {
          return { ...compItem, complete: !compItem.complete };
        }
        return compItem;
      })
    );
  };


  const allValues = {
    activity,setActivity,task,setTask,update,setUpdate,
    edit,setEdit,handleAddTask,handleComplete,   handleDelete,handleEdit,handleRemoveAll};

  return (
    <TodoContext.Provider value={allValues}> {children}</TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider, useTodoContext };
