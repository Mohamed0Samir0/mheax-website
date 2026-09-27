import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
}

export function Button({ children, href, to, variant = "primary", className, onClick }: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300";
  const styles = {
    primary: "bg-[var(--color-gold)] text-[var(--color-ink)] hover:bg-[var(--color-gold-soft)]",
    secondary:
      "border border-[var(--color-line)] text-[var(--color-paper)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]",
    ghost: "text-[var(--color-paper)] hover:text-[var(--color-gold)]",
  };

  const content = (
    <>
      <span>{children}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </>
  );

  const classes = cn(base, styles[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <button className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
