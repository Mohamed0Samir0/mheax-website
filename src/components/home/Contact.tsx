import { useState } from "react";
import { Container } from "../ui/Container";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitContact = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Start a Project — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}\n`
    );
    window.location.href = `mailto:Samir@mheax.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="border-t border-[var(--color-line)] py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
              Contact
            </p>
            <h2 className="font-display text-3xl font-medium leading-tight text-[var(--color-paper)] sm:text-4xl md:text-5xl">
              Let's Talk
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--color-paper-dim)]">
              Tell me what you're working on, what you're trying to improve, or where the current
              message isn't working.
            </p>
          </div>

          <form className="flex flex-col gap-5" onSubmit={submitContact}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-b border-[var(--color-line)] bg-transparent py-3 text-sm text-[var(--color-paper)] outline-none placeholder:text-[var(--color-paper-dim)] focus:border-[var(--color-gold)]"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b border-[var(--color-line)] bg-transparent py-3 text-sm text-[var(--color-paper)] outline-none placeholder:text-[var(--color-paper-dim)] focus:border-[var(--color-gold)]"
              />
            </div>
            <textarea
              placeholder="What are you working on?"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="resize-none border-b border-[var(--color-line)] bg-transparent py-3 text-sm text-[var(--color-paper)] outline-none placeholder:text-[var(--color-paper-dim)] focus:border-[var(--color-gold)]"
            />
            <button
              type="submit"
              className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-gold-soft)]"
            >
              <span>Start a Project</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>

            <div className="mt-6 flex flex-col gap-2 border-t border-[var(--color-line)] pt-6 text-sm">
              <a href="mailto:Samir@mheax.com" className="text-[var(--color-paper)] hover:text-[var(--color-gold)]">
                Samir@mheax.com
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-samir-52bb5928b/"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--color-paper)] hover:text-[var(--color-gold)]"
              >
                LinkedIn
              </a>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
