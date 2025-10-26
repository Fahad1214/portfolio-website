"use client";

import type React from "react";

import { useState } from "react";
import { NewDesignProjectSlice } from "@/lib/portfolio-data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Palette,
  Figma,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export function DesignProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const projects = NewDesignProjectSlice.items;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartX = e.touches[0].clientX;

    const handleTouchEnd = (endEvent: TouchEvent) => {
      const touchEndX = endEvent.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }

      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <section
      id="design-projects"
      className="py-10 lg:py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Design Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Creative design solutions crafted in Figma - from UI/UX concepts to
            complete brand experiences.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Project Tabs - Vertical */}
            <div className="lg:col-span-1">
              <div className="space-y-2 lg:sticky lg:top-24">
                {projects.map((project, index) => (
                  <Button
                    key={index}
                    variant={activeProject === index ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveProject(index)}
                    className={`w-full cursor-pointer justify-start text-left transition-all duration-300 ${
                      activeProject === index
                        ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                        : "hover:bg-primary/10"
                    }`}
                  >
                    {project.tab_title.text}
                  </Button>
                ))}
              </div>
            </div>

            {/* Active Project Display */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Project Image */}
                <div>
                  <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm py-0">
                    <div className="relative group">
                      <Image
                        src={
                          projects[activeProject].cell_image ||
                          "/placeholder.svg"
                        }
                        alt={projects[activeProject].cell_title.text}
                        width={500}
                        height={350}
                        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </Card>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                        <Palette size={24} className="text-primary" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        <Figma size={12} />
                        Design Project
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground">
                      {projects[activeProject].cell_title.text}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
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
                        View Design
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="relative">
              {/* Slider Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  onTouchStart={handleTouchStart}
                >
                  {projects.map((project, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm pt-0">
                        {/* Image Section */}
                        <div className="relative group">
                          <Image
                            src={project.cell_image || "/placeholder.svg"}
                            alt={project.cell_title.text}
                            width={500}
                            height={300}
                            className="w-full h-48 sm:h-64 object-cover"
                          />
                        </div>

                        {/* Content Section - Now below image instead of overlay */}
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                              <Palette size={20} className="text-primary" />
                            </div>
                            <Badge
                              variant="secondary"
                              className="flex items-center gap-1"
                            >
                              <Figma size={12} />
                              Design Project
                            </Badge>
                          </div>

                          <h3 className="text-xl font-bold mb-2 text-foreground">
                            {project.cell_title.text}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {project.cell_description.text}
                          </p>

                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300"
                            asChild
                          >
                            <a
                              href={project.project_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              View Design
                              <ExternalLink size={14} />
                            </a>
                          </Button>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90"
                onClick={prevSlide}
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90"
                onClick={nextSlide}
                disabled={currentSlide === projects.length - 1}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Dot Indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
