// components/Education.tsx
import Reveal from "@/components/Reveal";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-black/40">
      <Reveal>
        <h2 className="text-center text-4xl font-bold text-primary mb-12">
          Education
        </h2>
      </Reveal>

      <div className="max-w-3xl mx-auto space-y-6 px-6">
        {["Bachelor’s Degree – Computer Science", "Web Development Certification"].map(
          (item, i) => (
            <Reveal key={i}>
              <div className="p-6 rounded-xl bg-[#120b1f] border border-purple-700 text-white">
                {item}
              </div>
            </Reveal>
          )
        )}
      </div>
    </section>
  );
}
