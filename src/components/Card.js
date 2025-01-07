import React from "react";
import { GoGoal } from "react-icons/go";
import { motion } from "framer-motion";


function Card({ reference , items, removeItem}) {
  return (
    <div className="main flex flex-wrap gap-6 pl-20 pt-20 pr-10">
    {items.map((item)=>{
      const {id, title, task} = item
      return(
    <motion.div
      drag  
      dragConstraints={reference}
      whileDrag={{ scale: 1.3 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="relative flex-shrink-0  w-56 h-52 bg-gray-950 text-white rounded-[20px] ml-9 py-7 px-6 overflow-hidden text-xl"
      key={id}
    > 
    <button className="footer absolute bottom-0 bg-green-500 py-5 text-center w-60 h-12 left-0 flex items-center justify-center font-bold text-zinc-900/90" onClick={()=> removeItem(id)}>
    Done
  </button>
        <div className="relative flex items-center justify-between">
          <GoGoal />
          <span className="mt-0 font-semibold">Task No. {task}</span>
        </div>
        <p className="text-lg mt-2 text-transform: capitalize">
        {title}
        </p>
    </motion.div>
      )
      })}
    </div>
  );
}

export default Card;
