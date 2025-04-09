"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/section-header"
import { ContactInfoItem } from "@/components/contact/contact-info-item"
import { ContactForm } from "@/components/contact/contact-form"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Get In Touch"
          description="Have a project in mind or want to collaborate? Feel free to reach out."
        />

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <ContactInfoItem icon={Mail} title="Email">
              <a href="mailto:desh.aseem@gmail.com" className="text-black/70 hover:text-[#ede8d0] transition-colors">
                desh.aseem@gmail.com
              </a>
            </ContactInfoItem>

            <ContactInfoItem icon={MapPin} title="Location">
              <p className="text-black/70">Boston, Massachusetts</p>
            </ContactInfoItem>

            <ContactInfoItem icon={Phone} title="Phone">
              <a href="tel:8576939780" className="text-black/70 hover:text-[#ede8d0] transition-colors">
                857-693-9780
              </a>
            </ContactInfoItem>

            <div className="pt-4">
              <p className="text-black/70">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
            </div>
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
