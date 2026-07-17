import { ArrowRight } from "lucide-react";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  size?: "md" | "sm";
  className?: string;
  onClick?: () => void;
}

const BASE =
  "group inline-flex cursor-pointer items-center gap-3 rounded-[2px] font-sans text-sm tracking-[0.04em] transition-all duration-300 ease-studio";

const VARIANTS: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  solid:
    "bg-ink text-bone hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]",
  outline:
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-bone",
  ghost: "gap-2 px-0 text-ink underline-offset-8 hover:underline",
};

const SIZES: Record<NonNullable<ButtonLinkProps["size"]>, string> = {
  md: "h-12 px-7",
  sm: "h-10 px-5",
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  size = "md",
  className = "",
  onClick,
}: ButtonLinkProps) {
  const sizing = variant === "ghost" ? "h-10" : SIZES[size];
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${BASE} ${VARIANTS[variant]} ${sizing} ${className}`}
    >
      {children}
      <ArrowRight
        size={15}
        strokeWidth={1.5}
        aria-hidden="true"
        className="transition-transform duration-300 ease-studio group-hover:translate-x-1"
      />
    </a>
  );
}
