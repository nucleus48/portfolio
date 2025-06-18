"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Form from "next/form";
import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const emailTemplate = `mailto:nucleuserumagborie@gmail.com?subject=Contact from ${encodeURIComponent(
    name
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  )}`;

  return (
    <section id="contact" className="space-y-8">
      <h2>CONTACT ME</h2>

      <Form action={() => void open(emailTemplate)} className="space-y-8">
        <div className="flex flex-row *:flex-1 gap-4 md:gap-8">
          <div className="space-y-2">
            <Label>Name</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              type="email"
              placeholder="Your@gmail.com"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Message</Label>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
            className="min-h-32"
            placeholder="Message"
            required
          />
        </div>
        <Button size={"lg"} className="w-full">
          Submit
        </Button>
      </Form>
    </section>
  );
}
