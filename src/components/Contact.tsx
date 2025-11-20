"use client";

"use client";

import { useState } from "react";
import { Container, Button } from "@/components/ui";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // For now we just simulate a successful submit — integrate with API later
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 animate-slide-in">
      <Container>
        <h2 className="text-4xl font-bold text-center font-heading">Get in Touch</h2>
        <p className="text-lg mt-4 max-w-3xl mx-auto text-center text-foreground/80">
          Have a project in mind? We&apos;d love to hear from you.
        </p>

        {!submitted ? (
          <form onSubmit={onSubmit} className="mt-12 max-w-xl mx-auto bg-secondary p-8 rounded-lg shadow-lg animate-fade-in animate-delay-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required
                className="bg-background p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              />

              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
                className="bg-background p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              />
            </div>
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="bg-background p-4 rounded-lg w-full mt-4 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
              rows={5}
              required
            />
            <div className="text-center mt-6">
              <Button type="submit" size="lg">
                Send Message
              </Button>
            </div>
          </form>
        ) : (
          <div className="mt-12 max-w-xl mx-auto bg-secondary p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold">Thanks — we&apos;ll be in touch</h3>
            <p className="mt-2 text-foreground/80">We received your message and will reply shortly.</p>
          </div>
        )}
      </Container>
    </section>
  );
}
