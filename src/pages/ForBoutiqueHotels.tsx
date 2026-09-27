import { useState } from "react";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";

const questions = [
  {
    q: "Why book directly instead of through an OTA?",
    a: "Guests comparing a hotel's own site against a familiar OTA listing often land on the OTA out of habit, not preference. If the direct-booking page doesn't make a clear, specific case beyond \"best rate guaranteed,\" price parity alone may not be reason enough to switch tabs.",
  },
  {
    q: "Which room is actually right for me?",
    a: "Room pages built mostly around photography can leave a guest unsure what's genuinely different between two similar-looking options — a common friction point when someone's deciding between two rates with no clear reason to pick one over the other.",
  },
  {
    q: "What happens if something changes?",
    a: "Cancellation terms, flexibility, what's actually included — when this is buried or unclear, it can quietly add hesitation right before the booking button, even on an otherwise beautiful page.",
  },
];

const faqs = [
  {
    q: "Do you redesign the website?",
    a: "No. I work on the copy and messaging inside your existing site and booking engine — not the design, layout, or development. If a design change would help, I'll say so, but that's not the service.",
  },
  {
    q: "Do you need access to our booking engine or analytics?",
    a: "Not for the free teardown. For ongoing work, access can add useful context, but it isn't required to get started.",
  },
  {
    q: "What exactly do you change?",
    a: "Mostly the words: headlines, room and offer descriptions, calls-to-action, FAQ and objection-handling copy, and the messaging around booking direct specifically.",
  },
  {
    q: "Have you worked with hotels before?",
    a: "Not yet as a direct hotel client. The closest related project is the innRoad strategy below — built for a company making software for independent hotel operators, using the same approach I'd apply to a hotel's own guest-facing site.",
  },
  {
    q: "What does the free teardown actually include?",
    a: "A short, written read of your current homepage or booking page, focused on messaging clarity and where guest hesitation may be showing up — not a technical audit, SEO review, or design critique.",
  },
];

export default function ForBoutiqueHotels() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");

  const submitTeardown = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Free Booking Page Teardown Request");
    const body = encodeURIComponent(
      `Hotel website / booking page: ${url}\nReply email: ${email}\n`
    );
    window.location.href = `mailto:Samir@mheax.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pb-28 pt-36 md:pt-44">
      {/* Hero */}
      <Container>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
          Conversion Copywriting — For Independent &amp; Boutique Hotels
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.1] text-balance text-[var(--color-paper)] sm:text-5xl md:text-6xl">
          A beautiful hotel website doesn't automatically get a guest to book direct.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--color-paper-dim)] md:text-xl">
          I'm a conversion copywriter. I work on the messaging that sits between "this looks like
          a beautiful place to stay" and "I feel confident enough to book this directly, right
          now" — not the photography, not the design, the words around them.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href="#teardown" variant="primary">
            Get a Free Booking Page Teardown
          </Button>
          <Button href="#how-it-helps" variant="secondary">
            See How This Works
          </Button>
        </div>
      </Container>

      {/* Problem */}
      <section className="mt-28 border-t border-[var(--color-line)] pt-20 md:mt-36 md:pt-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="order-1 overflow-hidden rounded-xl border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]" style={{ aspectRatio: "4 / 3" }}>
              <img
                src="/images/hospitality/the-gap.jpg"
                alt="Boutique hotel room nightstand with phone and keys"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-2 space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
                The Gap
              </p>
              <div className="space-y-6 text-lg leading-relaxed text-[var(--color-paper-dim)] md:text-xl">
                <p className="font-display text-2xl font-medium text-[var(--color-paper)] md:text-3xl">
                  Pretty and persuasive aren't the same thing.
                </p>
                <p>
                  Many independent and boutique hotel websites are genuinely well designed —
                  strong photography, a real sense of place, atmosphere that comes through
                  clearly. And a guest can find all of that beautiful and still leave without
                  booking directly.
                </p>
                <p>
                  Often it's not the design. It's that a few specific questions never got a clear
                  answer along the way — what makes one room different from another, why book
                  here instead of the OTA tab still open next to it, what happens if plans change.
                  That gap between{" "}
                  <span className="text-[var(--color-paper)]">looking beautiful</span> and{" "}
                  <span className="text-[var(--color-paper)]">feeling ready to book</span> is
                  where the copy either does its job or quietly gets in the way.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Three questions */}
      <section className="mt-28 border-t border-[var(--color-line)] pt-20 md:mt-36 md:pt-28">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
              Worth Checking
            </p>
            <h2 className="font-display text-3xl font-medium leading-[1.15] text-balance text-[var(--color-paper)] sm:text-4xl md:text-5xl">
              Three questions your website should answer before a guest books.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-paper-dim)] md:text-lg">
              Not every property has the same friction point, and not every hotel has all three.
              These are common places where guest hesitation can quietly build — worth checking
              against your own site rather than assuming.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3">
            {questions.map((item) => (
              <div key={item.q} className="border-t border-[var(--color-line)] pt-8">
                <h3 className="font-display text-xl font-medium leading-snug text-[var(--color-paper)] md:text-2xl">
                  {item.q}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[var(--color-paper-dim)]">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How conversion copywriting helps */}
      <section id="how-it-helps" className="mt-28 scroll-mt-28 border-t border-[var(--color-line)] pt-20 md:mt-36 md:pt-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_1.2fr] md:gap-20">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
                How This Helps
              </p>
              <h2 className="font-display text-3xl font-medium leading-[1.15] text-balance text-[var(--color-paper)] md:text-4xl">
                Same approach, aimed at one specific decision.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[var(--color-paper-dim)] md:text-lg">
                Understand the guest, find the real hesitation behind the booking decision, and
                write toward it — the same process behind every project on this site, applied
                specifically to how a hotel's website and booking journey communicate.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
              {[
                "Homepage & positioning copy",
                "Room & suite descriptions",
                "Booking-flow & CTA copy",
                "Offer & rate-plan clarity",
                "FAQ & objection handling",
                "Direct-booking messaging",
              ].map((item) => (
                <div key={item} className="border-t border-[var(--color-line)] pt-6">
                  <p className="text-base font-medium text-[var(--color-paper)]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-14 max-w-2xl text-sm leading-relaxed text-[var(--color-paper-dim)]">
            This is a copywriting service, not web design or development. The site, booking
            engine, and technical setup stay exactly as they are — the work happens in the words
            layered on top of them.
          </p>
        </Container>
      </section>

      {/* innRoad reference */}
      <section className="mt-28 border-t border-[var(--color-line)] pt-20 md:mt-36 md:pt-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="order-2 md:order-1">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
                Related Work
              </p>
              <h2 className="font-display text-2xl font-medium leading-tight text-[var(--color-paper)] md:text-3xl">
                How Objection-First Messaging Applies to Hospitality
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--color-paper-dim)] md:text-lg">
                In our work with innRoad—a leading property management platform powering
                thousands of independent hotel operators—we mapped the exact friction points that
                make operators hesitate before making a high-stakes decision.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[var(--color-paper-dim)] md:text-lg">
                Whether it's a hotel owner choosing software or a guest deciding where to spend
                $1,000 on a vacation, the psychological trigger is identical: unaddressed
                hesitation kills the transaction. Here is how we engineered the messaging to
                remove that hesitation.
              </p>
              <div className="mt-8">
                <Button to="/work/innroad" variant="secondary">
                  See the innRoad Strategy
                </Button>
              </div>
            </div>
            <div className="order-1 overflow-hidden rounded-xl border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:order-2" style={{ aspectRatio: "4 / 3" }}>
              <img
                src="/images/hospitality/objection-first.jpg"
                alt="Desk with laptop open, working through messaging strategy"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Teardown offer */}
      <section id="teardown" className="mt-28 scroll-mt-28 border-t border-[var(--color-line)] pt-20 md:mt-36 md:pt-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_1fr] md:gap-20">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
                No-Obligation
              </p>
              <h2 className="font-display text-3xl font-medium leading-[1.15] text-balance text-[var(--color-paper)] md:text-4xl">
                Free 5-Minute Booking Page Teardown
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[var(--color-paper-dim)] md:text-lg">
                Send your hotel's website or direct-booking page, and I'll send back a short,
                specific read on the messaging: what's clear, what a guest could misread, and
                where a real question might be going unanswered.
              </p>

              <ul className="mt-8 flex flex-col gap-3">
                {[
                  "Messaging clarity",
                  "Offer & room communication",
                  "Booking-flow friction in the copy",
                  "CTA clarity",
                  "Objection handling",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-[var(--color-paper-dim)]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[var(--color-gold)]" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-8 max-w-md text-sm leading-relaxed text-[var(--color-paper-dim)]">
                This is a read on messaging, not a technical, SEO, or design audit — and not a
                promise of any specific booking outcome. Just a specific, outside look at where
                the copy might be working harder for you.
              </p>
            </div>

            <form onSubmit={submitTeardown} className="flex flex-col gap-5">
              <input
                type="url"
                required
                placeholder="Link to your website or booking page"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="border-b border-[var(--color-line)] bg-transparent py-3 text-sm text-[var(--color-paper)] outline-none placeholder:text-[var(--color-paper-dim)] focus:border-[var(--color-gold)]"
              />
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b border-[var(--color-line)] bg-transparent py-3 text-sm text-[var(--color-paper)] outline-none placeholder:text-[var(--color-paper-dim)] focus:border-[var(--color-gold)]"
              />
              <button
                type="submit"
                className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-gold-soft)]"
              >
                <span>Request Your Free Teardown</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="mt-28 border-t border-[var(--color-line)] pt-20 md:mt-36 md:pt-28">
        <Container>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
            Questions
          </p>
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-[1.15] text-balance text-[var(--color-paper)] md:text-4xl">
            Before you send anything over.
          </h2>

          <div className="mt-14 flex flex-col">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group border-t border-[var(--color-line)] py-6 last:border-b"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-medium text-[var(--color-paper)] md:text-xl">
                  {item.q}
                  <span className="shrink-0 text-[var(--color-gold)] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-paper-dim)]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="mt-28 border-t border-[var(--color-line)] pt-16 text-center md:mt-36">
        <Container>
          <h2 className="font-display text-3xl font-medium text-[var(--color-paper)] md:text-4xl">
            Not sure if this applies to your property?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-paper-dim)]">
            Guests hesitate for slightly different reasons at every property. Send your site over
            and I'll tell you, specifically, what I notice — free, no pressure.
          </p>
          <div className="mt-9 flex justify-center">
            <Button href="#teardown">Get Your Free Teardown</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
