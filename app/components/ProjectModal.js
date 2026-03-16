"use client";

import { X, Calendar, Eye, Tag, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-[#0a101f] border border-purple-400/30 rounded-[28px] w-full max-w-5xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-purple-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-56 sm:h-72 bg-gradient-to-br from-purple-500/15 via-[#12182d] to-orange-400/10 flex items-center justify-center border-b border-purple-400/20">
                <div className="text-center px-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl border border-purple-400/20 bg-purple-400/10 flex items-center justify-center text-purple-300 mb-4">
                    {project.icon}
                  </div>
                  <p className="text-sm tracking-[0.28em] text-purple-300 uppercase mb-2">
                    {project.subtitle}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {project.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="h-4 w-4 text-purple-400/70" />
                    <span>{project.lastUpdated}</span>
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-purple-400/10 px-3 py-1 text-sm text-purple-300">
                    <Eye className="h-4 w-4" />
                    <span>{project.views} views</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-8 leading-8 text-base">
                  {project.longDescription || project.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1.5 text-sm font-medium text-purple-300"
                      >
                        <Tag className="h-3.5 w-3.5" />
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

                {project.stats && (
                  <div className="grid grid-cols-3 gap-3 mb-8">
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
                )}

                {project.impact && (
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5 mb-8">
                    <p className="text-sm tracking-[0.25em] text-gray-400 uppercase mb-3">
                      Outcome / Impact
                    </p>
                    <p className="text-gray-300 leading-8">{project.impact}</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-purple-500 hover:bg-purple-600 px-6 py-3 font-medium text-white transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                    {project.index === 4 ? "Open Login Page" : "Open Project"}
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-2xl border-2 border-purple-400/50 bg-transparent hover:bg-purple-400/10 px-6 py-3 font-medium text-purple-300 transition-colors"
                    >
                      <FaGithub className="h-5 w-5" />
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}