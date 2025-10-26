"use client"

import { reviewData } from "@/lib/portfolio-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, MapPin } from "lucide-react"

export function ReviewsSection() {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const emptyStars = 5 - Math.ceil(rating)

    return (
      <div className="flex items-center gap-1">
        {/* Full stars */}
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
        {/* Half star */}
        {hasHalfStar && <Star size={16} className="fill-yellow-400/50 text-yellow-400" />}
        {/* Empty stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i} size={16} className="text-gray-300" />
        ))}
        <span className="ml-2 text-sm font-medium text-muted-foreground">({rating})</span>
      </div>
    )
  }

  const firstRow = reviewData.slice(0, Math.ceil(reviewData.length / 2))
  const secondRow = reviewData.slice(Math.ceil(reviewData.length / 2))

  return (
    <section
      id="reviews"
      className="py-10 lg:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Client Reviews
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            What my clients say about working with me. Real feedback from real projects across the globe.
          </p>
        </div>

        <div className="relative">
          {/* First row - scrolling left to right */}
          <div className="flex animate-marquee gap-6 mb-6">
            {[...firstRow, ...firstRow].map((review, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm hover:-translate-y-2 flex-shrink-0 w-80"
              >
                <CardContent className="p-6 space-y-4">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start">
                    <Quote
                      size={24}
                      className="text-primary/60 group-hover:text-primary transition-colors duration-300"
                    />
                    {renderStars(review.rating)}
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground leading-relaxed text-sm line-clamp-4 group-hover:text-foreground transition-colors duration-300">
                    "{review.review}"
                  </p>

                  {/* Client Info */}
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {review.clientName}
                        </h4>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin size={12} className="text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{review.countryname}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Verified Client
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Second row - scrolling right to left */}
          <div className="flex animate-marquee-reverse gap-6">
            {[...secondRow, ...secondRow].map((review, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm hover:-translate-y-2 flex-shrink-0 w-80"
              >
                <CardContent className="p-6 space-y-4">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start">
                    <Quote
                      size={24}
                      className="text-primary/60 group-hover:text-primary transition-colors duration-300"
                    />
                    {renderStars(review.rating)}
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground leading-relaxed text-sm line-clamp-4 group-hover:text-foreground transition-colors duration-300">
                    "{review.review}"
                  </p>

                  {/* Client Info */}
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {review.clientName}
                        </h4>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin size={12} className="text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{review.countryname}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Verified Client
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{reviewData.length}+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {(reviewData.reduce((acc, review) => acc + review.rating, 0) / reviewData.length).toFixed(1)}
            </div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {reviewData.filter((review) => review.rating === 5).length}
            </div>
            <div className="text-sm text-muted-foreground">5-Star Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {new Set(reviewData.map((review) => review.countryname)).size}
            </div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
        </div>
      </div>
    </section>
  )
}
