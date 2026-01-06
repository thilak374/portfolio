// components/Education.tsx
"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-24 bg-black/40">
      <h2 className="text-center text-4xl font-bold text-primary mb-12">
        Education
      </h2>

      <div className="max-w-3xl mx-auto space-y-6 px-6">
        {[
          "Bachelor’s Degree – Computer Science",
          "Web Development & UI Certification",
        ].map((item, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -40 }}
            className="p-6 rounded-xl bg-bgDark border border-purple-800"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
