"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { globalSettings } from "@/data/global";

const navigation = [
  { name: "Stay", href: "/stay", children: [
    { name: "Rooms & Suites", href: "/stay/rooms" },
    { name: "Packages & Offers", href: "/stay/packages" },
  ]},
  { name: "Weddings & Events", href: "/weddings-events", children: [
    { name: "Weddings", href: "/weddings-events/weddings" },
    { name: "Social Celebrations", href: "/weddings-events/social-celebrations" },
    { name: "Corporate Events", href: "/weddings-events/corporate-events" },
    { name: "Venues", href: "/weddings-events/venues" },
  ]},
  { name: "Party Planner", href: "/party-planner" },
  { name: "Dining", href: "/dining" },
  { name: "Experiences", href: "/experiences" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(26,24,20,0.04)] py-3"
            : "bg-gradient-to-b from-black/40 to-transparent py-5"
        )}
      >
        <div className="container-luxury flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-3">
            <Image
              src="/images/logo/logo.png"
              alt="Giovanni Village Resort"
              width={180}
              height={50}
              className={cn(
                "h-8 md:h-10 w-auto transition-all duration-300",
                isScrolled ? "" : "brightness-110"
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200 rounded-md",
                    isScrolled
                      ? "text-earth-700 hover:text-earth-900 hover:bg-earth-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-white rounded-lg shadow-[0_8px_40px_rgba(26,24,20,0.08)] border border-earth-100 py-2 min-w-[200px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-earth-700 hover:text-earth-900 hover:bg-gold-50 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <a
              href={`tel:${globalSettings.contact.phone}`}
              className={cn(
                "flex items-center gap-1.5 text-xs font-medium tracking-wide transition-colors",
                isScrolled ? "text-earth-600 hover:text-earth-800" : "text-white/80 hover:text-white"
              )}
            >
              <Phone className="w-3.5 h-3.5" />
              {globalSettings.contact.phone}
            </a>
            <Link href="/book">
              <Button variant={isScrolled ? "primary" : "outline-light"} size="sm">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "xl:hidden relative z-10 p-2 rounded-md transition-colors",
              isScrolled ? "text-earth-800" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white"
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
              <nav className="flex flex-col gap-1" role="navigation" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 text-lg font-heading text-earth-800 hover:text-gold-600 transition-colors border-b border-earth-100"
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="pl-4 pb-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-sm text-earth-600 hover:text-gold-600 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-auto pt-6 flex flex-col gap-4">
                <a
                  href={`tel:${globalSettings.contact.phone}`}
                  className="flex items-center gap-2 text-sm text-earth-600"
                >
                  <Phone className="w-4 h-4" />
                  {globalSettings.contact.phone}
                </a>
                <Link href="/book" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" size="lg" className="w-full">
                    Book Your Stay
                  </Button>
                </Link>
                <Link href="/weddings-events" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" size="lg" className="w-full">
                    Plan an Event
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
