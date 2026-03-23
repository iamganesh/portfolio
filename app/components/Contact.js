"use client";

import Link from "next/link";
import AnimatedContent from "../animations/AnimatedContent";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const contactCards = [
  {
    title: "Email",
    value: "kolakanuruganesh@gmail.com",
    href: "mailto:kolakanuruganesh@gmail.com",
    icon: Mail,
  },
  {
    title: "GitHub",
    value: "iamganesh",
    href: "https://github.com/iamganesh",
    icon: Github,
  },
  {
    title: "LinkedIn",
    value: "ganesh-kolakanuru",
    href: "https://www.linkedin.com/in/ganesh-kolakanuru",
    icon: Linkedin,
  },
  {
    title: "Phone",
    value: "+91 6305090510",
    href: "tel:+916305090510",
    icon: Phone,
  },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-[#0a101f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.16),_transparent_38%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.12),_transparent_34%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <AnimatedContent
          distance={120}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 24 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.02}
          threshold={0.2}
        >
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">
              Get In Touch
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Let&apos;s Connect
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of something amazing.
            </p>
          </div>
        </AnimatedContent>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map(({ title, value, href, icon: Icon }, index) => (
            <AnimatedContent
              key={title}
              distance={120}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 22 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.02}
              threshold={0.15}
            >
              <Link
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative flex h-full min-h-[250px] flex-col items-center justify-center overflow-hidden rounded-[28px] border border-cyan-400/10 bg-[#0d1118]/95 px-8 py-10 text-center shadow-[0_0_0_1px_rgba(34,211,238,0.04)] transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-[0_24px_80px_rgba(34,211,238,0.12)]"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_40%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.12),_transparent_36%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative mb-7 rounded-[22px] border border-white/5 bg-white/[0.05] p-5 shadow-inner shadow-cyan-400/5">
                  <Icon className="h-8 w-8 text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:text-white" />
                </div>

                <h3 className="relative text-2xl font-bold text-white">
                  {title}
                </h3>
                <p className="relative mt-4 break-words text-base leading-7 text-slate-300 transition duration-300 group-hover:text-slate-100">
                  {value}
                </p>
              </Link>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
