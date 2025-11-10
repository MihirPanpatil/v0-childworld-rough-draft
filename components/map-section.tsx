"use client"

import { useEffect, useRef } from "react"

export default function MapSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && sectionRef.current) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      gsap.from(".map-container", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      })

      gsap.from(".location-card", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
          toggleActions: "play none none none",
        },
      })
    }
  }, [])

  return (
    <section
      id="map"
      className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
      ref={sectionRef}
    >
      <div
        className="absolute top-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "0.6s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-28 h-28 bg-primary/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1.0s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-3">Our Location</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Find Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Visit our welcoming clinic located in the heart of the community. We're easy to find and accessible by
            public transportation.
          </p>
        </div>

        {/* Map Container */}
        <div className="map-container rounded-2xl overflow-hidden border border-border shadow-lg h-96 md:h-[500px]">
          <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.2999847208716!2d73.00938492013042!3d19.094491319584954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c17adc478d39%3A0x63463bfe0b04e357!2sChild%20World!5e0!3m2!1sen!2sin!4v1762788907696!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Childworld Clinic Location"
          ></iframe>
        </div>

      </div>
    </section>
  )
}
