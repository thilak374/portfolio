// app/page.tsx
import PageTransition from "@/components/PageTransition";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <PageTransition>
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </PageTransition>
  );
}
