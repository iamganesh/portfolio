"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import ContactPage2 from "../components/Contact";

const SocialLinksGrid = () => {
  const socialLinks = [
    {
      platform: "GitHub",
      username: "iamganesh",
      icon: (
        <Github className="h-6 w-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
      ),
      href: "https://github.com/iamganesh",
    },
    {
      platform: "LinkedIn",
      username: "ganesh-kolakanuru",
      icon: (
        <Linkedin className="h-6 w-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
      ),
      href: "https://www.linkedin.com/in/ganesh-kolakanuru",
    },
    {
      platform: "Email",
      username: "kolakanuruganesh@gmail.com",
      icon: (
        <Mail className="h-6 w-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
      ),
      href: "mailto:kolakanuruganesh@gmail.com",
    },
    {
      platform: "Phone",
      username: "+91 6305090510",
      icon: (
        <Phone className="h-6 w-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
      ),
      href: "tel:+916305090510",
    },
    {
      platform: "LeetCode",
      username: "iamganesh",
      icon: (
        <SiLeetcode className="h-6 w-6 text-purple-400 group-hover:text-white transition-colors duration-300" />
      ),
      href: "https://leetcode.com",
    },
  ];

  return (
    <div className="bg-[#0a101f] mb-10 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden border border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center 
            transition-all duration-300 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20 
            bg-gradient-to-br from-[#11172a] to-[#0c1120]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="bg-gray-900 rounded-full p-4 mb-6 relative z-10 border border-purple-400/10"
              whileHover={{ scale: 1.1 }}
            >
              {link.icon}
            </motion.div>

            <p className="text-white mb-2 font-medium text-center">
              {link.username}
            </p>

            <p className="text-purple-400 font-medium">{link.platform}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-10 bg-[#0a101f] text-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">

        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-purple-400">Touch</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto leading-8">
            Let's connect for internships, collaboration, or MERN Stack / AI-ML projects.
          </p>
        </div>

        <SocialLinksGrid />

        <ContactPage2 />

      </div>
    </div>
  );
}