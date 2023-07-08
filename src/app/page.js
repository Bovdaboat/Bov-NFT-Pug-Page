import Image from 'next/image'
import Navbar from "@/app/Components/Navbar";
import Hero from "@/app/Components/Hero";

export default function Home() {
  return (
    <>
    <main>
      <Navbar />
      <Hero />
    </main>
    </>
  )
}
