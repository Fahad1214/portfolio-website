"use client";

import { blogData } from "@/lib/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Building2 } from "lucide-react";
import Image from "next/image";

export function BlogSection() {
  return (
    <section
      id="blog"
      className="py-10 lg:py-20 bg-gradient-to-br from-background via-secondary/5 to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sharing knowledge and insights about web development, design trends,
            and the latest technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogData.map((blog) => (
            <Card
              key={blog.id}
              className="group shadow-2xl shadow-primary/10 -translate-y-2 border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-500 lg:shadow-lg lg:shadow-transparent lg:translate-y-0 lg:border-border/50 lg:hover:shadow-2xl lg:hover:shadow-primary/10 lg:hover:border-primary/20 lg:hover:-translate-y-2 pt-0"
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover scale-110 transition-transform duration-500 lg:scale-100 lg:group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100" />
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Blog Meta */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{blog.publishedDate}</span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <Building2 size={12} />
                    {blog.publisher}
                  </Badge>
                </div>

                {/* Blog Title */}
                <h3 className="text-xl font-bold text-primary transition-colors duration-300 line-clamp-2 lg:text-foreground lg:group-hover:text-primary">
                  {blog.title}
                </h3>

                {/* Blog Description */}
                <p className="text-foreground/80 text-sm leading-relaxed line-clamp-3 transition-colors duration-300 lg:text-muted-foreground lg:group-hover:text-foreground/80">
                  {blog.description}
                </p>

                {/* Read More Button */}
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-primary text-primary-foreground border-primary transition-all duration-300 lg:bg-transparent lg:text-foreground lg:border-border lg:group-hover:bg-primary lg:group-hover:text-primary-foreground lg:group-hover:border-primary"
                    asChild
                  >
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Read Article
                      <ExternalLink size={14} />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Want to read more?
              </h3>
              <p className="text-sm text-muted-foreground">
                Follow me for more insights on web development and design.
              </p>
            </div>
            <Button
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/786-ameer-hamza/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow Blog
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
