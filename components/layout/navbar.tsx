"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm" />
          </div>
          <span className="font-bold text-xl tracking-tight">Mobile Application</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("features")} className="cursor-pointer text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Features</button>
          <button onClick={() => scrollTo("how-it-works")} className="cursor-pointer text-sm font-medium text-foreground/80 hover:text-primary transition-colors">How it Works</button>
          <button onClick={() => scrollTo("pricing")} className="cursor-pointer text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Pricing</button>
          <Button onClick={() => scrollTo("download")} className="cursor-pointer rounded-full px-6">Get Started</Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg py-4 px-4 flex flex-col gap-4">
          <button onClick={() => scrollTo("features")} className="cursor-pointer text-left text-lg font-medium py-2">Features</button>
          <button onClick={() => scrollTo("how-it-works")} className="cursor-pointer text-left text-lg font-medium py-2">How it Works</button>
          <button onClick={() => scrollTo("pricing")} className="cursor-pointer text-left text-lg font-medium py-2">Pricing</button>
          <Button onClick={() => scrollTo("download")} className="w-full mt-2">Get Started</Button>
        </div>
      )}
    </header>
  );
}
