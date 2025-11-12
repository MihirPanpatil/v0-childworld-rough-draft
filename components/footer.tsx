"use client"

import { useEffect, useRef } from "react"
import { Instagram } from "lucide-react"

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.gsap && footerRef.current) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      gsap.registerPlugin(ScrollTrigger)

      gsap.from(".footer-column", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%", // Trigger a bit earlier for compact footer
          toggleActions: "play none none none",
        },
      })
    }
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden" ref={footerRef}>
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -ml-16 -mb-16"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {/* Brand */}
          <div className="footer-column">
            <div className="flex items-center gap-2 mb-3">
              <img 
                src="/logo-removebg-preview.png" 
                alt="Child World Logo" 
                className="h-10 w-auto" 
              />
              <span className="font-extrabold text-xl tracking-tight text-foreground">
                <span className="text-primary">Child</span> World
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-snug">
              Dedicated to nurturing young minds and supporting families through their mental health journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-1.5">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#staff" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Services - Updated with actual services */}
          <div className="footer-column">
            <h3 className="font-semibold text-foreground mb-3">Services</h3>
            <ul className="space-y-1.5">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Behaviour Therapy
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Speech Therapy
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Occupational Therapy
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Child Therapy
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Counseling for Adults
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h3 className="font-semibold text-foreground mb-3">Contact</h3>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="tel:+917709264029"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +91 77092 64029 / +91 77100 58135
                </a>
              </li>
              <li>
                <a
                  href="mailto:childworldcdc@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  childworldcdc@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground text-sm leading-snug mt-2">
                Shop 35, Kalash Udyan,
                <br />
                Sector 11, Kopar Khairane,
                <br />
                Navi Mumbai, 400709
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-muted-foreground text-xs md:text-sm text-center md:text-left">
            &copy; {currentYear} <span className="text-primary">Child</span> <span className="text-accent">World</span> Child Development Center. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:inline">Connect with us on</span>
            <a
              href="https://www.instagram.com/child.world.cdc/"
              className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Legal Links */}
          
        </div>
      </div>
    </footer>
  )
}
