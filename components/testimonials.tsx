"use client"

import { useEffect, useRef } from "react"
import { Star } from "lucide-react"

export default function Testimonials() {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && sectionRef.current) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      gsap.from(".testimonial-card", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      })

      gsap.from(".stat-number", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center center",
          toggleActions: "play none none none",
        },
      })
    }
  }, [])

  const testimonials = [
    {
      name: "Sarah's Parent",
      relation: "Parent",
      content:
        "Dr. Vijay Sonawane is an exceptional developmental pediatrician who is truly dedicated to helping children and their families. We have been working with him at CHILD WORLD CDC, part of Sai Superspeciality Clinic in Kamothe, for the past four to five months. During this time, we have seen remarkable and positive changes in our child's development.",
      rating: 5,
    },
    {
      name: "Marcus, Age 14",
      relation: "Patient",
      content:
        "My son, Trikay, was struggling with eye contact, recognizing his name,smile back issues. We went to see Dr. Vijay Sonawane, a kids' doctor and development specialist at the CHILDWORLD CDC at Sai Superspeciality Clinic in Kamothe. Following Dr. Sonawane's advice for a few months, Trikay has improved a lot! I'd totally suggest this place to other parents dealing with similar kid development problems.",
      rating: 5,
    },
    {
      name: "Jennifer's Family",
      relation: "Parent",
      content:
        "I am very very very happy, my daughter has shown a lot of progress. I tried at many places but did not get any result, but here in just 2 months I got to see a lot of progress. My daughter's speech has improved significantly. This is the best child development center for me. Thank you.",
      rating: 5,
    },
    {
      name: "David, Age 11",
      relation: "Patient",
      content:
        "I am very very very happy, my daughter has shown a lot of progress. I tried at many places but did not get any result, but here in just 2 months I got to see a lot of progress. My daughter's speech has improved significantly. This is the best child development center for me. Thank you.",
      rating: 5,
    },
    {
      name: "Robert & Michelle",
      relation: "Parents",
      content:
        "Working at Child World, Koparkhairane has been an incredibly rewarding experience. The team is supportive, collaborative, and deeply committed to helping neurodiverse children and families. It's amazing to see the positive impact of the work the team puts in every single day. It truly feels good to be part of a place that is able to make such a difference in children’s lives!",
      rating: 5,
    },
    {
      name: "Emma, Age 13",
      relation: "Patient",
      content:
        "A really great Therapy Experience. Helped me a lot with anxiety and confidence issues. The sessions helped a lot as it allowed me to open up and have a space for myself. Thank you so muchhh. Would recommend for adult counseling for sure!!",
      rating: 5,
    },
  ]

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
      ref={sectionRef}
    >
      <div
        className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="absolute bottom-40 right-20 w-40 h-40 bg-primary/8 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.3s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/3 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "0.8s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-3">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">What Families Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from families whose lives have been transformed through our compassionate care and professional
            support.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-4 italic">"{testimonial.content}"</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
