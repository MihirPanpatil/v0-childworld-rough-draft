"use client"

import { useEffect, useRef } from "react"
import { Mail, Phone } from "lucide-react"

export default function Staff() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && sectionRef.current) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      gsap.from(".staff-card", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      })
    }
  }, [])

  const staffMembers = [
    {
      name: "Shilpa Achary",
      title: "Clinical Psychologist",
      specialization: "Child Development & Behavioral Therapy"
    },
    {
      name: "Dr. Heeba Sheikh",
      title: "Occupational Therapist (B.OT)",
      specialization: "Pediatric Occupational Therapy"
    },
    {
      name: "Dr. Vijay Sonavane",
      title: "MBBS, MD Pediatrics (2009), P.G.P.N USA",
      specialization: "Pediatrician"
    },
    {
      name: "Sushama Prashant Karade",
      title: "B.A.DECSE",
      specialization: "Early Childhood Special Education"
    },
    {
      name: "Dr. Runali Ram Bagade",
      title: "B.OT, (Developmental Disabilities)",
      specialization: "Occupational therapy"
    },
  ]

  return (
    <section
      id="staff"
      className="py-20 md:py-32 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "0.4s" }}></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.1s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-3">Our Experts</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Meet Our Dedicated Team</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our compassionate team of child development experts is committed to providing personalized care and support for every child and family we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {staffMembers.map((member, index) => (
            <div
              key={index}
              className="staff-card group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-3xl font-bold text-foreground/30">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-semibold text-sm mb-2">{member.title}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.specialization}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
