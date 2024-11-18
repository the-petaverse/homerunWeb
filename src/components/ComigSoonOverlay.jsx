import React from "react";

const ComigSoonOverlay = () => {
  return (
    <div className="absolute w-[100%] h-[100%] bg-black top-0 right-0 left-0 rounded-3xl bg-opacity-45 text-center flex align-middle justify-center flex-col">
      <h1
        className="font-bold text-3xl text-white"
      >
        Coming Soon
      </h1>
      {/* <button>Coming Soon</button> */}
    </div>
  );
};

export default ComigSoonOverlay;
