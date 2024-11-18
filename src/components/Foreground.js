import React, { useRef, useState, useEffect } from "react";
import Card from "./Card";
import "../index.css";
import { toast } from "react-toastify";
import { motion } from "framer-motion";


const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function Foreground() {
  const notify_empty = () => toast.success("Task list cleared successfully!");
  const notify_full = () => toast.error("No more task can be added");
  const notify_notext = () => toast.error("Enter atleast 1 word");
  const ref = useRef(null);
  const [taskno, setTaskno] = useState(1);
  const [desc, setDesc] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskno > 10) {
      notify_full();
      return;
    }
    const newItem = {
      id: new Date().getTime().toString(),
      title: desc,
      checked: done,
      task: taskno,
    };
    if (desc === "") {
      notify_notext();
      return;
    }
    setTaskno(taskno + 1);
    setList([...list, newItem]);
    setDesc("");
  };

  const clearAll = () => {
    setList([]);
    setTaskno(1);
    setDone(false);
  };

  const removeItem = (id) => {
    setDone(true);
    setList(list.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: 10 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="fixed top-2 left-[36%] z-[4] flex "
        >
          <input
            className="w-[400px] h-[45px] rounded-[10px] mt-[5px] bg-zinc-600 pl-[25px] text-xl"
            type="text"
            placeholder=" Type your tasks here"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></input>
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,255,225)",
            }}
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-zinc-200 py-1 px-3 ml-3 rounded-[10px] text-xl"
          >
            Submit !!
          </motion.button>
        </motion.div>
      </form>
      {list.length > 0 && (
        <>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.7, duration: 2 }}
            ref={ref}
            className="fixed top-10 left-10 z-[3] w-full h-full flex flex-wrap"
          >
            <Card reference={ref} items={list} removeItem={removeItem} />
          </motion.div>
          <motion.button
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            whileHover={{
              scale: 1.2,
              boxShadow: "0px 0px 8px rgb(255,255,225)",
              backgroundColor: "red",
            }}
            className="delete fixed z-[4] top-5 right-20 bg-green-700 w-fit h-[50px] text-zinc-200 py-0.2 px-4 text-xl rounded-[10px] mb-5"
            onClick={() => {
              clearAll();
              notify_empty();
            }}
          >
            Clear List
          </motion.button>
        </>
      )}
    </>
  );
}

export default Foreground;
