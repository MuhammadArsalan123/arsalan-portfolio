import React from "react";
import { UserData } from "../data/UserData";
import {
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaEnvelope } from "react-icons/fa";
function Contact() {
  const { contactSocialMedia } = UserData;

  const socialMediaIcons = {
    FaLinkedinIn: FaLinkedinIn,
    AiFillInstagram: AiFillInstagram,
    FaFacebookF: FaFacebookF,
    AiOutlineWhatsApp: AiOutlineWhatsApp,
    FaEnvelope: FaEnvelope,
  };

  return (
    <div className="flex w-full items-center justify-center lg:mb-4">
      <div className="flex flex-col items-center justify-center">
        <h2 className="pb-12 pt-12 text-center text-3xl tracking-wider text-gray-900 lg:text-5xl">
          Get In Touch
        </h2>
        <p className="font-poppins mx-auto px-2 pb-6 text-center text-sm tracking-wider text-gray-900 lg:w-[50%]">
          I'd love to connect and explore exciting opportunities with you!
          Whether you have interesting projects, creative ideas, or just want to
          chat, please don't hesitate to reach out. My inbox is open 24/7!
        </p>

        <div className="mt-4 flex gap-8 lg:gap-1">
          {contactSocialMedia.map((data, index) => {
            const IconComponent = socialMediaIcons[data.icon];
            return (
              <button
                className="flex items-center justify-center rounded-lg border-double border-4 border-black bg-transparent hover:bg-white hover:bg-opacity-20 hover:opacity-80 hover:shadow-lg lg:h-12 lg:w-24"
                key={index}
                onClick={() => window.open(data.url, "_blank")}
              >
                <IconComponent className="icon" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
