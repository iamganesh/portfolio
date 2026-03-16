"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  ShieldCheck,
  Leaf,
  UtensilsCrossed,
  Layers,
  Globe,
  Database,
  BrainCircuit,
  ArrowUpRight,
  Github,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedContent from "../animations/AnimatedContent";
import SpotlightCard from "../animations/SpotlightCard";
import { ProjectModal } from "./ProjectModal";

const projects = [
  {
    index: 1,
    title: "Mini Instagram",
    subtitle: "Social Media Web Application",
    description:
      "A mini Instagram-style social media project built to demonstrate post interaction, user-focused interface design, and practical full stack application structure.",
    longDescription:
      "Mini Instagram is a social media inspired web application created to explore modern application structure, user interaction, and full stack development. It focuses on building an engaging interface, managing content flow, and understanding how real-world social platforms are organized from both frontend and backend perspectives.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "CSS",
    ],
    github: "https://github.com/iamganesh/mini-instagram",
    link: "https://github.com/iamganesh/mini-instagram",
    image: "",
    views: 420,
    lastUpdated: "2026-03-16",
    type: "mern",
    icon: <Camera className="w-5 h-5" />,
    stats: [
      { value: "MERN", label: "STACK" },
      { value: "Social", label: "APP" },
      { value: "Responsive", label: "UI" },
    ],
    impact:
      "Demonstrates practical MERN project flow, social media UI ideas, and real application structuring.",
  },
  {
    index: 2,
    title: "Secure File Management System",
    subtitle: "Secure File Upload and Access Handling",
    description:
      "A file management system focused on secure handling of files, access control logic, and reliable backend-driven workflow.",
    longDescription:
      "Secure File Management System is designed to explore file-based operations with a focus on secure storage, controlled access, and structured backend handling. The project reflects your interest in system reliability, backend logic, and practical secure application workflows.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
    github: "https://github.com/Gurfiyaz/Secure-File-Management-System",
    link: "https://github.com/Gurfiyaz/Secure-File-Management-System",
    image: "",
    views: 360,
    lastUpdated: "2026-03-16",
    type: "security",
    icon: <ShieldCheck className="w-5 h-5" />,
    stats: [
      { value: "Secure", label: "SYSTEM" },
      { value: "Files", label: "MODULE" },
      { value: "Backend", label: "FOCUS" },
    ],
    impact:
      "Shows secure system thinking, file handling workflow, and backend development fundamentals.",
  },
  {
    index: 3,
    title: "Crop Yield Estimation",
    subtitle: "ICT-based Agriculture Prediction Project",
    description:
      "An agriculture-focused project that estimates crop yield using ICT tools and technology-assisted analysis.",
    longDescription:
      "Crop Yield Estimation is a domain-focused project that connects software with agriculture by using ICT tools for crop-related analysis and yield estimation. It reflects your AI/ML interest, data-oriented thinking, and willingness to build technology solutions for real-world use cases.",
    tags: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "ICT Tools",
      "Prediction",
      "AgriTech",
    ],
    github:
      "https://github.com/iamganesh/Crop-yield-estimation-using-by-ICT-tools",
    link: "https://github.com/iamganesh/Crop-yield-estimation-using-by-ICT-tools",
    image: "",
    views: 395,
    lastUpdated: "2026-03-16",
    type: "aiml",
    icon: <Leaf className="w-5 h-5" />,
    stats: [
      { value: "AI/ML", label: "DOMAIN" },
      { value: "Agri", label: "USE CASE" },
      { value: "Prediction", label: "MODEL" },
    ],
    impact:
      "Represents AI/ML exploration through a practical agriculture-based prediction problem.",
  },
  {
    index: 4,
    title: "Restaurant Table Booking",
    subtitle: "MERN Login and Reservation Workflow",
    description:
      "A MERN stack booking system where users can log in and reserve restaurant tables through a practical reservation workflow.",
    longDescription:
      "Restaurant Table Booking is a MERN stack project created to practice full stack application flow with login, reservation handling, and booking logic. It highlights your learning in React, Node.js, Express.js, MongoDB, and real-world workflow design.",
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Login System",
      "Booking Flow",
    ],
    github: "http://localhost:5000/login",
    link: "http://localhost:5000/login",
    image: "",
    views: 470,
    lastUpdated: "2026-03-16",
    type: "mern",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    stats: [
      { value: "MERN", label: "STACK" },
      { value: "Login", label: "AUTH" },
      { value: "Booking", label: "FLOW" },
    ],
    impact:
      "Shows full stack learning through login handling, booking system design, and practical application flow.",
  },
];

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ["All", "MERN", "AI/ML", "Security"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => {
        if (activeFilter === "MERN") return project.type === "mern";
        if (activeFilter === "AI/ML") return project.type === "aiml";
        if (activeFilter === "Security") return project.type === "security";
        return true;
      });

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-[#0a101f] relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-400/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-orange-400/5 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.15, 0.3] }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          className="flex justify-center mb-8"
          scale={1.05}
          threshold={0.2}
        >
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-200 mb-5">
              PROJECTS
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-purple-400">Projects</span>
            </h2>

            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12 leading-8">
              A collection of my practical work across MERN stack development,
              secure backend systems, and AI/ML-based project ideas.
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
          className="flex justify-center mb-10"
          scale={1.05}
          threshold={0.2}
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter, index) => {
              let FilterIcon = Layers;
              if (filter === "MERN") FilterIcon = Database;
              else if (filter === "AI/ML") FilterIcon = BrainCircuit;
              else if (filter === "Security") FilterIcon = ShieldCheck;
              else if (filter === "All") FilterIcon = Globe;

              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm cursor-pointer font-medium transition-all duration-300 flex items-center gap-2 ${activeFilter === filter
                    ? "bg-purple-500 text-white shadow-[0_0_16px_rgba(168,85,247,0.35)]"
                    : "bg-[#131c35] text-gray-300 hover:bg-purple-400/20"
                    }`}
                >
                  <FilterIcon className="w-4 h-4" />
                  {filter}
                </motion.button>
              );
            })}
          </div>
        </AnimatedContent>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.03}
              key={index}
              threshold={0.2}
            >
              <HomeProjectCard
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            </AnimatedContent>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.p
            className="text-center text-gray-300 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            No projects found with the selected filter.
          </motion.p>
        )}

        <div className="text-center mt-10">
          <Link href="/projects">
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
              <Button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-10 py-6 rounded-2xl transition-transform duration-300 hover:scale-105">
                <Layers className="mr-2 w-4 h-4" />
                See All Projects
              </Button>
            </AnimatedContent>
          </Link>
        </div>
      </div>

      <ProjectModal
        project={selectedProject || projects[0]}
        isOpen={!!selectedProject}
        onClose={closeModal}
      />
    </section>
  );
}

function HomeProjectCard({ project, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SpotlightCard
      className="group h-full w-full overflow-hidden rounded-[30px] border border-purple-400/20 bg-[#0b1020]/90 backdrop-blur-sm transition-all duration-500 cursor-pointer"
      spotlightColor="rgba(168, 85, 247, 0.20)"
    >
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: -6 }}
        className="flex h-full flex-col p-7 relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={onClick}
      >
        <motion.div
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-0 right-0 w-28 h-28 rounded-full bg-purple-400/10 blur-3xl"
        />

        <div className="flex items-start justify-between mb-5">
          <div>
            <p className="text-xs tracking-[0.3em] text-purple-300 uppercase mb-2">
              {project.subtitle}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl border border-purple-400/20 bg-purple-400/10 flex items-center justify-center text-purple-300">
                {project.icon}
              </div>
              <span className="text-sm text-gray-400">
                0{project.index}
              </span>
            </div>
          </div>

          <motion.div
            whileHover={{ rotate: 45, scale: 1.05 }}
            className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-purple-300"
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </div>

        <h3 className="text-3xl font-bold tracking-tight text-white mb-4">
          {project.title}
        </h3>

        <p className="text-sm leading-8 text-gray-300 mb-6">
          {project.description}
        </p>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {project.stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <p className="text-lg font-bold text-white">{stat.value}</p>
              <p className="text-[11px] tracking-[0.25em] text-gray-400 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 mb-6">
          <p className="text-xs tracking-[0.25em] text-gray-400 uppercase mb-3">
            Outcome / Impact
          </p>
          <p className="text-gray-300 leading-8 text-sm">{project.impact}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 4).map((tag, tagIndex) => (
            <motion.div
              key={tagIndex}
              whileHover={{ y: -2, scale: 1.03 }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(168,85,247,0)",
                  "0 0 12px rgba(168,85,247,0.14)",
                  "0 0 0px rgba(168,85,247,0)",
                ],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: tagIndex * 0.15,
              }}
              className="rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-xs text-purple-200"
            >
              {tag}
            </motion.div>
          ))}
        </div>

        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <Link
            href={project.github}
            className="w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white font-medium hover:bg-white/10 transition"
            >
              <Github className="w-4 h-4" />
              View Project
            </motion.button>
          </Link>

          <Link
            href={project.link}
            className="w-full"
            target="_blank"
            rel="noopener noreferrer"
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
              className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-3 text-white font-semibold hover:from-purple-600 hover:to-purple-700 transition"
            >
              <ExternalLink className="w-4 h-4" />
              {project.index === 4 ? "Open Login Page" : "Live / Repo"}
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </SpotlightCard>
  );
}