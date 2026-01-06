"use client";
import { motion } from "framer-motion";
import Image from "next/image";   // ✅ MUST be here
import { useEffect, useRef, useState } from "react";


const roles = [
  "Web Developer",
  "React Developer",
  "Next.js Developer",
  "UI Designer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentRole = roles[roleIndex];
  const text = currentRole.slice(0, charIndex);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (!isDeleting && charIndex < currentRole.length) {
      timeoutRef.current = setTimeout(() => setCharIndex(v => v + 1), 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex > 0) {
      timeoutRef.current = setTimeout(() => setCharIndex(v => v - 1), 50);
    } else if (isDeleting && charIndex === 0) {
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex(v => (v + 1) % roles.length);
      }, 200);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, isDeleting, currentRole]);

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 pt-28">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            Hi, I’m <span className="text-primary">Thilak</span>
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-300">
            <span className="text-primary">{text}</span>
            <span className="ml-1 animate-pulse text-primary">|</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl">
            I build modern, animated, and performance-focused web experiences
            using React and Next.js.
          </p>

          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-primary text-black font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* IMAGE (FORCED VISIBILITY) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.div
          animate={{
            boxShadow: [
              "0 0 20px rgba(168,85,247,0.4)",
              "0 0 40px rgba(168,85,247,0.8)",
              "0 0 20px rgba(168,85,247,0.4)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-purple-600 overflow-hidden bg-black"
          >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-purple-600 shadow-2xl shadow-purple-800/50 overflow-hidden bg-black"
          >
            <motion.div
  whileHover={{ rotateX: 8, rotateY: -8, scale: 1.05 }}
  transition={{ type: "spring", stiffness: 200, damping: 15 }}
  style={{ perspective: 1000 }}
  className="flex justify-center"
>
  {/* glow image div stays inside */}
</motion.div>
            <Image
            src="/projects/portfolio.jpg"
            alt="Thilak Profile"
            fill
            sizes="(max-width: 768px) 288px, 384px"
            className="object-cover"
            priority
          />
          </motion.div>
        </motion.div>
      </motion.div>

      </div>
    </section>
  );
}
