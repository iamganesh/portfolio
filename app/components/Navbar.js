"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, X, Bug } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBugMessage, setShowBugMessage] = useState(false);

  useEffect(() => {
    if (showBugMessage) {
      const timeout = setTimeout(() => {
        setShowBugMessage(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [showBugMessage]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.documentElement.classList.add("dark");

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed z-50 mb-10 w-full max-w-screen bg-[#0a0e1a]/85 text-white py-4">
      <div className="lg:w-3/4 mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="text-xl font-semibold">
          <Link
            href="/home"
            className="text-2xl flex items-baseline font-bold text-white"
          >
            Ganesh <span className="text-3xl">.</span>
            <span className="text-purple-400">dev</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <NavItem href="/home" isActive={pathname === "/home"}>
            About
          </NavItem>

          <NavItem href="/home#skills" isActive={false}>
            Skills
          </NavItem>

          <NavItem href="/projects" isActive={pathname.startsWith("/projects")}>
            Projects
          </NavItem>

          <NavItem
            href="/achievement"
            isActive={pathname.startsWith("/achievement")}
          >
            Achievements
          </NavItem>

          <NavItem href="/home#certifications" isActive={false}>
            Certifications
          </NavItem>

          <NavItem href="/ganeshcv.pdf" isActive={false}>
            Resume
          </NavItem>

          <NavItem href="/contact" isActive={pathname.startsWith("/contact")}>
            Contact
          </NavItem>
        </nav>

        <div className="flex items-center relative">
          <button
            onClick={() => {
              setShowBugMessage(true);
            }}
            className="p-2 rounded-full bg-gray-800 text-white"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5" />
          </button>

          {showBugMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute right-0 top-12 w-56 bg-gray-800 text-white p-3 rounded-md shadow-lg text-xs z-50"
            >
              <div className="flex items-center gap-2">
                <Bug className="w-5 h-5 text-amber-500" />
                <span>Light attracts bugs! Good devs never use light mode.</span>
              </div>
            </motion.div>
          )}

          <button
            className="ml-4 md:hidden p-2 text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0a0e1a] z-50 md:hidden overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
          >
            <div className="flex items-center justify-between p-4">
              <div className="text-xl font-semibold">
                <Link
                  href="/home"
                  className="text-2xl flex items-baseline font-bold text-white"
                >
                  Ganesh <span className="text-3xl">.</span>
                  <span className="text-purple-400">dev</span>
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-800 text-white"
                  aria-label="Toggle theme"
                >
                  <Sun className="h-5 w-5" />
                </button>

                <button
                  onClick={toggleMenu}
                  className="p-2 text-white"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <nav className="px-4 py-2">
              <ul className="space-y-1">
                <MobileNavItem href="/home" isActive={pathname === "/home"}>
                  About
                </MobileNavItem>

                <MobileNavItem href="/home#skills" isActive={false}>
                  Skills
                </MobileNavItem>

                <MobileNavItem
                  href="/projects"
                  isActive={pathname.startsWith("/projects")}
                >
                  Projects
                </MobileNavItem>

                <MobileNavItem
                  href="/achievement"
                  isActive={pathname.startsWith("/achievement")}
                >
                  Achievements
                </MobileNavItem>

                <MobileNavItem href="/home#certifications" isActive={false}>
                  Certifications
                </MobileNavItem>

                <MobileNavItem href="/ganeshcv.pdf" isActive={false}>
                  Resume
                </MobileNavItem>

                <MobileNavItem
                  href="/contact"
                  isActive={pathname.startsWith("/contact")}
                >
                  Contact
                </MobileNavItem>
              </ul>
            </nav>

            <div className="p-4 mt-8 bg-[#111827] rounded-lg mx-4">
              <p className="text-gray-300 text-sm">
                MERN stack developer and AI/ML engineer focused on building
                impactful software projects and practical solutions.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ href, children, isActive }) {
  return (
    <div className="relative group">
      <Link
        href={href}
        className={cn(
          "flex items-center relative",
          isActive && "border-b-2 border-purple-500"
        )}
      >
        <span
          className={cn(
            "hover:text-gray-300 transition-colors",
            isActive && "text-white"
          )}
        >
          {children}
        </span>
      </Link>
    </div>
  );
}

function MobileNavItem({ href, children, isActive }) {
  return (
    <li>
      <div className="flex items-center">
        <Link
          href={href}
          className={cn(
            "flex-1 py-3 px-2 rounded-md text-white",
            isActive && "bg-[#1a2035]"
          )}
        >
          {children}
        </Link>
      </div>
    </li>
  );
}
