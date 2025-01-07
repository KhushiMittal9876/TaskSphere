import React from "react";

function Backgrnd() {
  return (
    <>
    <div className="fixed z-[2] w-full h-screen font-['gilroy']">
      <h1 className="absolute top-1/3 left-1/2 -translate-x-[50%] -translate-y-[30%] text-[9vw] leading-none tracking-tighter font-semibold text-gray-950 dark:text-zinc-200">
      Stay Focused!
      </h1>    
    </div>
    <h6 className="absolute bottom-0 right-1/2 font-['gilroy'] translate-x-[40%] -translate-y-[10%] text-[1.5vw] text-zinc-600">
        Made by KM💎
      </h6>
    </>
  );
}

export default Backgrnd;
