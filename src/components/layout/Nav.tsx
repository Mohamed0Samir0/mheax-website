import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../../utils/cn";

const links = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const goToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-[var(--color-ink)]/90 backdrop-blur-md border-b border-[var(--color-line)]" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="flex items-center" aria-label="M.Heax home">
          <img src="/images/brand/logo-paper.png" alt="M.Heax" className="h-6 w-auto sm:h-7" />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-[var(--color-paper-dim)] transition-colors hover:text-[var(--color-gold)]"
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => goToSection("contact")}
            className="text-sm font-medium text-[var(--color-paper-dim)] transition-colors hover:text-[var(--color-gold)]"
          >
            Contact
          </button>
        </nav>

        <button
          onClick={() => goToSection("contact")}
          className="hidden rounded-full border border-[var(--color-gold)] px-5 py-2.5 text-sm font-medium text-[var(--color-gold)] transition-colors hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] md:inline-flex"
        >
          Start a Project
        </button>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn("h-px w-6 bg-[var(--color-paper)] transition-transform", open && "translate-y-[3.5px] rotate-45")} />
          <span className={cn("h-px w-6 bg-[var(--color-paper)] transition-transform", open && "-translate-y-[3.5px] -rotate-45")} />
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-ink)] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-base font-medium text-[var(--color-paper-dim)] hover:text-[var(--color-gold)]"
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => goToSection("contact")}
              className="text-left text-base font-medium text-[var(--color-paper-dim)] hover:text-[var(--color-gold)]"
            >
              Contact
            </button>
            <button
              onClick={() => goToSection("contact")}
              className="mt-2 inline-flex w-fit rounded-full border border-[var(--color-gold)] px-5 py-2.5 text-sm font-medium text-[var(--color-gold)]"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
