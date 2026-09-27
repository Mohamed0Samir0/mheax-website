import { Link } from "react-router-dom";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-14">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <img src="/images/brand/logo-paper.png" alt="M.Heax" className="h-7 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-paper-dim)]">
              Conversion-focused websites, copy, and creative strategy.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-14 gap-y-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-paper-dim)]">Navigate</span>
              <Link to="/work" className="text-sm text-[var(--color-paper)] hover:text-[var(--color-gold)]">Work</Link>
              <Link to="/services" className="text-sm text-[var(--color-paper)] hover:text-[var(--color-gold)]">Services</Link>
              <Link to="/about" className="text-sm text-[var(--color-paper)] hover:text-[var(--color-gold)]">About</Link>
              <Link to="/#contact" className="text-sm text-[var(--color-paper)] hover:text-[var(--color-gold)]">Contact</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-paper-dim)]">Connect</span>
              <a href="mailto:Samir@mheax.com" className="text-sm text-[var(--color-paper)] hover:text-[var(--color-gold)]">
                Samir@mheax.com
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-samir-52bb5928b/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[var(--color-paper)] hover:text-[var(--color-gold)]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-paper-dim)] md:flex-row md:items-center">
          <p>© M.Heax</p>
          <p>Copy first. Creative second. Conversion always.</p>
        </div>
      </Container>
    </footer>
  );
}
