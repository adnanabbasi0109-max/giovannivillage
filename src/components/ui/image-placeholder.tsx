"use client";

import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  alt: string;
  className?: string;
  aspect?: "video" | "square" | "portrait" | "wide" | "hero";
  label?: string;
}

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
  hero: "aspect-[16/7]",
};

export function ImagePlaceholder({
  alt,
  className,
  aspect = "video",
  label,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "placeholder-image relative overflow-hidden rounded-lg",
        aspectClasses[aspect],
        className
      )}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-earth-200 via-earth-100 to-ivory-300" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
        <svg
          className="w-10 h-10 text-earth-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
          />
        </svg>
        <span className="text-xs text-earth-500 tracking-wider uppercase text-center">
          {label || alt}
        </span>
      </div>
    </div>
  );
}
