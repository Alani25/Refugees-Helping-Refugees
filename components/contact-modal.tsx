"use client"

import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import Link from "next/link"

interface ContactModalProps {
  children: React.ReactNode
}

export function ContactModal({ children }: ContactModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <Link href="tel:+15855637747" className="text-foreground hover:text-primary transition-colors">
                (585) 563-7747
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <Link href="mailto:rhr@rhrroc.org" className="text-foreground hover:text-primary transition-colors">
                rhr@rhrroc.org
              </Link>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <Link
                href="https://maps.google.com/?q=228+South+Plymouth+Rochester+NY+14608"
                target="_blank"
                className="text-foreground hover:text-primary transition-colors"
              >
                228 South Plymouth
                <br />
                Rochester, NY 14608
              </Link>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="space-y-3">
              <Link
                href="https://www.facebook.com/RefugeesHelpingRefugees/"
                target="_blank"
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                <Facebook size={20} />
                <span>@RefugeesHelpingRefugees</span>
              </Link>
              <Link
                href="https://www.instagram.com/refugeeshelpingrefugees/"
                target="_blank"
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                <Instagram size={20} />
                <span>@refugeeshelpingrefugees</span>
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
