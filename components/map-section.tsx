"use client"

import { useEffect, useRef, useState } from "react"

export default function MapSection() {
  const sectionRef = useRef(null)
  const [activeLocation, setActiveLocation] = useState(0)

  const locations = [
    {
      name: "Kopar Khairane",
      address: "Visit our welcoming clinic located in the heart of the community. We're easy to find and accessible by public transportation.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.2999847208716!2d73.00938492013042!3d19.094491319584954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c17adc478d39%3A0x63463bfe0b04e357!2sChild%20World!5e0!3m2!1sen!2sin!4v1762788907696!5m2!1sen!2sin"
    },
    {
      name: "Badlapur",
      address: "Visit our welcoming clinic located in the heart of the community. We're easy to find and accessible by public transportation.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5425552172164!2d73.2350732!3d19.171491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7939f3b2a6a11%3A0x4159daa23e9befc9!2sMurlidhar%20Plaza!5e0!3m2!1sen!2sin!4v1763556258282!5m2!1sen!2sin"
    },
    {
      name: "Kamothe",
      address: "Visit our welcoming clinic located in the heart of the community. We're easy to find and accessible by public transportation.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.100573471728!2d73.09557099999999!3d19.015289400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9d316a07205%3A0x39cd4feda9b28de0!2sSai%20SuperSpeciality%20Clinic!5e0!3m2!1sen!2sin!4v1763555784439!5m2!1sen!2sin"
    },
    {
      name: "Nerul",
      address: "Visit our welcoming clinic located in the heart of the community. We're easy to find and accessible by public transportation.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.719723256144!2d73.0121327!3d19.032068199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c34f8ba11883%3A0x69a208a5b577d6a9!2sLittle%20Millennium%20Preschool%20-%20Navi%20Mumbai%2C%20Nerul%20West!5e0!3m2!1sen!2sin!4v1763555954117!5m2!1sen!2sin"

    },
    
  ]

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
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-medium text-primary mb-3">Our Locations</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Find Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {locations.map((loc, index) => (
              <button
                key={index}
                onClick={() => setActiveLocation(index)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 w-40 ${activeLocation === index
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "bg-background border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
              >
                {loc.name}
              </button>
            ))}
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed min-h-[3.5rem] transition-opacity duration-300">
            {locations[activeLocation].address}
          </p>
        </div>

        {/* Map Container */}
        <div className="map-container rounded-2xl overflow-hidden border border-border shadow-lg h-96 md:h-[500px] relative">
          <iframe
            key={activeLocation} // Force re-render on location change
            src={locations[activeLocation].mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${locations[activeLocation].name} Location`}
            className="transition-opacity duration-500 opacity-0 animate-in fade-in fill-mode-forwards"
            onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
          ></iframe>
        </div>

      </div>
    </section>
  )
}
