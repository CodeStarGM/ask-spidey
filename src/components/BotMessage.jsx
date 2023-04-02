import React from "react";
import Image from "next/image";
import spiderman from "../../public/spiderman1.png";

const BotMessage = ({ msg, isLoading }) => {
  return (
    <>
      <div id="bot" className="flex items-start  space-x-3">
        <Image
          className="rounded-full"
          src={spiderman}
          width={40}
          height={40}
        ></Image>
        {isLoading ? (
          <div className=" text-white w-fit max-w-[80%]  py-4 rounded-2xl">
            <div className="chat-bubble">
              <div className="typing">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="onEnterAnimation chatBubbleBot text-white w-fit max-w-[80%] whitespace-pre-wrap	 px-4 py-2 rounded-lg">
            <p className="text-sm md:text-base lg:text-lg">{msg}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default BotMessage;
