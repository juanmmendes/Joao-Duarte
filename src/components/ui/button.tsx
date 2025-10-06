import type { ButtonHTMLAttributes, Ref } from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "default" | "secondary" | "outline" | "ghost";
type ButtonSize = "default" | "lg" | "icon";

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variants: Record<ButtonVariant, string> = {
  default:
    "bg-primary text-primary-foreground shadow-sm transition hover:bg-primary/90",
  secondary:
    "bg-secondary text-secondary-foreground shadow-sm transition hover:bg-secondary/80",
  outline:
    "border border-border/80 bg-card/50 text-foreground transition hover:border-primary/30 hover:bg-primary/10",
  ghost:
    "bg-transparent text-muted-foreground transition hover:text-foreground hover:bg-muted/60",
};

const sizes: Record<ButtonSize, string> = {
  default: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm",
  icon: "h-11 w-11",
};

export const Button = forwardRef(function Button(
  { className, variant = "default", size = "default", ...props }: ButtonProps,
  ref: Ref<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
});
