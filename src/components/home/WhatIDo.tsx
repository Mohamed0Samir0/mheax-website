import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

const services = [
  {
    title: "Conversion Copywriting",
    description:
      "Paid ads, landing pages, and email designed around the customer, the offer, and the action you want them to take.",
    items: ["Paid Ad Copy", "Landing Page Copy", "Email Marketing", "Headlines & CTAs", "Messaging"],
  },
  {
    title: "Creative Strategy",
    description: "Finding the customer insight, angle, and idea before execution begins.",
    items: ["Customer & Message Research", "Creative Angles", "Hooks", "Big Ideas", "Campaign Concepts", "Messaging Strategy"],
  },
  {
    title: "Conversion-Focused Websites",
    description:
      "Websites that connect positioning, copy, structure, and user action into one clear experience.",
    items: ["Website Strategy", "Website Copy", "Landing Pages", "Conversion Structure", "Framer Websites", "CTA & User Flow"],
  },
  {
    title: "Creative Direction",
    description:
      "Visual direction built to communicate the advertising idea rather than simply make something look good.",
    items: ["Creative Concepts", "Visual Direction", "Ad Concepts", "AI-Assisted Visual Direction", "Campaign Visual Thinking"],
  },
];

export function WhatIDo() {
  return (
    <section id="services" className="border-t border-[var(--color-line)] py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="What I Do"
          title="What I Do"
          supporting="I work across the parts of the conversion process where messaging and creative thinking matter most."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2">
          {services.map((service, i) => (
            <div key={service.title} className="border-t border-[var(--color-line)] pt-8">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl font-medium text-[var(--color-paper)] md:text-3xl">
                {service.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-paper-dim)]">
                {service.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--color-line)] px-3.5 py-1.5 text-xs text-[var(--color-paper-dim)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
