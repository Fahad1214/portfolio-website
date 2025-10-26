"use client";

import { certificateData } from "@/lib/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Award, Download } from "lucide-react";
import Image from "next/image";

export function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="py-10 lg:py-20  bg-gradient-to-br from-primary/5 via-background to-secondary/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional certifications and achievements that validate my
            expertise in web development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificateData.map((certificate, index) => (
            <Card
              key={index}
              className="group shadow-2xl shadow-primary/10 lg:shadow-lg lg:hover:shadow-2xl lg:hover:shadow-primary/10 transition-all duration-500 border-primary/20 lg:border-border/50 lg:hover:border-primary/20 bg-card/50 backdrop-blur-sm -translate-y-2 lg:translate-y-0 lg:hover:-translate-y-2"
            >
              <CardContent className="p-6 space-y-6">
                {/* Certificate Header */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 p-2 scale-110 lg:scale-100 lg:group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={certificate.issuerLogo || "/placeholder.svg"}
                        alt={`${certificate.issuerName} logo`}
                        width={32}
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2 text-xs">
                      <Award size={12} className="mr-1" />
                      Certified
                    </Badge>
                    <h3 className="text-lg font-bold text-primary lg:text-foreground lg:group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {certificate.certName}
                    </h3>
                  </div>
                </div>

                {/* Issuer Information */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">
                      Issued by
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {certificate.issuerName}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">
                      Date
                    </span>
                    <div className="flex items-center gap-1 text-sm text-foreground">
                      <Calendar size={12} />
                      <span>{certificate.publishDate}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-border/50">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-primary text-primary-foreground border-primary lg:bg-transparent lg:text-foreground lg:border-border lg:group-hover:bg-primary lg:group-hover:text-primary-foreground lg:group-hover:border-primary transition-all duration-300 "
                    asChild
                  >
                    <a
                      href={certificate.certLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Download size={14} />
                      View Certificate
                      <ExternalLink size={12} />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap sm:flex-nowrap justify-center sm:justify-start items-center gap-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {certificateData.length}
              </div>
              <div className="text-sm text-muted-foreground">
                Certifications
              </div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {new Set(certificateData.map((cert) => cert.issuerName)).size}
              </div>
              <div className="text-sm text-muted-foreground">Platforms</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">
                Completion Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
