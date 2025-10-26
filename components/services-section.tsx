import { Card, CardContent } from "@/components/ui/card";
import { Palette, Code, Smartphone, Zap, Users, Trophy } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating intuitive and visually appealing user interfaces with a focus on user experience and modern design principles.",
      color: "from-blue-500 to-purple-600",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Building responsive and high-performance web applications using cutting-edge technologies and best practices.",
      color: "from-green-500 to-teal-600",
      features: [
        "React/Next.js",
        "TypeScript",
        "API Integration",
        "Performance Optimization",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Developing cross-platform mobile applications that provide seamless user experiences across all devices.",
      color: "from-orange-500 to-red-600",
      features: ["React Native", "Flutter", "PWA", "App Store Deployment"],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimizing web applications for speed, accessibility, and search engine rankings to maximize user engagement.",
      color: "from-yellow-500 to-orange-600",
      features: [
        "Core Web Vitals",
        "SEO",
        "Accessibility",
        "Speed Optimization",
      ],
    },
    {
      icon: Users,
      title: "Consultation",
      description:
        "Providing expert guidance on technology choices, architecture decisions, and development best practices.",
      color: "from-purple-500 to-pink-600",
      features: [
        "Tech Stack Selection",
        "Architecture Planning",
        "Code Review",
        "Best Practices",
      ],
    },
    {
      icon: Trophy,
      title: "Project Management",
      description:
        "Leading development teams and managing projects from conception to deployment with agile methodologies.",
      color: "from-indigo-500 to-blue-600",
      features: [
        "Agile/Scrum",
        "Team Leadership",
        "Quality Assurance",
        "Deployment",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-10 lg:py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/8 to-secondary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-secondary/8 to-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-accent/5 to-primary/3 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/15 to-secondary/15 text-primary rounded-full text-sm font-semibold mb-6 border border-primary/20 backdrop-blur-sm">
            What I Offer
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-8 text-foreground tracking-tight">
            My Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Comprehensive web development services to bring your ideas to life
            with cutting-edge technology and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group shadow-2xl -translate-y-4 lg:shadow-lg lg:translate-y-0 lg:hover:shadow-2xl transition-all duration-700 lg:hover:-translate-y-4 border-0 bg-card/60 backdrop-blur-sm relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-8 lg:opacity-0 lg:group-hover:opacity-8 transition-opacity duration-700`}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700"></div>

              <CardContent className="p-10 text-center relative z-10">
                <div className="mb-8">
                  <div
                    className={`w-24 h-24 mx-auto bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center scale-110 lg:scale-100 lg:group-hover:scale-110 transition-all duration-500 shadow-xl shadow-black/10 shadow-2xl lg:shadow-xl lg:group-hover:shadow-2xl`}
                  >
                    <service.icon className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-primary lg:text-foreground lg:group-hover:text-primary transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {service.description}
                </p>

                <div className="space-y-2 opacity-100 translate-y-0 lg:opacity-100 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center justify-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
