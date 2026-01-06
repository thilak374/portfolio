// components/Projects.tsx
"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="py-24 bg-black/40">
      <h2 className="text-center text-4xl font-bold text-primary mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -12 }}
            className="p-6 rounded-xl bg-bgDark border border-purple-800 hover:shadow-purple-500/30 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <p className="text-sm text-purple-400 mt-1">{p.tech}</p>
            <p className="text-gray-400 mt-3">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
