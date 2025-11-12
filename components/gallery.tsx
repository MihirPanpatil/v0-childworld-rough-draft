"use client"

import { useEffect, useRef } from "react"

export default function Gallery() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && sectionRef.current) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      gsap.from(".gallery-col", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none none",
        },
      })
    }
  }, [])

  // We define 3 heights to create the masonry effect:
  // Short: h-64 (256px)
  // Medium: h-80 (320px)
  // Tall: h-96 (384px)
  // Each column MUST have exactly one Short, one Medium, and one Tall image to align perfectly at the bottom.

  const columns = [
    // Column 1
    [
      { src: "/5.jpeg", height: "h-64 md:h-96" }, // Tall on md+
      { src: "/1.jpeg", height: "h-64" },        // Short
      { src: "/21.avif", height: "h-80" },        // Medium
    ],
    // Column 2
    [
      { src: "/6.jpeg", height: "h-80" },        // Medium
      { src: "/2.jpeg", height: "h-64 md:h-96" }, // Tall on md+
      { src: "/10.jpeg", height: "h-64" },       // Short
    ],
    // Column 3
    [
      { src: "/3.jpeg", height: "h-64" },        // Short
      { src: "/23.avif", height: "h-80" },        // Medium
      { src: "/22.avif", height: "h-64 md:h-96" }, // Tall on md+
    ],
    // Column 4
    [
      { src: "/24.jpeg", height: "h-64 md:h-96" }, // Tall on md+
      { src: "/4.jpeg", height: "h-80" },        // Medium
      { src: "/12.jpg", height: "h-64" },        // Short
    ],
  ]

  return (
    <section
      id="gallery"
      className="py-20 md:py-32 bg-background relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Elements */}
      <div
        className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "0.2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-3">Our Gallery</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Moments of Joy</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Step into our world of learning and growth through these captured moments. Each image tells a story of progress, joy, and the special connections formed during our daily activities and therapy sessions. 
          </p>
        </div>

        {/* Masonry Gallery with aligned bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="gallery-col flex flex-col gap-4">
              {column.map((item, imgIndex) => (
                <div key={imgIndex} className={`relative group overflow-hidden rounded-2xl ${item.height} w-full`}>
                  <img
                    className="w-full h-full object-cover"
                    src={item.src}
                    alt={`Gallery moment ${colIndex * 3 + imgIndex + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
