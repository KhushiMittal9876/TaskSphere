import React from "react";

function Backgrnd() {
  return (
    <div className="fixed z-[2] w-full h-screen">
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] leading-none tracking-tighter font-semibold text-zinc-400">
        Just do it!
      </h1>
         <h6 className="absolute bottom-1 right-1/2 translate-x-[40%] text-[1.5vw] text-zinc-600">
        Made by KM💎
      </h6>
    </div>
  );
}

export default Backgrnd;