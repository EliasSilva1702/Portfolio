"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SyncLoader } from "react-spinners";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast, Toaster } from "react-hot-toast";

export default function ContactForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Muestra el Progress

    emailjs
      .sendForm("service_ccw5p3s", "template_b26ij1a", form.current, {
        publicKey: "YyX5EPXOArF4Jsi0t",
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
          setLoading(false); // Oculta el Progress
          form.current.reset();
        },
        (error) => {
          toast.error("Oops something is wrong");
          setLoading(false); // Oculta el Progress
        }
      );
  };

  return (
    <form ref={form} className="space-y-8" onSubmit={sendEmail}>
      <div className="grid md:grid-cols-2 md:gap-7 mt-8">
        <Input
          required
          type="text"
          name="user_name"
          placeholder="Your name"
          className="dark:bg-slate-800 mb-4"
          autoComplete="off"
        />
        <Input
          required
          type="email"
          name="user_email"
          placeholder="Your email"
          className="dark:bg-slate-800 mb-4"
          autoComplete="off"
        />
      </div>

      <Textarea
        required
        name="message"
        placeholder="Your Message"
        className="dark:bg-slate-800 mb-4"
      />

      <div className="flex flex-col">
        {loading ? (
          <span className="text-center">
            <SyncLoader color="#e6530b" size={8} margin={2} />
          </span>
        ) : (
          <Button type="submit" value="Send">
            Submit
          </Button>
        )}
      </div>

      <Toaster position="bottom-right" reverseOrder={false} />
    </form>
  );
}
