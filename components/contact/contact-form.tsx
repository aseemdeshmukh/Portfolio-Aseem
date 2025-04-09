"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
    }, 1500)
  }

  return (
    <motion.form
      className="space-y-4"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 gap-4">
        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }} whileTap={{ scale: 0.98 }}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border-[#ede8d0]/30 focus-visible:ring-[#ede8d0]"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </motion.div>
        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }} whileTap={{ scale: 0.98 }}>
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border-[#ede8d0]/30 focus-visible:ring-[#ede8d0]"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </motion.div>
        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }} whileTap={{ scale: 0.98 }}>
          <Input
            type="text"
            name="subject"
            placeholder="Subject"
            className="border-[#ede8d0]/30 focus-visible:ring-[#ede8d0]"
            value={formState.subject}
            onChange={handleChange}
            required
          />
        </motion.div>
        <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }} whileTap={{ scale: 0.98 }}>
          <Textarea
            name="message"
            placeholder="Your Message"
            className="min-h-[120px] border-[#ede8d0]/30 focus-visible:ring-[#ede8d0]"
            value={formState.message}
            onChange={handleChange}
            required
          />
        </motion.div>
      </div>
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button type="submit" className="bg-[#ede8d0] hover:bg-[#ede8d0]/90 text-black w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <div className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-4 w-4 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </div>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </motion.div>
    </motion.form>
  )
}
