"use client"

import { useEffect, useRef } from "react"
import { Heart, Target, Users, Lightbulb } from "lucide-react"

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && sectionRef.current) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      gsap.from(".value-card", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      })

      gsap.from(".vision-content", {
        opacity: 0,
        x: -30,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      })
    }
  }, [])

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We approach every child with empathy, understanding, and genuine care for their wellbeing.",
    },
    {
      icon: Target,
      title: "Evidence-Based",
      description: "Our treatments are grounded in the latest research and proven therapeutic methodologies.",
    },
    {
      icon: Users,
      title: "Family-Centered",
      description: "We involve families in the healing process, recognizing their crucial role in a child's recovery.",
    },
    {
      icon: Lightbulb,
      title: "Holistic Approach",
      description: "We address the whole child—emotional, behavioral, social, and developmental needs.",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-gradient-to-br from-background via-secondary/5 to-background relative overflow-hidden"
      ref={sectionRef}
    >
      <div
        className="absolute top-40 left-20 w-28 h-28 bg-primary/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "0.4s" }}
      ></div>
      <div
        className="absolute bottom-20 right-20 w-40 h-40 bg-accent/8 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.1s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-3">About Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Vision</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every child deserves to feel understood, supported, and empowered. At Child World, we celebrate every unique journey — because real growth is about happiness, confidence, and belonging.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Image */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/25 to-primary/25 rounded-2xl"></div>
            <img
              src="/children-therapy-session-supportive-environment.jpg"
              alt="Therapy session with supportive environment"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8 vision-content">
            

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Child World, our mission is to provide compassionate, evidence-based therapy and counseling that nurtures growth in children and strengthens families. We aim to build an inclusive environment that promotes emotional, social, and developmental well-being for neurodiverse children and their caregivers.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-semibold text-foreground mb-3">Our Goals</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-muted-foreground">To offer holistic therapy programs that support each child’s unique developmental needs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-muted-foreground">To empower parents through guidance, education, and counseling.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-muted-foreground">To promote inclusion, awareness, and acceptance of neurodiversity in the community.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-muted-foreground">To continuously improve our practices through professional development and teamwork.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}
