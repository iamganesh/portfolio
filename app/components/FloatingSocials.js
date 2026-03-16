"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaDocker,
  FaPython,
  FaJava,
  FaPhp,
  FaAws,
  FaLinux,
  FaWindows,
  FaDatabase,
  FaNpm,
  FaFigma,
} from "react-icons/fa";

const FloatingSocials = () => {
  const technologies = [
    { icon: <FaHtml5 />, name: "HTML5", left: "8vw", top: "18vh", dx: 18, dy: -12, duration: 7 },
    { icon: <FaCss3Alt />, name: "CSS3", left: "18vw", top: "72vh", dx: -16, dy: 10, duration: 8 },
    { icon: <FaJs />, name: "JavaScript", left: "30vw", top: "22vh", dx: 20, dy: 14, duration: 9 },
    { icon: <FaReact />, name: "React", left: "78vw", top: "24vh", dx: -22, dy: 10, duration: 7.5 },
    { icon: <FaNodeJs />, name: "Node.js", left: "84vw", top: "70vh", dx: -16, dy: -14, duration: 8.5 },
    { icon: <FaGit />, name: "Git", left: "12vw", top: "52vh", dx: 14, dy: 12, duration: 6.8 },
    { icon: <FaGithub />, name: "GitHub", left: "68vw", top: "82vh", dx: -12, dy: -10, duration: 7.2 },
    { icon: <FaDocker />, name: "Docker", left: "88vw", top: "44vh", dx: -18, dy: 16, duration: 8.8 },
    { icon: <FaPython />, name: "Python", left: "24vw", top: "88vh", dx: 16, dy: -10, duration: 7.6 },
    { icon: <FaJava />, name: "Java", left: "42vw", top: "14vh", dx: -14, dy: 12, duration: 8.1 },
    { icon: <FaPhp />, name: "PHP", left: "58vw", top: "76vh", dx: 15, dy: -12, duration: 7.9 },
    { icon: <FaAws />, name: "AWS", left: "72vw", top: "14vh", dx: -14, dy: 10, duration: 9.1 },
    { icon: <FaLinux />, name: "Linux", left: "6vw", top: "84vh", dx: 12, dy: -9, duration: 8.4 },
    { icon: <FaWindows />, name: "Windows", left: "92vw", top: "58vh", dx: -10, dy: 12, duration: 7.4 },
    { icon: <FaDatabase />, name: "Database", left: "50vw", top: "86vh", dx: 0, dy: -14, duration: 8.7 },
    { icon: <FaNpm />, name: "NPM", left: "36vw", top: "64vh", dx: 14, dy: -10, duration: 7.3 },
    { icon: <FaFigma />, name: "Figma", left: "60vw", top: "30vh", dx: -12, dy: 14, duration: 8.3 },
  ];

  return (
    <div className="absolute inset-0 h-screen w-screen pointer-events-none overflow-hidden">
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, tech.dx, 0],
            y: [0, tech.dy, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: tech.duration,
            ease: "easeInOut",
          }}
          className="absolute z-30"
          style={{
            left: tech.left,
            top: tech.top,
          }}
          whileHover={{ scale: 1.15 }}
          title={tech.name}
        >
          <div className="text-white bg-purple-500 p-3 rounded-full shadow-lg shadow-purple-700/40 transition-transform duration-300 hover:scale-110 cursor-pointer pointer-events-auto">
            {tech.icon}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingSocials;