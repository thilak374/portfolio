"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black/40">
      {/* Section Title */}
      <Reveal>
        <h2 className="text-center text-4xl font-bold text-primary mb-12">
          Projects
        </h2>
      </Reveal>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((project, i) => (
          <Reveal key={i}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-xl overflow-hidden bg-[#120b1f] border border-purple-700 group"
            >
              {/* IMAGE / PLACEHOLDER (VISIBLE FIX) */}
              <div className="relative h-56 z-10 bg-gradient-to-br from-purple-900 to-black flex items-center justify-center">
                <span className="text-purple-300 font-semibold text-lg text-center px-4">
                  {project.title}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5 relative z-10">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-purple-800/40 text-purple-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* HOVER OVERLAY (FIXED) */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition z-20 flex items-center justify-center gap-4 pointer-events-none group-hover:pointer-events-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-primary text-black font-semibold hover:scale-105 transition"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
