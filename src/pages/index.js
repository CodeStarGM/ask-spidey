import Head from "next/head";
import Image from "next/image";
import spider from "../../public/spider.png";
import Spider from "@/components/Spider";
import SendMessage from "@/components/SendMessage";
import BotMessage from "@/components/BotMessage";
import UserMessage from "@/components/UserMessage";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchBotResponse = async () => {
    const { data } = await axios.post(
      "/api/openai",
      { message },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (message.trim() === "") return;
    handleUpdateMessages(message);
    setMessage("");
    handleFetchBotResponse().then((res) => {
      console.log(res);
      handleUpdateMessages(res.bot.trim(), true);
      setLoading(false);
    });
  };

  const handleUpdateMessages = (message, isBot, isLoading) => {
    if (isBot) {
      setMessageList((prevState) => {
        return [...prevState, { type: isLoading ? "loading" : "bot", message }];
      });
    } else {
      setMessageList((prevState) => {
        return [
          ...prevState,
          { type: isLoading ? "loading" : "user", message },
        ];
      });
    }
  };

  useEffect(() => {
    document.querySelector(".layout").scrollTop =
      document.querySelector(".layout").scrollHeight;
  }, [message]);
  return (
    <>
      <Head>
        <title>ASK SPIDEY</title>
        <meta
          name="description"
          content="an AI-powered chatbot built using the OpenAI API, it provides human-like responses to user input."
        />
        <meta name="author" content="Ghous Muhammad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/spider.png" />
      </Head>

      <div className=" flex flex-col items-center justify-start h-screen w-screen">
        <div className="lureSpidey absolute bottom-4 left-4 flex items-center justify-center">
          <Image
            className="opacity-20 hover:opacity-100 hover:scale-125 hover:animate-pulse transition cursor-pointer"
            src={spider}
            width={50}
            height={50}
          ></Image>
        </div>
        <Spider />

        <div className="layout pt-4 space-y-4 w-[95%] md:w-[90%] lg:w-3/5 max-w-[900px] h-[90%] max-h-[90%] overflow-y-auto">
          {messageList.map((msg, index) => (
            <>
              <div key={index}>
                {msg.type === "bot" ? <BotMessage msg={msg.message} /> : ""}
                {msg.type === "user" ? <UserMessage msg={msg.message} /> : ""}
              </div>
            </>
          ))}
          {loading && <BotMessage isLoading={true} />}
        </div>
        <SendMessage
          message={message}
          setMessage={setMessage}
          handleOnSubmit={handleOnSubmit}
        />
      </div>
    </>
  );
}
