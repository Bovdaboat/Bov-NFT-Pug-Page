import Image from 'next/image'
import Navbar from "@/app/Components/Navbar";
import Hero from "@/app/Components/Hero";
import Footer from "@/app/Components/Footer";

export default function Home() {
  return (
    <>
    <main>
      <Navbar />
      <Hero />
      <Footer />
    </main>
    </>
  )
}
