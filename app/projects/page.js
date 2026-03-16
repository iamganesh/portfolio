"use client";

import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  FolderKanban,
  Database,
  ShieldCheck,
  Leaf,
  UtensilsCrossed,
  Camera,
  Server,
} from "lucide-react";
import SpotlightCard from "../animations/SpotlightCard";
import AnimatedContent from "@/app/animations/AnimatedContent";
import Link from "next/link";

const projects = [
  {
    id: "01",
    category: "MERN / FULL STACK",
    title: "Mini Instagram",
    subtitle: "Social Media Web Application",
    description:
      "A mini Instagram-style platform where users can interact with posts, build profile-based experiences, and explore social media features using modern web technologies.",
    impact:
      "Built a complete project structure that demonstrates frontend interactions, responsive UI, and practical application design skills.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "CSS",
    ],
    stats: [
      { value: "MERN", label: "STACK" },
      { value: "Social", label: "APP TYPE" },
      { value: "Responsive", label: "UI" },
    ],
    github: "https://github.com/iamganesh/mini-instagram",
    live: "https://github.com/iamganesh/mini-instagram",
    icon: <Camera className="w-5 h-5" />,
    color: "from-pink-500/20 to-purple-500/10",
    border: "border-pink-400/30",
    glow: "rgba(236,72,153,0.18)",
  },
  {
    id: "02",
    category: "CYBER / SECURITY",
    title: "Secure File Management System",
    subtitle: "File Upload, Access & Secure Handling",
    description:
      "A secure file management system focused on protected file operations, access handling, and improved reliability in file-based workflows.",
    impact:
      "Demonstrates understanding of secure system design, file handling logic, and backend-oriented project development.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "XAMPP",
    ],
    stats: [
      { value: "Secure", label: "SYSTEM" },
      { value: "Files", label: "MODULE" },
      { value: "Backend", label: "FOCUS" },
    ],
    github: "https://github.com/Gurfiyaz/Secure-File-Management-System",
    live: "https://github.com/Gurfiyaz/Secure-File-Management-System",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-400/30",
    glow: "rgba(34,211,238,0.18)",
  },
  {
    id: "03",
    category: "AI / ML PROJECT",
    title: "Crop Yield Estimation",
    subtitle: "Agriculture Prediction using ICT Tools",
    description:
      "A project focused on estimating crop yield with technology-assisted analysis, helping connect software solutions with agriculture and practical prediction-based systems.",
    impact:
      "Shows your AI/ML interest through a domain-driven problem statement and technology-assisted agricultural analysis.",
    tech: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "ICT Tools",
      "Prediction",
      "Research",
    ],
    stats: [
      { value: "AI/ML", label: "DOMAIN" },
      { value: "AgriTech", label: "USE CASE" },
      { value: "Prediction", label: "MODEL" },
    ],
    github: "https://github.com/iamganesh/Crop-yield-estimation-using-by-ICT-tools",
    live: "https://github.com/iamganesh/Crop-yield-estimation-using-by-ICT-tools",
    icon: <Leaf className="w-5 h-5" />,
    color: "from-emerald-500/20 to-lime-500/10",
    border: "border-emerald-400/30",
    glow: "rgba(16,185,129,0.18)",
  },
  {
    id: "04",
    category: "MERN / BOOKING SYSTEM",
    title: "Restaurant Table Booking",
    subtitle: "Login-based MERN Reservation Project",
    description:
      "A restaurant booking system where users can log in and reserve tables through a clean workflow, showing your MERN stack learning in a practical booking use case.",
    impact:
      "Highlights full stack development basics using login flow, booking logic, and real-world reservation system structure.",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Login System",
      "Booking Flow",
    ],
    stats: [
      { value: "MERN", label: "STACK" },
      { value: "Login", label: "AUTH" },
      { value: "Booking", label: "FLOW" },
    ],
    github: "http://localhost:5000/login",
    live: "http://localhost:5000/login",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    color: "from-orange-500/20 to-amber-500/10",
    border: "border-orange-400/30",
    glow: "rgba(249,115,22,0.18)",
  },
];

export default function ProjectsPage() {
  return (
    <div
      id="projects"
      className="min-h-screen bg-[#0a101f] text-white px-4 md:px-8 py-20"
    >
      <div className="max-w-7xl mx-auto pt-8">
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
          <div className="mb-16">
            <div className="inline-flex items-center rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-200 mb-5">
              PROJECTS
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-5xl">
              Selected projects across{" "}
              <span className="text-purple-400">MERN development</span>, secure
              systems, and <span className="text-purple-400">AI/ML use cases</span>.
            </h1>

            <p className="text-gray-400 text-lg leading-8 max-w-3xl mt-6">
              These projects reflect my current development path as a MERN stack
              developer and AI/ML learner, combining full stack implementation,
              secure logic, and practical problem-solving.
            </p>
          </div>
        </AnimatedContent>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedContent
              key={project.id}
              distance={120}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.02}
              threshold={0.2}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <SpotlightCard
                  className={`h-full rounded-[32px] border ${project.border} bg-gradient-to-br from-[#0f1426] to-[#0b1020] overflow-hidden relative`}
                  spotlightColor={project.glow}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-70 pointer-events-none`}
                  />
                  <motion.div
                    animate={{
                      opacity: [0.18, 0.35, 0.18],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-purple-400/10 blur-3xl"
                  />

                  <div className="relative z-10 p-7 md:p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div>
                        <p className="text-sm tracking-[0.28em] text-gray-400 uppercase mb-2">
                          {project.category}
                        </p>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-purple-300">
                            {project.icon}
                          </div>
                          <span className="text-sm text-purple-300 font-medium">
                            {project.id}
                          </span>
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ rotate: 45, scale: 1.08 }}
                        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-purple-300"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </motion.div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
                      {project.title}
                    </h2>

                    <p className="text-lg text-purple-300 mb-5">
                      {project.subtitle}
                    </p>

                    <p className="text-gray-300 leading-8 mb-6">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {project.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="rounded-2xl border border-white/10 bg-white/5 p-4"
                        >
                          <p className="text-xl font-bold text-white">
                            {stat.value}
                          </p>
                          <p className="text-xs tracking-[0.25em] text-gray-400 mt-1">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 mb-6">
                      <p className="text-sm tracking-[0.25em] text-gray-400 uppercase mb-3">
                        Outcome / Impact
                      </p>
                      <p className="text-gray-300 leading-8">{project.impact}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-7">
                      {project.tech.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          whileHover={{ y: -2, scale: 1.03 }}
                          animate={{
                            boxShadow: [
                              "0 0 0px rgba(168,85,247,0.0)",
                              "0 0 12px rgba(168,85,247,0.16)",
                              "0 0 0px rgba(168,85,247,0.0)",
                            ],
                          }}
                          transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            delay: tagIndex * 0.12,
                          }}
                          className="rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-200"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-col sm:flex-row gap-3">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 px-5 py-3.5 flex items-center justify-center gap-2 text-white font-medium transition"
                        >
                          <Github className="w-4 h-4" />
                          View Project
                        </motion.button>
                      </Link>

                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          animate={{
                            boxShadow: [
                              "0 0 0px rgba(168,85,247,0)",
                              "0 0 18px rgba(168,85,247,0.25)",
                              "0 0 0px rgba(168,85,247,0)",
                            ],
                          }}
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="w-full rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 px-5 py-3.5 flex items-center justify-center gap-2 text-white font-semibold transition"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {project.id === "04" ? "Open Login Page" : "Live / Repo"}
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </div>
  );
}