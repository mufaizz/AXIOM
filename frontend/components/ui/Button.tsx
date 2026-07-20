
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "ghost" | "outline" };

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = "primary", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition",
        variant === "primary" && "bg-accent text-white hover:bg-accent-glow",
        variant === "ghost" && "text-slate-300 hover:bg-white/5",
        variant === "outline" && "border border-white/10 text-slate-200 hover:bg-white/5",
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
