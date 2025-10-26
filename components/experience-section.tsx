"use client"

import { ExperienceData } from "@/lib/portfolio-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, MapPin, Calendar } from "lucide-react"
import Image from "next/image"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-10 lg:py-20 bg-gradient-to-br from-background via-background/50 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey through various companies and roles, building expertise in front-end development and
            design.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {ExperienceData.map((experience, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 p-3 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={experience.companyLogo || "/placeholder.svg"}
                        alt={`${experience.company} logo`}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {experience.position}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Building2 size={16} />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar size={14} />
                          <span>{experience.intervel}</span>
                        </div>
                        <Badge variant="secondary" className="w-fit">
                          <MapPin size={12} className="mr-1" />
                          {experience.jobType}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{experience.detail}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
