"use client";

import Link from "next/link";
import { Award, BookOpenCheck, ArrowRight } from "lucide-react";
import AnimatedContent from "../animations/AnimatedContent";
import AchievementCard from "../utils/AchievementCard";
import { Button } from "@/components/ui/button";

export default function AchievementsSection() {
  const achievements = [
    {
      id: 1,
      title: "Summer Internship Certificate",
      subtitle: "Fundamentals of Data Structures using C++",
      issuer: "Summer Internship Program",
      date: "2025",
      description:
        "Earned after successfully completing internship assessment and strengthening DSA and C++ fundamentals.",
      type: "certificate",
      url: "/dsa.jpg",
      icon: <Award className="w-5 h-5" />,
      color: "orange",
    },
    {
      id: 2,
      title: "Responsive Web Design",
      subtitle: "freeCodeCamp Certification",
      issuer: "freeCodeCamp",
      date: "2025",
      description:
        "Completed responsive web design certification and improved HTML, CSS, and responsive frontend skills.",
      type: "certificate",
      url: "/freecodecamp.png",
      icon: <BookOpenCheck className="w-5 h-5" />,
      color: "purple",
    },
    {
      id: 3,
      title: "Language Principle & Finite Automata Theory",
      subtitle: "Academic Certificate",
      issuer: "Course Completion",
      date: "2025",
      description:
        "Completed certification in language principles and finite automata theory with focus on formal languages and computational models.",
      type: "certificate",
      url: "/certificates/language-principle-finite-automata-theory.pdf",
      icon: <Award className="w-5 h-5" />,
      color: "orange",
    },
    {
      id: 4,
      title: "ChatGPT-4 Prompt Engineering for Generative AI",
      subtitle: "Prompt Engineering Certificate",
      issuer: "Course Completion",
      date: "2025",
      description:
        "Earned this certificate by learning prompt engineering concepts for generative AI and practical ChatGPT-4 workflows.",
      type: "certificate",
      url: "/certificates/chatgpt-4-prompt-engineering-generative-ai.pdf",
      icon: <BookOpenCheck className="w-5 h-5" />,
      color: "purple",
    },
    {
      id: 5,
      title: "Fundamentals of Network Communication",
      subtitle: "Networking Certificate",
      issuer: "Course Completion",
      date: "2025",
      description:
        "Completed foundational networking certification covering communication basics, network concepts, and core connectivity principles.",
      type: "certificate",
      url: "/certificates/fundamentals-of-network-communication.pdf",
      icon: <Award className="w-5 h-5" />,
      color: "orange",
    },
  ];

  return (
    <section className="py-16 bg-[#0a101f] text-white" id="certificates">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.05}
          threshold={0.2}
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-3">
              <span className="text-purple-400">Certificates</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My verified learning milestones with direct certificate access.
            </p>
          </div>
        </AnimatedContent>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>

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
          <div className="mt-10 text-center">
            <Link href="/achievement">
              <Button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-8 py-3 rounded-xl transition-transform duration-300 hover:scale-105">
                See All Certificates
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
