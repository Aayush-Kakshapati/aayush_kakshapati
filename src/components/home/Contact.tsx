"use client";

import { useState } from "react";
import Card from "../ui/Card";
import { Heading, Text } from "../ui/fonts";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <Heading as="h2" className="text-(--primary)">
        Contact
      </Heading>
      <Text className="mt-2">Let’s build something meaningful together.</Text>

      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <input
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
          className="w-full rounded-lg border border-(--border) bg-(--surface) p-3 text-(--foreground)"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          onChange={handleChange}
          className="w-full rounded-lg border border-(--border) bg-(--surface) p-3 text-(--foreground)"
        />
        <textarea
          name="message"
          rows={4}
          placeholder="Message"
          required
          onChange={handleChange}
          className="w-full rounded-lg border border-(--border) bg-(--surface) p-3 text-(--foreground)"
        />
        <button
          type="submit"
          className="rounded-xl bg-(--primary) hover:bg-(--hover-button) px-6 py-3 font-medium text-(--primary-foreground)"
        >
          Send Message
        </button>
      </form>
    </Card>
  );
}
