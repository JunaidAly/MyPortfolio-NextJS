import Hero from "@/components/sections/Hero";
import IntroVideo from "@/components/sections/IntroVideo";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Freelance from "@/components/sections/Freelance";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroVideo />
      <Projects />
      <Experience />
      <About />
      <Freelance />
      <Contact />
    </>
  );
}
