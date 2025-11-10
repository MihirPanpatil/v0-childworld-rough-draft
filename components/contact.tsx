"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react"

export default function Contact() {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && sectionRef.current) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      gsap.from(".contact-card", {
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

      gsap.from(".contact-form", {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden"
      ref={sectionRef}
    >
      <div
        className="absolute top-40 left-20 w-28 h-28 bg-accent/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-20 right-20 w-36 h-36 bg-primary/8 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have questions? We'd love to hear from you. Contact us today and let's discuss how we can help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="contact-card bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground mb-2">+91 77092 64029</p>
            <p className="text-sm text-muted-foreground">Available during business hours</p>
          </div>

          <div className="contact-card bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground mb-2">childworldcdc@gmail.com</p>
            <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
          </div>

          <div className="contact-card bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Hours</h3>
            <p className="text-muted-foreground mb-1">Mon - Sat: 9am - 9pm</p>
            
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="contact-form bg-card border border-border rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-12 animate-scale-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Address Info */}
          <div className="space-y-6">
            <div className="contact-card bg-card border border-border rounded-2xl p-8">
              <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Visit Us</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Childworld Mental Health Clinic
                <br />
                123 Wellness Avenue
                <br />
                Healing City, HC 12345
                <br />
                United States
              </p>
              <p className="text-sm text-muted-foreground">
                Located in a welcoming, child-friendly facility designed to make every visit comfortable and safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
