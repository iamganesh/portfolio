"use client";

import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  Calendar,
  FileBadge2,
  BookOpenCheck,
} from "lucide-react";
import AnimatedContent from "../animations/AnimatedContent";
import SpotlightCard from "../animations/SpotlightCard";

const achievements = [
  {
    id: 1,
    title: "Summer Internship Certificate",
    subtitle: "Fundamentals of Data Structures using C++",
    issuer: "Summer Internship Program",
    issueDate: "2025",
    description:
      "Earned this certificate by successfully completing the internship assessment and demonstrating understanding of Data Structures and Algorithms using C++.",
    highlights: [
      "Cleared internship assessment exam",
      "Strengthened DSA and C++ fundamentals",
      "Improved coding logic and problem-solving skills",
    ],
    certificateLink: "/dsa.jpg",
    color: "orange",
    icon: <Award className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Responsive Web Design Certificate",
    subtitle: "freeCodeCamp Certification",
    issuer: "freeCodeCamp",
    issueDate: "2025",
    description:
      "Completed the Responsive Web Design certification and improved practical knowledge of HTML, CSS, layouts, and responsive interface building.",
    highlights: [
      "Improved HTML and CSS fundamentals",
      "Learned responsive layouts and design structure",
      "Built stronger frontend design basics",
    ],
    certificateLink: "/freecodecamp.png",
    color: "purple",
    icon: <BookOpenCheck className="w-6 h-6" />,
  },
];

export default function AchievementsPage() {
  return (
    <section className="min-h-screen bg-[#0a101f] text-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedContent
          distance={140}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 25 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.03}
          threshold={0.2}
        >
          <div className="text-center mb-14">
            <div className="inline-flex items-center rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm text-purple-200 mb-5">
              ACHIEVEMENTS & CERTIFICATES
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-purple-400">Achievements</span>
            </h1>

            <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-8">
              My verified certificates with direct access links.
            </p>
          </div>
        </AnimatedContent>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => {
            const isOrange = item.color === "orange";

            return (
              <AnimatedContent
                key={item.id}
                distance={140}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 25 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.03}
                threshold={0.2}
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="h-full"
                >
                  <SpotlightCard
                    className={`h-full rounded-[30px] border ${isOrange ? "border-orange-400/20" : "border-purple-400/20"
                      } bg-gradient-to-br from-[#10172b] to-[#0b1020] overflow-hidden`}
                    spotlightColor={
                      isOrange
                        ? "rgba(249,115,22,0.18)"
                        : "rgba(168,85,247,0.18)"
                    }
                  >
                    <div className="p-7 md:p-8 h-full flex flex-col relative">
                      <motion.div
                        animate={{ opacity: [0.12, 0.28, 0.12] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={`absolute top-0 right-0 w-28 h-28 rounded-full blur-3xl ${isOrange ? "bg-orange-400/10" : "bg-purple-400/10"
                          }`}
                      />

                      <div className="relative z-10">
                        <div className="flex items-start justify-between gap-4 mb-5">
                          <div>
                            <p
                              className={`text-xs tracking-[0.28em] uppercase mb-2 ${isOrange ? "text-orange-300" : "text-purple-300"
                                }`}
                            >
                              {item.issuer}
                            </p>

                            <div className="flex items-center gap-3">
                              <div
                                className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${isOrange
                                  ? "border-orange-400/20 bg-orange-400/10 text-orange-300"
                                  : "border-purple-400/20 bg-purple-400/10 text-purple-300"
                                  }`}
                              >
                                {item.icon}
                              </div>

                              <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Calendar className="w-4 h-4" />
                                <span>{item.issueDate}</span>
                              </div>
                            </div>
                          </div>

                          <div
                            className={`rounded-full px-3 py-1 text-xs font-medium ${isOrange
                              ? "bg-orange-400/10 text-orange-300 border border-orange-400/20"
                              : "bg-purple-400/10 text-purple-300 border border-purple-400/20"
                              }`}
                          >
                            Certificate
                          </div>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {item.title}
                        </h2>

                        <p
                          className={`text-base mb-5 ${isOrange ? "text-orange-300" : "text-purple-300"
                            }`}
                        >
                          {item.subtitle}
                        </p>

                        <p className="text-gray-300 leading-8 mb-6">
                          {item.description}
                        </p>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 mb-6">
                          <p className="text-xs tracking-[0.25em] text-gray-400 uppercase mb-3">
                            Highlights
                          </p>
                          <ul className="space-y-2">
                            {item.highlights.map((point, idx) => (
                              <li key={idx} className="text-gray-300 text-sm leading-7">
                                • {point}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <motion.a
                          href={item.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          animate={{
                            boxShadow: isOrange
                              ? [
                                "0 0 0px rgba(249,115,22,0)",
                                "0 0 18px rgba(249,115,22,0.28)",
                                "0 0 0px rgba(249,115,22,0)",
                              ]
                              : [
                                "0 0 0px rgba(168,85,247,0)",
                                "0 0 18px rgba(168,85,247,0.28)",
                                "0 0 0px rgba(168,85,247,0)",
                              ],
                          }}
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={`inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 font-medium text-white transition-all duration-300 ${isOrange
                            ? "bg-orange-500 hover:bg-orange-600"
                            : "bg-purple-500 hover:bg-purple-600"
                            }`}
                        >
                          <FileBadge2 className="w-4 h-4" />
                          View Certificate
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              </AnimatedContent>
            );
          })}
        </div>
      </div>
    </section>
  );
}