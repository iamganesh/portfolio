"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Monitor,
  Server,
  Database,
  BrainCircuit,
  Cpu,
  Wrench,
} from "lucide-react";
import SpotlightCard from "../animations/SpotlightCard";
import AnimatedContent from "../animations/AnimatedContent";
import { Badge } from "@/components/ui/badge";

export default function SkillsExpertise() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="w-6 h-6" />,
      description:
        "Building responsive and modern user interfaces with clean structure and interactive user experience.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Bootstrap",
      ],
      status: "core",
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      description:
        "Creating backend logic, REST APIs, routing, authentication flow, and server-side application features.",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication",
        "Middleware",
        "Postman",
      ],
      status: "core",
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-6 h-6" />,
      description:
        "Working with structured and document-based databases to manage, store, and retrieve application data.",
      skills: [
        "MongoDB",
        "Mongoose",
        "MySQL",
        "Database Queries",
      ],
      status: "core",
    },
    {
      title: "AI / ML Foundations",
      icon: <BrainCircuit className="w-6 h-6" />,
      description:
        "Learning machine learning concepts and building understanding of data-driven intelligent systems.",
      skills: [
        "Python",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "ML Basics",
        "Data Analysis",
      ],
      status: "learning",
    },
    {
      title: "Core CS Fundamentals",
      icon: <Cpu className="w-6 h-6" />,
      description:
        "Strong academic and practical foundation in problem solving and computer science fundamentals.",
      skills: [
        "DSA",
        "OOP",
        "DBMS",
        "Operating Systems",
        "Problem Solving",
        "Algorithms",
      ],
      status: "core",
    },
    {
      title: "Developer Tools",
      icon: <Wrench className="w-6 h-6" />,
      description:
        "Using modern tools for development workflow, version control, design references, and debugging.",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Figma",
        "Chrome DevTools",
        "Vercel",
      ],
      status: "learning",
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#0d1324] text-white py-20 px-4 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 30 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.05}
          threshold={0.2}
        >
          <div className="text-center mb-14">
            <div className="inline-flex items-center rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-200 mb-5">
              TECHNICAL STACK
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-purple-400">Skills</span>
            </h1>

            <p className="text-gray-300 text-center max-w-3xl mx-auto text-base md:text-lg leading-8">
              A focused overview of my development stack as a{" "}
              <span className="text-purple-300 font-semibold">
                MERN Stack Developer
              </span>{" "}
              and{" "}
              <span className="text-purple-300 font-semibold">
                AI/ML learner
              </span>
              . I am continuously improving my frontend, backend, database, and
              problem-solving skills through projects and practical learning.
            </p>
          </div>
        </AnimatedContent>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="relative h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <AnimatedContent
                distance={150}
                direction={
                  index === 1 || index === 4 ? "vertical" : "horizontal"
                }
                reverse={index === 0 || index === 3}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.03}
                threshold={0.2}
              >
                {hoveredCard === index && (
                  <>
                    <motion.div
                      className="absolute w-2 h-2 rounded-full bg-purple-400/40"
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={{
                        x: [0, 20, 10, 30, 0],
                        y: [0, -20, -40, -10, 0],
                        opacity: [0, 1, 0.5, 1, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                      style={{ top: "20%", left: "10%" }}
                    />
                    <motion.div
                      className="absolute w-3 h-3 rounded-full bg-purple-400/30"
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={{
                        x: [0, -15, -25, -10, 0],
                        y: [0, 30, 10, 40, 0],
                        opacity: [0, 0.7, 0.3, 0.8, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        delay: 0.5,
                      }}
                      style={{ bottom: "30%", right: "15%" }}
                    />
                    <motion.div
                      className="absolute w-1.5 h-1.5 rounded-full bg-purple-400/50"
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={{
                        x: [0, 25, 5, 15, 0],
                        y: [0, 15, 30, 5, 0],
                        opacity: [0, 0.5, 1, 0.3, 0],
                      }}
                      transition={{
                        duration: 4.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        delay: 1,
                      }}
                      style={{ bottom: "20%", left: "20%" }}
                    />
                  </>
                )}

                <SpotlightCard
                  className="custom-spotlight-card h-full"
                  spotlightColor="rgba(138, 43, 226, 0.22)"
                >
                  <div className="h-full rounded-[24px] border border-purple-400/10 bg-gradient-to-br from-[#10172b] to-[#0b1020] p-6 flex flex-col shadow-[0_0_30px_rgba(168,85,247,0.06)]">
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-purple-400/10 border border-purple-400/20 flex items-center justify-center text-purple-300">
                          {category.icon}
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold leading-tight">
                            {category.title}
                          </h2>
                        </div>
                      </div>

                      {category.status === "learning" && (
                        <Badge className="bg-purple-500/15 border border-purple-400/20 text-purple-200 rounded-full px-3 py-1">
                          Learning
                        </Badge>
                      )}

                      {category.status === "core" && (
                        <Badge className="bg-emerald-500/15 border border-emerald-400/20 text-emerald-200 rounded-full px-3 py-1">
                          Core
                        </Badge>
                      )}
                    </div>

                    <p className="text-gray-400 mb-6 leading-7 text-sm md:text-base">
                      {category.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mt-auto">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="border border-purple-400/20 bg-[#121a2f] hover:bg-[#17203a] py-2.5 px-3 rounded-xl text-sm text-white font-medium text-center transition duration-300"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </AnimatedContent>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
