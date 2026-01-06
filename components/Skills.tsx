// components/Skills.tsx
import Reveal from "@/components/Reveal";

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
    <section id="skills" className="py-24">
      <Reveal>
        <h2 className="text-center text-4xl font-bold text-primary mb-10">
          Skills
        </h2>
      </Reveal>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <Reveal key={skill}>
            <div className="px-6 py-3 rounded-full bg-purple-800/40 text-white border border-purple-600">
              {skill}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
