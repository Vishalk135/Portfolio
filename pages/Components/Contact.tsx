"use client";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.log("Email sending error:", error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div
      className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8"
      id="contact"
    >
      <div className="flex justify-center items-center">
        <ul className="space-y-4">
          <li className="flex items-center">
            <Image src={phone} alt="phone" className="h-[110px] w-auto mr-6" />
            <p className="text-xl">+91 9284538116</p>
          </li>
          <li className="flex items-center">
            <Image src={mail} alt="mail" className="h-[110px] w-auto mr-6" />
            <p className="text-xl">vishalkumbhar56@gmail.com</p>
          </li>
        </ul>
      </div>

      <div className="bg-white/10 p-6 rounded-xl max-w-[550px]">
        <h2 className="text-5xl font-bold text-orange-400 mb-4">
          Let's connect
        </h2>
        <p className="text-white/70 mb-6">Send me a message</p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="first_name" type="text" className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder='First Name' required />
            <input name="last_name" type="text" className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder='Last Name' required />
            <input name="email" type="email" className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder='Email' required />
            <input name="phone" type="text" className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder='Phone No.' />
          </div>
          <textarea name="message" className="bg-black/70 rounded-xl w-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder='Your Message' required />
          <button type="submit" className="bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
