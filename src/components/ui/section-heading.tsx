"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "200px" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <p
          className={cn(
            "font-accent text-sm tracking-[0.2em] uppercase mb-4",
            light ? "text-gold-300" : "text-gold-600"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-3xl md:text-4xl lg:text-5xl font-medium leading-tight",
          light ? "text-white" : "text-earth-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base md:text-lg leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-white/70" : "text-earth-600"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-px w-16",
          align === "center" && "mx-auto",
          light
            ? "bg-gradient-to-r from-transparent via-gold-400 to-transparent w-24"
            : "bg-gradient-to-r from-gold-400 to-transparent"
        )}
      />
    </motion.div>
  );
}
