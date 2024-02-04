'use client'
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Techs from "@/components/Techs";
import TransitionEffect from "@/components/ui/TransitionEffect";

export default function Home() {

  return (
    <main className="w-full h-full p-1 sm:p-6">
      <TransitionEffect />
      <Hero />
      <section id="sobre">
        <Sobre />
      </section>
      <section id='edu'>
        <Education />
      </section>
      <Techs />
    </main >
  )
}
