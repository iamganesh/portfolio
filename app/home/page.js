"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedContent from "../animations/AnimatedContent";
import {
  NotebookText,
  Code2,
  Database,
  BrainCircuit,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  MapPin,
  CalendarRange,
} from "lucide-react";

import Me from "@/public/ganesh.jpeg";

import SkillsExpertise from "../components/Expertise";
import FeaturedProjects from "../components/Project";
import ContactPage from "../components/Contact";
import ApprochPage from "../components/Approch";
import AchievementsSection from "../components/Achievement";

export default function AboutPage() {
  const stats = [
    { value: "10+", label: "Projects Built" },
    { value: "10+", label: "Technologies Used" },
    { value: "12+", label: "Certifications" },
  ];

  const educationTimeline = [
    {
      institution: "Lovely Professional University",
      period: "Aug 2023 - Present",
      program: "Bachelor of Technology - Computer Science and Engineering",
      score: "CGPA: 6.6",
      location: "Phagwara, Punjab",
      note: "Currently pursuing",
    },
    {
      institution: "Sri Chaitanya Junior College",
      period: "2020 - 2023",
      program: "12th Standard",
      score: "Percentage: 92%",
      location: "Vijayawada, Andhra Pradesh",
      note: "Academic foundation in science and mathematics",
    },
    {
      institution: "Golden Bells High School",
      period: "2019 - 2020",
      program: "Matriculation",
      score: "Percentage: 95%",
      location: "Andhra Pradesh",
      note: "Built a strong base in core academics",
    },
  ];

  const tags = [
    "MERN Stack",
    "AI/ML",
    "Backend Systems",
    "Problem Solving",
    "DSA",
    "Web Development",
  ];

  const highlightCards = [
    {
      icon: <BrainCircuit className="w-5 h-5" />,
      title: "AI/ML Focus",
      description:
        "Building practical AI-driven ideas and learning intelligent systems step by step.",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Backend Systems",
      description:
        "Interested in APIs, databases, server-side logic, and scalable application structure.",
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "MERN Development",
      description:
        "Creating modern web applications using JavaScript, frontend tools, and backend integration.",
    },
  ];

  return (
    <div className="min-h-screen max-w-screen pt-24 bg-[#0a101f] text-white overflow-x-hidden">
      <section className="w-full xl:w-3/4 mx-auto px-4 md:px-6 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.05}
            threshold={0.2}
          >
            <div>
              <div className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-2 text-sm text-purple-200 mb-6">
                MERN STACK DEVELOPER &nbsp;|&nbsp; AI/ML ENGINEER
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Kolakanuru <span className="text-purple-400">Sai Ganesh</span>
              </h1>

              <h2 className="text-xl md:text-3xl font-semibold text-gray-200 mb-5">
                MERN Stack Developer <span className="text-purple-400">|</span>{" "}
                AI/ML Engineer
              </h2>

              <p className="text-gray-300 text-base md:text-lg leading-8 max-w-2xl">
                Computer Science student focused on building modern web
                applications, backend systems, and AI/ML-based solutions. I am
                passionate about solving real-world problems through MERN stack
                development, data structures, and practical software projects.
              </p>

              <p className="text-gray-400 text-base md:text-lg leading-8 mt-5 max-w-2xl">
                I enjoy creating clean user experiences, improving technical
                skills continuously, and working on projects that combine
                software engineering with intelligent systems.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/projects">
                  <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-6 py-6">
                    View Projects <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>

                <Link href="/ganeshcv.pdf" target="_blank">
                  <Button
                    variant="outline"
                    className="rounded-full px-6 py-6 border-purple-400/30 bg-transparent text-white hover:bg-purple-400/10"
                  >
                    <NotebookText className="mr-2 w-4 h-4" />
                    Download Resume
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <Link
                  href="https://github.com/iamganesh"
                  target="_blank"
                  className="p-3 rounded-full border border-gray-700 hover:border-purple-400 hover:text-purple-300 transition"
                >
                  <Github className="w-5 h-5" />
                </Link>

                <Link
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="p-3 rounded-full border border-gray-700 hover:border-purple-400 hover:text-purple-300 transition"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>

                <Link
                  href="mailto:ganeshkolakanuru@gmail.com"
                  className="p-3 rounded-full border border-gray-700 hover:border-purple-400 hover:text-purple-300 transition"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.05}
            threshold={0.2}
          >
            <div className="relative">
              <div className="rounded-[32px] border border-purple-400/20 bg-gradient-to-br from-[#13182b] to-[#0f1220] p-6 shadow-[0_0_40px_rgba(168,85,247,0.12)]">
                <div className="flex justify-center">
                  <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-purple-400/20 shadow-[0_0_35px_rgba(168,85,247,0.18)]">
                    <Image
                      src={Me}
                      alt="Kolakanuru Sai Ganesh"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <h3 className="text-3xl font-bold">Kolakanuru Sai Ganesh</h3>
                  <p className="text-purple-300 mt-2 tracking-wide text-sm md:text-base">
                    MERN STACK DEVELOPER | AI/ML ENGINEER
                  </p>
                  <div className="mt-5 inline-flex items-center rounded-full border border-purple-400/20 bg-purple-400/10 px-5 py-2 text-sm text-gray-200">
                    Open to internships and developer roles
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="w-full xl:w-3/4 mx-auto px-4 md:px-6 pb-8">
        <div className="grid lg:grid-cols-[1.25fr_0.95fr] gap-8 items-start">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.02}
            threshold={0.2}
          >
            <div className="rounded-[32px] border border-purple-400/15 bg-gradient-to-br from-[#141b2f] to-[#0c1020] p-8">
              <span className="inline-block text-sm rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-purple-200 mb-5">
                ABOUT
              </span>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Computer Science student focused on{" "}
                <span className="text-purple-400">
                  backend systems, AI/ML engineering,
                </span>{" "}
                and web products.
              </h2>

              <p className="text-gray-300 text-base md:text-lg leading-8 mb-4">
                Currently pursuing B.Tech in Computer Science and Engineering at
                Lovely Professional University. I am interested in MERN stack
                development, backend architecture, data structures, and AI/ML
                applications.
              </p>

              <p className="text-gray-400 text-base md:text-lg leading-8">
                My goal is to build practical software that solves real-world
                problems while continuously improving in full stack development,
                machine learning, and system design fundamentals.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.02}
            threshold={0.2}
          >
            <div className="rounded-[32px] border border-purple-400/15 bg-gradient-to-br from-[#141b2f] to-[#0c1020] p-8">
              <p className="text-sm tracking-[0.25em] text-purple-300 uppercase mb-5">
                Current Focus
              </p>
              <div className="space-y-4">
                <div className="rounded-2xl border border-purple-400/15 bg-[#11172a] p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Code2 className="w-5 h-5 text-purple-300" />
                    <h3 className="text-xl font-semibold">MERN</h3>
                  </div>
                  <p className="text-gray-400">
                    Full stack web apps with responsive frontend and backend
                    integration.
                  </p>
                </div>

                <div className="rounded-2xl border border-purple-400/15 bg-[#11172a] p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <BrainCircuit className="w-5 h-5 text-purple-300" />
                    <h3 className="text-xl font-semibold">AI/ML</h3>
                  </div>
                  <p className="text-gray-400">
                    Learning intelligent systems, data-driven solutions, and
                    practical ML applications.
                  </p>
                </div>

                <div className="rounded-2xl border border-purple-400/15 bg-[#11172a] p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Database className="w-5 h-5 text-purple-300" />
                    <h3 className="text-xl font-semibold">Backend Systems</h3>
                  </div>
                  <p className="text-gray-400">
                    APIs, databases, logic design, and strong server-side
                    development basics.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="w-full xl:w-3/4 mx-auto px-4 md:px-6 py-6">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((item, index) => (
            <AnimatedContent
              key={index}
              distance={120}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.02}
              threshold={0.2}
            >
              <div className="rounded-[28px] border border-purple-400/15 bg-gradient-to-br from-[#141b2f] to-[#0c1020] p-8">
                <h3 className="text-4xl md:text-5xl font-bold text-purple-300">
                  {item.value}
                </h3>
                <p className="text-gray-400 mt-3 text-lg">{item.label}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </section>

      <section className="w-full xl:w-3/4 mx-auto px-4 md:px-6 pb-8">
        <AnimatedContent
          distance={120}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.02}
          threshold={0.2}
        >
          <div className="relative overflow-hidden rounded-[32px] border border-purple-400/15 bg-gradient-to-br from-[#151a31] via-[#11162a] to-[#0b0f1d] p-8 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.12),transparent_28%)]" />

            <div className="relative">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-200">
                    <GraduationCap className="h-4 w-4" />
                    Education
                  </span>
                  <h2 className="mt-5 text-3xl md:text-4xl font-bold leading-tight">
                    Academic journey shaping my{" "}
                    <span className="text-purple-400">engineering mindset</span>
                  </h2>
                </div>

                <p className="max-w-xl text-sm md:text-base leading-7 text-gray-400">
                  A quick look at the institutions and milestones that built my
                  foundation in computer science, discipline, and problem
                  solving.
                </p>
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                {educationTimeline.map((item, index) => (
                  <div
                    key={item.institution}
                    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.06]"
                  >
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-purple-400/10 blur-2xl transition duration-300 group-hover:bg-purple-400/20" />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-400/10 text-purple-200">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-blue-200">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="mt-5 text-xl font-semibold leading-snug">
                        {item.institution}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-gray-300">
                        {item.program}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-3 text-sm">
                        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-emerald-200">
                          {item.score}
                        </span>
                        <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1.5 text-purple-200">
                          {item.note}
                        </span>
                      </div>

                      <div className="mt-5 flex items-center gap-2 text-sm text-gray-400">
                        <MapPin className="h-4 w-4 text-purple-300" />
                        <span>{item.location}</span>
                      </div>

                      <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                        <CalendarRange className="h-4 w-4 text-purple-300" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedContent>
      </section>

      <section className="w-full xl:w-3/4 mx-auto px-4 md:px-6 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {highlightCards.map((card, index) => (
            <AnimatedContent
              key={index}
              distance={120}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.02}
              threshold={0.2}
            >
              <div className="rounded-[28px] border border-purple-400/15 bg-gradient-to-br from-[#141b2f] to-[#0c1020] p-8 h-full">
                <div className="w-12 h-12 rounded-2xl bg-purple-400/10 border border-purple-400/20 flex items-center justify-center text-purple-300 mb-5">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
                <p className="text-gray-400 leading-8">{card.description}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </section>

      <section id="skills">
        <SkillsExpertise />
      </section>

      <section>
        <ApprochPage />
      </section>

      <section>
        <FeaturedProjects />
      </section>

      <section id="certifications">
        <AchievementsSection />
      </section>

      <section className="w-full xl:w-3/4 mx-auto px-4 md:px-6 py-8">
        <AnimatedContent
          distance={120}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.02}
          threshold={0.2}
        >
          <div className="rounded-[32px] border border-purple-400/15 bg-gradient-to-br from-[#1a1430] to-[#0f1020] p-8 md:p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to build impactful{" "}
              <span className="text-purple-400">software solutions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-8 mb-8">
              I am actively looking for internships, collaborative projects, and
              opportunities in MERN stack development and AI/ML engineering.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full px-6 py-6">
                  Contact Me
                </Button>
              </Link>

              <Link href="/ganeshcv.pdf" target="_blank">
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-6 border-purple-400/30 bg-transparent text-white hover:bg-purple-400/10"
                >
                  Download Resume
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedContent>
      </section>

      <section>
        <ContactPage />
      </section>
    </div>
  );
}
