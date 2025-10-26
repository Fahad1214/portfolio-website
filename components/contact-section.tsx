"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Send,
  Calendar,
  MessageCircle,
  Clock,
  Globe,
  Linkedin,
  Github,
} from "lucide-react";
import { ContactModal } from "./contact-modal";

export function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "fali08822@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=fali08822@gmail.com",
      description:
        "Drop me a line anytime — whether you’d like to collaborate, discuss a project, or just say hi. I’m always open to new ideas, opportunities, and conversations.",
      color: "from-blue-500 to-cyan-500",
      availability: "24/7",
    }
    // {
    //   icon: Linkedin,
    //   title: "LinkedIn",
    //   value: "Connect with me",
    //   href: "https://www.linkedin.com/in/786-ameer-hamza/",
    //   description: "Let's connect professionally",
    //   color: "from-blue-600 to-blue-700",
    //   availability: "Professional network",
    // },
    // {
    //   icon: Github,
    //   title: "GitHub",
    //   value: "View my code",
    //   href: "https://github.com/AHamza786/",
    //   description: "Check out my projects",
    //   color: "from-gray-700 to-gray-900",
    //   availability: "Open source",
    // },
  ];


  return (
    <section id="contact" className="py-10 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/8 to-secondary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-secondary/8 to-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/15 to-secondary/15 text-primary rounded-full text-sm font-semibold mb-6 border border-primary/20 backdrop-blur-sm">
            Get In Touch
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-8 text-foreground tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-1 gap-10 mb-20">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group text-center shadow-2xl -translate-y-4 lg:shadow-lg lg:translate-y-0 lg:hover:shadow-2xl transition-all duration-700 lg:hover:-translate-y-4 border-0 bg-card/60 backdrop-blur-sm relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-8 lg:opacity-0 lg:group-hover:opacity-8 transition-opacity duration-700`}
                ></div>

                <CardContent className="p-10 relative z-10">
                  <div
                    className={`w-20 h-20 mx-auto mb-8 bg-gradient-to-br ${info.color} rounded-3xl flex items-center justify-center scale-110 lg:scale-100 lg:group-hover:scale-110 transition-transform duration-500 shadow-xl`}
                  >
                    <info.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-primary lg:text-foreground lg:group-hover:text-primary transition-colors duration-500">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-lg">
                    {info.description}
                  </p>
                  <a
                    href={info.href}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-semibold text-lg block mb-4"
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {info.value}
                  </a>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {info.availability}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
            {quickActions.map((action, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-card/60 backdrop-blur-sm cursor-pointer relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-8 transition-opacity duration-700`}
                ></div>

                <CardContent className="p-8 flex items-center relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${action.color} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                  >
                    <action.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-500 mb-2">
                      {action.title}
                    </h4>
                    <p className="text-muted-foreground text-lg">{action.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    {action.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div> */}

          <div className="text-center">
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl shadow-primary/25 px-12 py-6 text-xl font-semibold cursor-pointer"
            >
              <span className="relative z-10 flex items-center">
                <Send className="mr-4 h-7 w-7 transition-transform group-hover:scale-110" />
                Start a Conversation
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
            <p className="text-muted-foreground mt-6 text-lg flex items-center justify-center">
              <Globe className="w-5 h-5 mr-2" />
              Usually responds within 24 hours
            </p>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
