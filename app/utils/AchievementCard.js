"use client";

import { motion } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";
import SpotlightCard from "@/app/animations/SpotlightCard";

export default function AchievementCard({ achievement }) {
    const isOrange = achievement.color === "orange";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="h-full"
        >
            <SpotlightCard
                className={`h-full rounded-[28px] overflow-hidden border ${isOrange ? "border-orange-400/20" : "border-purple-400/20"
                    } bg-gradient-to-br from-[#10172b] to-[#0b1020]`}
                spotlightColor={
                    isOrange
                        ? "rgba(249,115,22,0.18)"
                        : "rgba(168,85,247,0.18)"
                }
            >
                <div className="p-6 h-full flex flex-col relative">
                    <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                            <div
                                className={`w-11 h-11 rounded-2xl border flex items-center justify-center mb-3 ${isOrange
                                    ? "border-orange-400/20 bg-orange-400/10 text-orange-300"
                                    : "border-purple-400/20 bg-purple-400/10 text-purple-300"
                                    }`}
                            >
                                {achievement.icon}
                            </div>

                            <p
                                className={`text-xs tracking-[0.28em] uppercase ${isOrange ? "text-orange-300" : "text-purple-300"
                                    }`}
                            >
                                {achievement.issuer}
                            </p>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-gray-400">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{achievement.date}</span>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                        {achievement.title}
                    </h3>

                    <p
                        className={`text-sm mb-3 ${isOrange ? "text-orange-300" : "text-purple-300"
                            }`}
                    >
                        {achievement.subtitle}
                    </p>

                    <p className="text-gray-300 text-sm leading-7 flex-grow">
                        {achievement.description}
                    </p>

                    <motion.a
                        href={achievement.url}
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
                        className={`mt-5 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-medium text-white transition-all duration-300 ${isOrange
                            ? "bg-orange-500 hover:bg-orange-600"
                            : "bg-purple-500 hover:bg-purple-600"
                            }`}
                    >
                        View Certificate
                        <ExternalLink className="w-4 h-4" />
                    </motion.a>
                </div>
            </SpotlightCard>
        </motion.div>
    );
}