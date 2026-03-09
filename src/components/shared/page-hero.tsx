"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  label?: string;
  breadcrumbs?: Breadcrumb[];
  compact?: boolean;
}

export function PageHero({ title, subtitle, label, breadcrumbs, compact }: PageHeroProps) {
  return (
    <section className={`relative ${compact ? "pt-28 pb-12" : "pt-32 pb-16 md:pt-40 md:pb-20"} bg-earth-800 overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-earth-900 via-earth-800 to-forest-900 opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,168,83,0.1),transparent_50%)]" />

      <div className="container-luxury relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1 text-xs text-white/50">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
              </li>
              {breadcrumbs.map((bc, i) => (
                <li key={bc.href} className="flex items-center gap-1">
                  <ChevronRight className="w-3 h-3" />
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-white/80">{bc.label}</span>
                  ) : (
                    <Link href={bc.href} className="hover:text-gold-400 transition-colors">{bc.label}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {label && (
            <p className="font-accent text-sm tracking-[0.2em] uppercase text-gold-400 mb-3">
              {label}
            </p>
          )}
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white font-medium leading-tight max-w-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-white/60 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
