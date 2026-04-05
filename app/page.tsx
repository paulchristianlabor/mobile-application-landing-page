"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import {
  CheckCircle2,
  Cloud,
  Layout,
  WifiOff,
  BarChart3,
  Users,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col font-sans overflow-x-hidden bg-background selection:bg-primary/20">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-secondary text-primary font-medium text-sm mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Mobile Application 2.0 is now live
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                  Stay Organized.<br />
                  <span className="text-primary">Stay Ahead.</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
                  The quiet productivity companion for driven professionals.
                  Manage tasks, track progress, and stay in flow wherever you
                  are.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="rounded-full h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all"
                  >
                    Download Now
                  </Button>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full h-14 w-14 border-border hover:bg-secondary/50 transition-colors"
                    >
                      <SiAppstore className="w-6 h-6" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full h-14 w-14 border-border hover:bg-secondary/50 transition-colors"
                    >
                      <SiGoogleplay className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground font-medium">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center overflow-hidden"
                      >
                        <img
                          src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=e0e7ff`}
                          alt="user avatar"
                          className="w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                  <p>Trusted by 10,000+ professionals</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative lg:ml-auto w-full max-w-100 mx-auto lg:max-w-none"
              >
                <img
                  src="/images/mockup-1.png"
                  alt="Mobile Application App Interface"
                  className="relative z-10 w-full h-auto drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Logo Cloud */}
        <section className="py-12 border-y border-border/50 bg-white/50">
          <div className="container mx-auto px-4 md:px-6">
            <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
              Used by teams at
            </p>
            <div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="text-xl font-bold tracking-tighter">Acme Corp</div>
              <div className="text-xl font-serif italic">Nova</div>
              <div className="text-xl font-mono">/vertex/</div>
              <div className="text-xl font-bold">LUMINA</div>
              <div className="text-xl font-semibold tracking-widest">ECLIPSE</div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24 md:py-32 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Designed for focus.
                <br />
                Built for speed.
              </h2>
              <p className="text-lg text-muted-foreground">
                Every detail in Mobile Application is crafted to remove friction
                between your thought and your action. No unnecessary features,
                just pure productivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              <FeatureCard
                icon={<CheckCircle2 />}
                title="Smart Task Management"
                description="Natural language processing automatically extracts dates, times, and priorities from your input."
              />
              <FeatureCard
                icon={<Cloud />}
                title="Real-time Sync"
                description="Changes propagate instantly across all your devices. Start on your phone, finish on your desktop."
              />
              <FeatureCard
                icon={<Layout />}
                title="Minimal Interface"
                description="A distraction-free UI that gets out of your way. We believe less chrome means more focus."
              />
              <FeatureCard
                icon={<WifiOff />}
                title="Offline Mode"
                description="A spotty connection shouldn't stop your workflow. Full functionality is available offline."
              />
              <FeatureCard
                icon={<BarChart3 />}
                title="Progress Tracking"
                description="Visualize your productivity trends over time with elegant, easy-to-read charts."
              />
              <FeatureCard
                icon={<Users />}
                title="Collaboration"
                description="Share lists and assign tasks to teammates with simple, permission-based sharing."
              />
            </div>
          </div>
        </section>

        {/* Lifestyle / Emotional Section */}
        <section className="py-24 bg-foreground text-background overflow-hidden relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src="/images/lifestyle.png"
                  alt="Person using Mobile Application"
                  className="rounded-3xl shadow-2xl object-cover w-full h-full aspect-4/3"
                />
              </div>
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Your digital desk, perfectly organized.
                </h2>
                <p className="text-lg text-background/80 leading-relaxed">
                  We built Mobile Application because we were tired of tools that
                  felt like a chore to use. A productivity app shouldn&apos;t
                  demand your attention—it should protect it.
                </p>
                <ul className="space-y-4">
                  {[
                    "End the day with inbox zero",
                    "Capture ideas at the speed of thought",
                    "Protect your deep work time",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium text-background/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-full mt-4 group"
                >
                  See the workflow
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section
          id="how-it-works"
          className="py-24 md:py-32 bg-secondary/30"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                From chaos to clarity in minutes.
              </h2>
              <p className="text-lg text-muted-foreground">
                Getting started is completely frictionless. You don&apos;t need
                a tutorial to use Mobile Application.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <StepCard
                number="01"
                title="Download"
                description="Get the app on iOS, Android, or use our web application."
              />
              <StepCard
                number="02"
                title="Set up"
                description="Create your workspace and define your key project areas."
              />
              <StepCard
                number="03"
                title="Add tasks"
                description="Brain-dump everything on your mind using natural language."
              />
              <StepCard
                number="04"
                title="Stay in flow"
                description="Focus on one thing at a time while we handle the organization."
              />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Simple, transparent pricing.
              </h2>
              <p className="text-lg text-muted-foreground">
                No hidden fees, no complex tiers. Choose the plan that fits your
                needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <PricingCard
                name="Basic"
                price="Free"
                description="Perfect for individuals looking to organize their personal life."
                features={[
                  "Unlimited tasks",
                  "Up to 3 projects",
                  "Cross-device sync",
                  "Basic productivity stats",
                ]}
                cta="Get Started Free"
              />
              <PricingCard
                name="Pro"
                price="$8"
                period="/mo"
                description="For driven professionals who need serious power."
                features={[
                  "Everything in Basic",
                  "Unlimited projects",
                  "Collaboration (up to 5 users)",
                  "Advanced analytics",
                  "Priority support",
                ]}
                cta="Start 14-Day Trial"
                highlighted
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          id="download"
          className="py-24 md:py-32 relative overflow-hidden bg-primary text-primary-foreground"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Ready to do your best work?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-10">
                Join thousands of professionals who have already upgraded their
                workflow.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-full h-14 px-8 text-base shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <SiAppstore className="w-5 h-5" />
                  Download for iOS
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-full h-14 px-8 text-base shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <SiGoogleplay className="w-4 h-4" />
                  Download for Android
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-start group">
      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative p-6 bg-background rounded-2xl shadow-sm border border-border/50">
      <div className="text-4xl font-black text-primary/10 mb-4">{number}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  highlighted = false,
}: {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl p-8 md:p-10 flex flex-col ${
        highlighted
          ? "bg-foreground text-background shadow-2xl ring-2 ring-primary ring-offset-2 ring-offset-background"
          : "bg-background border border-border shadow-lg"
      }`}
    >
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p
        className={`text-sm mb-6 ${
          highlighted ? "text-background/70" : "text-muted-foreground"
        }`}
      >
        {description}
      </p>
      <div className="mb-8 flex items-baseline gap-1">
        <span className="text-5xl font-black tracking-tight">{price}</span>
        {period && (
          <span
            className={highlighted ? "text-background/70" : "text-muted-foreground"}
          >
            {period}
          </span>
        )}
      </div>
      <ul className="space-y-4 mb-10 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span className="font-medium text-sm">{f}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={highlighted ? "default" : "outline"}
        size="lg"
        className={`w-full rounded-full ${
          highlighted ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""
        }`}
      >
        {cta}
      </Button>
    </div>
  );
}
