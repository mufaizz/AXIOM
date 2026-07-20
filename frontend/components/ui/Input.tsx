
import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-md border border-white/10 bg-ink px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-accent",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
