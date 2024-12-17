"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const chatbotElement = document.querySelector(".chatbot-link");
      if (window.scrollY > 100) {
        chatbotElement?.classList.add("visible");
      } else {
        chatbotElement?.classList.remove("visible");
      }
    };

    const checkScrollVisibility = () => {
      const chatbotElement = document.querySelector(".chatbot-link");
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollHeight > clientHeight) {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
      } else {
        chatbotElement?.classList.add("visible");
      }
    };

    checkScrollVisibility();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseModal = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains("chatbot-modal")) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <a
        className="chatbot-link fixed bottom-4 left-4 bg-blue-500 text-white p-2 rounded-full shadow-lg cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <span className="absolute left-[7px] top-[7px] -z-50 size-10">
          <span className="flex size-full items-center justify-center animate-ping rounded-full opacity-75 bg-blue-500"></span>
        </span>
        <Image
          src="/chatbot_icon.png"
          alt="chatbot"
          width={50}
          height={50}
          className="chatbot-icon"
          unoptimized
        />
      </a>

      {isOpen && (
        <div
          className="chatbot-modal fixed inset-0 bg-black bg-opacity-50 flex justify-center md:justify-start items-center z-50"
          onClick={handleCloseModal}
        >
          <div className="bg-gradient-to-b from-purple-500 to-blue-500 p-4 rounded-lg shadow-lg w-80% md:w-[50%] max-w-lg relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full font-bold text-lg"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
            {isLoading && (
              <div className="flex justify-center items-center h-full">
                <div className="loader"></div>
              </div>
            )}
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/hOUr3PookT9pouUT1SthF"
              width="100%"
              height="500px"
              frameBorder="0"
              onLoad={() => setIsLoading(false)}
              className={isLoading ? "hidden" : ""}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
