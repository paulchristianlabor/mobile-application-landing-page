"use client";

import { SiAppstore, SiGoogleplay } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-sm" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Mobile Application</span>
            </div>
            <p className="text-background/70 max-w-sm leading-relaxed">
              The quiet productivity companion for driven professionals. Stay organized, stay ahead, and stay in flow.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Twitter">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Instagram">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-white tracking-wide">Product</h3>
            <ul className="space-y-3">
              <li><button onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })} className="text-background/70 hover:text-white transition-colors text-sm">Features</button></li>
              <li><button onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })} className="text-background/70 hover:text-white transition-colors text-sm">How it Works</button></li>
              <li><button onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })} className="text-background/70 hover:text-white transition-colors text-sm">Pricing</button></li>
              <li><a href="#" className="text-background/70 hover:text-white transition-colors text-sm">Changelog</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-white tracking-wide">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-background/70 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-background/70 hover:text-white transition-colors text-sm">Cookie Policy</a></li>
              <li><a href="mailto:hello@mobileapplication.com" className="text-background/70 hover:text-white transition-colors text-sm">hello@mobileapplication.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Mobile Application Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
             <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg text-sm font-medium">
               <SiAppstore className="w-5 h-5" />
               <span>App Store</span>
             </button>
             <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg text-sm font-medium">
               <SiGoogleplay className="w-4 h-4" />
               <span>Google Play</span>
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
