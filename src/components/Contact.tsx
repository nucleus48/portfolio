import { ChangeEvent, useState } from "react";
import Whatsapp from "../assets/whatsapp.svg";
import Discord from "../assets/discord.svg";
import Github from "../assets/github.svg";

export default function Contact() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = <T extends HTMLInputElement | HTMLTextAreaElement>(
    callback: typeof setSubject,
    e: ChangeEvent<T>
  ) => callback(e.currentTarget.value);

  return (
    <section id="contact" className="py-16">
      <div className="flex flex-col sm:flex-row gap-8 items-center justify-center sm:justify-start">
        <div className="flex flex-col gap-4 w-full max-w-[500px]">
          <h2 className="mb-4 font-bold text-2xl">Contact Me</h2>
          <label className="flex flex-col gap-2">
            <div className="font-medium">Subject</div>
            <input
              className="border-2 border-gray-700 bg-transparent w-full rounded p-3 outline-blue-600"
              value={subject}
              onChange={handleChange.bind(null, setSubject)}
            />
          </label>

          <label className="flex flex-col gap-2">
            <div className="font-medium">Messsage</div>
            <textarea
              className="border-2 border-gray-700 bg-transparent w-full rounded p-3 outline-blue-600 min-h-16"
              value={message}
              onChange={handleChange.bind(null, setMessage)}
            ></textarea>
          </label>

          <div>
            <a
              className="inline-block py-2 px-4 rounded bg-blue-600 font-medium"
              href={`mailto:nucleuserumagborie@gmail.com?subject=${subject}&body=${message}`}
            >
              Send Email
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 *:w-max items-center md:items-stretch">
          <a
            className="py-1 px-2 border-2 border-gray-300 text-gray-300 font-medium rounded-full"
            href="mailto:nucleuserumagborie@gmail.com"
          >
            nucleuserumagborie@gmail.com
          </a>
          <a
            className="py-1 px-2 border-2 border-gray-300 text-gray-300 font-medium rounded-full"
            href="tel:+2347049695246"
          >
            +234 704 969 5346
          </a>
          <div className="flex gap-2 *:w-6">
            <a href="https://wa.me/2347049695246">
              <img src={Whatsapp} alt="whatsapp" />
            </a>
            <a href="https://discord.com/invite/NUaGntDJ">
              <img src={Discord} alt="discord" />
            </a>
            <a href="https://github.com/nucleus48">
              <img src={Github} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
