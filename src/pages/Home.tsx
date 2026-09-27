import { Hero } from "../components/home/Hero";
import { SelectedWork } from "../components/home/SelectedWork";
import { WhatIDo } from "../components/home/WhatIDo";
import { HowIWork } from "../components/home/HowIWork";
import { About } from "../components/home/About";
import { BehindMHeax } from "../components/home/BehindMHeax";
import { FinalCTA } from "../components/home/FinalCTA";
import { Contact } from "../components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <WhatIDo />
      <HowIWork />
      <About />
      <BehindMHeax />
      <FinalCTA />
      <Contact />
    </>
  );
}
