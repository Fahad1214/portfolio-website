"use client";

import type React from "react";

import { useState } from "react";
import { NewDevProjectSlice } from "@/lib/portfolio-data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Code,
  Smartphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export function DevProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const projects = NewDevProjectSlice.items;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section
      id="dev-projects"
      className="py-10 lg:py-20 bg-gradient-to-br from-background via-primary/5 to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Development Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing my latest development work - from mobile apps to web
            platforms, built with modern technologies.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Desktop Tabs - Hidden on mobile/tablet */}
          <div className="hidden lg:flex flex-wrap justify-center gap-2 mb-12">
            {projects.map((project, index) => (
              <Button
                key={index}
                variant={activeProject === index ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveProject(index)}
                className={`transition-all duration-300 cursor-pointer ${
                  activeProject === index
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                    : "hover:bg-primary/10 hover:text-secondary"
                }`}
              >
                {project.tab_title.text}
              </Button>
            ))}
          </div>

          <div className="lg:hidden flex items-center justify-between mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full bg-transparent"
            >
              <ChevronLeft size={20} />
            </Button>
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full bg-transparent"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Desktop Active Project Display */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Image */}
            <div className="order-2 lg:order-1">
              <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm pb-0 pt-0">
                <div className="relative group">
                  <Image
                    src={
                      projects[activeProject].cell_image || "/placeholder.svg"
                    }
                    alt={projects[activeProject].cell_title.text}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Card>
            </div>

            {/* Project Details */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                    <Code size={24} className="text-primary" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <Smartphone size={12} />
                    Development Project
                  </Badge>
                </div>

                <h3 className="text-3xl font-bold text-foreground">
                  {projects[activeProject].cell_title.text}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  {projects[activeProject].cell_description.text}
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300"
                  asChild
                >
                  <a
                    href={projects[activeProject].project_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm pt-0">
                      <div className="relative">
                        <Image
                          src={project.cell_image || "/placeholder.svg"}
                          alt={project.cell_title.text}
                          width={600}
                          height={300}
                          className="w-full h-48 sm:h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge
                            variant="secondary"
                            className="flex items-center gap-1"
                          >
                            <Smartphone size={12} />
                            Development Project
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                            <Code size={20} className="text-primary" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground">
                            {project.cell_title.text}
                          </h3>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {project.cell_description.text}
                        </p>

                        <Button
                          className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300"
                          asChild
                        >
                          <a
                            href={project.project_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            View Project
                            <ExternalLink size={16} />
                          </a>
                        </Button>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
