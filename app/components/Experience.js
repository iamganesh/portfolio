"use client";

import { Briefcase, Award, ExternalLink, FolderOpen } from "lucide-react";
import AnimatedContent from "../animations/AnimatedContent";
import { motion } from "framer-motion";

export default function PortfolioJourney() {
  const experienceItems = [
    {
      id: 1,
      icon: <Award className="w-7 h-7" />,
      company: "Summer Internship",
      period: "2025",
      role: "DSA Internship",
      description:
        "Completed a summer internship focused on Data Structures and Algorithms using C++. Improved problem-solving ability, coding logic, and understanding of core DSA concepts through structured learning and implementation.",
      achievements: [
        "Strengthened C++ and DSA fundamentals",
        "Improved coding logic and problem-solving skills",
        "Completed internship-based certification successfully",
      ],
      certificate: "/dsa.jpg",
      projectButtonText: "Mini Instagram Project",
      projectLink: "https://github.com/iamganesh/mini-instagram",
    },
    {
      id: 2,
      icon: <Briefcase className="w-7 h-7" />,
      company: "MERN Stack Course",
      period: "2 Months",
      role: "Frontend & Backend Development",
      description:
        "Completed a 2-month MERN stack course and built frontend and backend applications. Gained hands-on experience in React, Node.js, Express.js, MongoDB, routing, API handling, authentication basics, and full stack project structure.",
      achievements: [
        "Built frontend and backend applications",
        "Learned full stack MERN workflow",
        "Worked on practical application structure and routing",
      ],
      certificate: "",
      projectButtonText: "Restaurant Table Booking",
      projectLink: "http://localhost:5000/login",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-[#0a101f] text-slate-200 py-16 px-4 sm:px-6 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mt-10 mb-14">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 40 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.05}
            threshold={0.2}
          >
            <span className="inline-block rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm tracking-[0.25em] text-orange-300 uppercase mb-6">
              Experience
            </span>
          </AnimatedContent>

          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 40 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.05}
            threshold={0.2}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-5 text-white leading-tight max-w-5xl">
              Practical learning journey in{" "}
              <span className="text-orange-400">DSA</span> and{" "}
              <span className="text-orange-400">MERN stack development</span>.
            </h1>
          </AnimatedContent>

          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 50 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.05}
            threshold={0.2}
          >
            <p className="text-slate-400 max-w-3xl text-base md:text-lg leading-8">
              A timeline of my practical learning through internship,
              certification, and project-based MERN development.
            </p>
          </AnimatedContent>

          <div className="mt-8 h-px w-full max-w-md bg-gradient-to-r from-orange-500/60 to-transparent" />
        </div>

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/70 via-orange-400/40 to-transparent" />

          <div className="space-y-16">
            {experienceItems.map((item, index) => (
              <div key={item.id} className="relative">
                <AnimatedContent
                  distance={120}
                  direction="vertical"
                  reverse={false}
                  config={{ tension: 80, friction: 40 }}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.02}
                  threshold={0.2}
                >
                  <div className="absolute left-5 md:left-1/2 top-10 -translate-x-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-orange-500 border-4 border-[#0a101f] shadow-[0_0_20px_rgba(249,115,22,0.85)]" />
                  </div>
                </AnimatedContent>

                <AnimatedContent
                  distance={150}
                  direction="vertical"
                  reverse={false}
                  config={{ tension: 80, friction: 45 }}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.03}
                  threshold={0.2}
                >
                  <div
                    className={`ml-14 md:ml-0 md:w-[calc(50%-40px)] rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-md p-7 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(249,115,22,0.12)] ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                      }`}
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <div className="p-3 rounded-2xl border border-orange-400/20 bg-orange-400/10 text-orange-400">
                        {item.icon}
                      </div>

                      <div>
                        <h3 className="text-orange-400 text-lg font-medium">
                          {item.company}
                        </h3>
                        <h2 className="text-3xl font-bold text-white leading-tight">
                          {item.role}
                        </h2>
                        <p className="mt-1 text-sm tracking-[0.25em] uppercase text-slate-400">
                          {item.period}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-6 leading-8">
                      {item.description}
                    </p>

                    {item.achievements?.length > 0 && (
                      <div className="mb-7">
                        <h4 className="text-sm font-semibold mb-3 text-white">
                          Key Highlights:
                        </h4>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-slate-400">
                              • {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-4">
                      {item.certificate && (
                        <motion.a
                          href={item.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                          animate={{
                            boxShadow: [
                              "0 0 0px rgba(249,115,22,0)",
                              "0 0 18px rgba(249,115,22,0.25)",
                              "0 0 0px rgba(249,115,22,0)",
                            ],
                          }}
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white transition-all duration-300 hover:border-orange-400/40 hover:bg-orange-400/10"
                        >
                          <Award className="h-4 w-4" />
                          View Certificate
                          <ExternalLink className="h-4 w-4" />
                        </motion.a>
                      )}

                      <motion.a
                        href={item.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        animate={{
                          boxShadow: [
                            "0 0 0px rgba(249,115,22,0)",
                            "0 0 18px rgba(249,115,22,0.3)",
                            "0 0 0px rgba(249,115,22,0)",
                          ],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-white font-medium transition-all duration-300 hover:bg-orange-600"
                      >
                        <FolderOpen className="h-4 w-4" />
                        {item.projectButtonText}
                        <ExternalLink className="h-4 w-4" />
                      </motion.a>
                    </div>
                  </div>
                </AnimatedContent>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}