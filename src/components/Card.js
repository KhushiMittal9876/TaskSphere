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
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="relative flex-shrink-0  w-40 h-[170px] bg-zinc-900/90 text-white rounded-[20px] ml-9 py-7 px-6 overflow-hidden"
      key={id}
    >
    

        <div className="flex items-center justify-between">
          <GoGoal />
          <span className="mt-0 font-semibold">Task No. {task}</span>
        </div>
        <p className="text-sm mt-4 text-transform: capitalize">
        {title}
        </p>
        <button className="footer absolute bottom-0 bg-green-500 py-5 w-40 h-10 left-0 flex items-center justify-center font-semibold text-zinc-900/90" onClick={()=> removeItem(id)}>
          Done
        </button>
        
    </motion.div>
      )
      })}
    </div>
  );
}

export default Card;
