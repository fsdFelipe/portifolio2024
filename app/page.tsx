'use client'
import Hero from "@/components/Hero";
import TransitionEffect from "@/components/ui/TransitionEffect";

export default function Home() {

  return (
    <main className="w-full h-full p-1 sm:p-6">
      <TransitionEffect />
      <Hero />
    </main >
  )
}
