"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Hero() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(".hero-content", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.2,
    })

    gsap.from(".hero-image", {
      opacity: 0,
      x: 30,
      duration: 0.8,
      delay: 0.4,
    })
  }, [])

  return (
    <section
      id="home"
      className="relative py-5 md:py-18 bg-gradient-to-br from-primary/15 via-background to-accent/8 overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-secondary/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="hero-content text-center md:text-left">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
                  Nurturing Young Minds
                </h1>
                <div className="w-20 h-1 bg-primary mx-auto md:mx-0 mb-6"></div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0">
                Child World is a multidisciplinary child development centre dedicated to supporting neurodiverse children and their families through specialized therapies and counseling. We offer holistic support for every stage of development.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full hero-image">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-accent/25 rounded-2xl"></div>
            <img
              src="/children-playing-and-smiling-in-a-safe-welcoming-e.jpg"
              alt="Children in a welcoming environment"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
