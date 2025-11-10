"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, Activity, Heart, HeartHandshake, Circle as Ring, Zap, Baby, Users, BookOpen, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const servicesData = {
  kids: [
    {
      icon: Zap,
      title: "Behaviour Therapy",
      description:
        "Helps children develop positive habits, emotional control, and social skills through fun, structured, play-based techniques.",
      features: ["Positive Habits", "Emotional Control", "Social Skills"],
    },
    {
      icon: MessageCircle,
      title: "Speech Therapy",
      description:
        "Improves speech, language, and communication so children can express themselves confidently and clearly.",
      features: ["Speech Improvement", "Language Development", "Confident Communication"],
    },
    {
      icon: Activity,
      title: "Occupational Therapy (OT)",
      description:
        "Builds motor skills, coordination, and sensory balance to support children's daily independence and growth.",
      features: ["Motor Skills", "Coordination", "Sensory Balance"],
    },
    {
      icon: Baby,
      title: "Child Therapy",
      description:
        "Offers emotional and developmental support through play and creative expression in a safe, nurturing space.",
      features: ["Emotional Support", "Developmental Growth", "Creative Expression"],
    },
  ],
  adults: [
    {
      icon: Heart,
      title: "Counseling for Adults",
      description:
        "Provides parents and caregivers with emotional support, stress management, and positive parenting guidance.",
      features: ["Emotional Support", "Stress Management", "Parenting Guidance"],
    },
    {
      icon: Users,
      title: "Teenage Counseling",
      description:
        "Supports teenagers through emotional, academic, and social challenges while helping them build confidence and self-awareness.",
      features: ["Emotional Support", "Academic Guidance", "Confidence Building"],
    },
    {
      icon: HeartHandshake,
      title: "Relationship Counseling",
      description:
        "Guides individuals and couples to better understand themselves and each other, improving emotional connection and mutual respect.",
      features: ["Emotional Connection", "Understanding", "Mutual Respect"],
    },
    {
      icon: Ring,
      title: "Marriage Counseling",
      description:
        "Helps couples strengthen communication, rebuild trust, and create healthy, supportive relationships.",
      features: ["Better Communication", "Trust Building", "Healthy Relationships"],
    },
    
  ]
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<'kids' | 'adults'>('kids')
  const sectionRef = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && sectionRef.current) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      gsap.from(".service-card", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      })
    }
  }, [activeTab])

  const services = servicesData[activeTab]

  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-gradient-to-br from-primary/8 via-background to-accent/8 relative overflow-hidden"
      ref={sectionRef}
    >
      <div
        className="absolute top-40 left-20 w-28 h-28 bg-primary/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "0.3s" }}
      ></div>
      <div
        className="absolute bottom-20 right-20 w-40 h-40 bg-accent/8 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-3">What We Offer</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Child World, we offer a range of therapies and counseling services designed to support children, parents, and families at every stage of life.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-muted p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('kids')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'kids'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground/80'
              }`}
            >
              For Kids
            </button>
            <button
              onClick={() => setActiveTab('adults')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'adults'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground/80'
              }`}
            >
              For Adults
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="service-card bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/15 to-accent/15 border border-primary/30 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team is ready to help your child thrive. Schedule a consultation with one of our experienced therapists
            today.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
