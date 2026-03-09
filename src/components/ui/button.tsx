"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-body text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer tracking-wide",
  {
    variants: {
      variant: {
        primary:
          "bg-gold-500 text-white hover:bg-gold-600 shadow-sm hover:shadow-md",
        secondary:
          "bg-earth-800 text-ivory-50 hover:bg-earth-900 shadow-sm",
        outline:
          "border-2 border-gold-500 text-gold-700 hover:bg-gold-50 hover:border-gold-600",
        "outline-light":
          "border-2 border-white/80 text-white hover:bg-white/10 hover:border-white",
        ghost:
          "text-earth-700 hover:bg-earth-100 hover:text-earth-900",
        "ghost-light":
          "text-white/90 hover:bg-white/10 hover:text-white",
        link:
          "text-gold-600 underline-offset-4 hover:underline hover:text-gold-700",
        white:
          "bg-white text-earth-800 hover:bg-ivory-100 shadow-sm hover:shadow-md",
      },
      size: {
        sm: "h-9 px-4 text-xs rounded-md",
        md: "h-11 px-6 text-sm rounded-lg",
        lg: "h-13 px-8 text-base rounded-lg",
        xl: "h-14 px-10 text-base rounded-lg",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
