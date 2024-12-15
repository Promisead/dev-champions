"use client";

import Image from "next/image";
import React, { useEffect } from "react";

const WhatsappLive = () => {
  const whatsappNumber = "+2349115034504";
  const baseUrl = "https://api.whatsapp.com/send/";
  const emailAddress = "info@dev-champions.tech";
  const encodedMessage = `Hello, feel free to drop a mail here too (: :${emailAddress}`;
  const whatsappLink = `${baseUrl}?phone=${whatsappNumber}&text=${encodedMessage}&type=phone_number&absent=0`;

  useEffect(() => {
    const handleScroll = () => {
      const whatsappLinkElement = document.querySelector(".whatsapp-link");
      if (window.scrollY > 100) {
        whatsappLinkElement?.classList.add("visible");
      } else {
        whatsappLinkElement?.classList.remove("visible");
      }
    };

    const checkScrollVisibility = () => {
      const whatsappLinkElement = document.querySelector(".whatsapp-link");
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollHeight > clientHeight) {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
      } else {
        whatsappLinkElement?.classList.add("visible");
      }
    };

    checkScrollVisibility();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <a
        className="whatsapp-link relative"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="absolute left-[7px] top-[7px] -z-50 size-10">
          <span className="flex size-full items-center justify-center animate-ping rounded-full opacity-75 bg-green-500"></span>
        </span>
        <Image
          src="/whatsapp_icon.png"
          alt="whatsapp"
          width={50}
          height={50}
          className="whatsapp-icon z-50"
          unoptimized
        />
      </a>
    </div>
  );
};

export default WhatsappLive;
