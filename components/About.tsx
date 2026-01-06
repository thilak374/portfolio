// components/About.tsx
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 max-w-4xl mx-auto px-6">
      <Reveal>
        <h2 className="text-4xl font-bold mb-6 text-primary">About Me</h2>
        <p className="text-gray-300 leading-7">
          I’m Thilak, a passionate web developer focused on building modern,
            animated, and performance-driven web applications. I specialize in
            React and Next.js, creating clean UI experiences that combine
            functionality with visual elegance.
        </p>
      </Reveal>
    </section>
  );
}

