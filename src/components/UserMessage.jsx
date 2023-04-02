import React from "react";
import Image from "next/image";
import user from "../../public/user4.png";

const UserMessage = ({ msg }) => {
  return (
    <>
      <div id="user" className="flex items-start space-x-3">
        <Image src={user} width={40} height={40}></Image>
        <div className="text-white bg-[#2b2b36] w-fit max-w-[80%] whitespace-pre-wrap	  px-4 py-2 rounded-lg">
          <p className=" text-base">{msg}</p>
        </div>
      </div>
    </>
  );
};

export default UserMessage;
