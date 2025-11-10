"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function BookSession() {
  const sectionRef = useRef(null)
  const [activeTab, setActiveTab] = useState<'children' | 'adults'>('children')
  const [formData, setFormData] = useState({
    childName: "",
    parentName: "", // Serves as "Full Name" for adults
    email: "",
    phone: "",
    serviceType: "individual-therapy",
    preferredDate: "",
    notes: ""
  })

  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && sectionRef.current) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      gsap.from(".form-container", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
      })
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        childName: "",
        parentName: "",
        email: "",
        phone: "",
        serviceType: "individual-therapy",
        preferredDate: "",
        notes: "",
      })
    }, 3000)
  }

  return (
    <section
      id="book-appointment"
      className="py-20 md:py-32 bg-gradient-to-br from-primary/8 via-background to-accent/8 relative overflow-hidden"
      ref={sectionRef}
    >
      <div
        className="absolute top-20 left-20 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "0.3s" }}
      ></div>
      <div
        className="absolute bottom-40 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.4s" }}
      ></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-medium text-primary mb-3">Schedule a Visit</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Book an Appointment</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Schedule a consultation with one of our experienced therapists. We'll work with you to find the perfect
            path forward.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-muted p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('children')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'children'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground/80'
              }`}
            >
              For Children
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

        {/* Form */}
        <div className="form-container bg-card border border-border rounded-2xl p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-12 animate-scale-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="text-muted-foreground">
                We've received your booking request. Our team will contact you shortly to confirm your appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Child and Parent Info */}
              <div className="grid md:grid-cols-2 gap-6">
                {activeTab === 'children' && (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Child's Name *</label>
                    <input
                      type="text"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      required={activeTab === 'children'}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Enter child's name"
                    />
                  </div>
                )}
                <div className={activeTab === 'adults' ? 'md:col-span-2' : ''}>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {activeTab === 'children' ? "Parent/Guardian Name *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder={activeTab === 'children' ? "Enter parent/guardian name" : "Enter your full name"}
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="childworldcdc@gmail.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="+91 77092 64029"
                  />
                </div>
              </div>

              {activeTab === 'adults' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Service Type *</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    >
                      <option value="individual-therapy">Individual Therapy</option>
                      <option value="couples-therapy">Couples Therapy</option>
                      <option value="family-therapy">Family Therapy</option>
                      <option value="group-therapy">Group Therapy</option>
                      <option value="relationship-counseling">Relationship Counseling</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Date - Only for Adults tab */}
              {activeTab === 'adults' && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Preferred Date *</label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
              )}

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
                  placeholder="Tell us about your concerns or any specific needs..."
                />
              </div>

              {activeTab === 'children' && (
                <div className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg border border-border">
                  <p>Note: The specific service type for your child will be determined after an initial evaluation during the first appointment.</p>
                </div>
              )}

              <div className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg border border-border">
                <p>Our representative will contact you via WhatsApp on the provided number to confirm your appointment, discuss available time slots, and address any additional details.</p>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                {activeTab === 'children' ? 'Book Session' : 'Book Session'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
