import React from "react";

const SendMessage = ({ message, setMessage, handleOnSubmit }) => {
  return (
    <>
      <div className=" flex items-center justify-center w-[95%] md:w-[85%] lg:w-3/5 max-w-[900px]  h-[10%]">
        <div className="flex items-center justify-evenly  h-14 w-[90%] bg-[#21212c] rounded-xl">
          <form onSubmit={handleOnSubmit} className="w-[80%] md:w-[90%]">
            <input
              className="text-white placeholder:text-gray-500 font-medium shadow-2xl px-2  py-4 w-full outline-none bg-transparent "
              type="text"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
              placeholder="Start asking anything..."
            ></input>
          </form>
          <div className="flex items-center justify-center ">
            <svg
              onClick={handleOnSubmit}
              xmlns="http://www.w3.org/2000/svg"
              className=" w-8 h-8 text-white fill-gray-600 hover:fill-red-600 cursor-pointer"
              viewBox="0 0 24 24"
            >
              <path d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendMessage;
