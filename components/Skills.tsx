// components/Skills.tsx
"use client";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind",
  "UI/UX",
];

export default function Skills() {
  return (
    <section className="py-24">
      <h2 className="text-center text-4xl font-bold text-primary mb-10">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 rounded-full bg-purple-900/40 border border-purple-700"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
