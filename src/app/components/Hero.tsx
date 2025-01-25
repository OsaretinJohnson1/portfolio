import { ArrowDownCircle } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      <div className="text-center z-10">
        <h1 className="text-6xl font-bold mb-4 animate-fade-in">Osaretin Johnson</h1>
        <p className="text-2xl text-gray-400 mb-8 animate-fade-in animation-delay-300">
          Software Engineer | AI Enthusiast
        </p>
        <Link href="#about" className="inline-block">
          <ArrowDownCircle className="w-12 h-12 text-neon-blue animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

