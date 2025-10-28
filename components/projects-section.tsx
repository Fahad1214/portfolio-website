import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Star,
  Users,
  ArrowRight,
  Calendar,
} from "lucide-react";

export function ProjectsSection() {
  const projects = [
    // {
    //   title: "Manhattan Football Club",
    //   description:
    //     "A comprehensive platform for the Manhattan Football Club that connects football enthusiasts in New York. Features include team management, game scheduling, and community interaction.",
    //   image: "/ProjectsThumbnail/menhaton.jpeg?height=300&width=500",
    //   technologies: ["React Native", "TypeScript", "Tailwind CSS", "IOS App"],
    //   liveUrl:
    //     "https://apps.apple.com/sa/app/manhattan-football-club/id6449838507",
    //   githubUrl: "#",
    //   featured: true,
    //   stats: { stars: 124, users: "2.5k" },
    //   year: "2024",
    //   category: "Mobile Application",
    // },
    // {
    //   title: "ScanID365",
    //   description:
    //     "ScanID365 is an advanced digital identity verification platform that enables businesses to verify customer identities securely and efficiently. As Front-End Developer, I built a modern, responsive, and intuitive interface for scanning IDs, capturing user data, and integrating with backend verification APIs. The focus was on speed, accuracy, user experience, and compliance with KYC/AML standards.",
    //     image: "/ProjectsThumbnail/scanID.png?height=300&width=500",
    //   technologies: ["React.js", "Express.js", "Material UI", "TypeScript", "API Integration"],
    //   liveUrl: "https://scanid365.com/",
    //   githubUrl: "#",
    //   featured: true,
    //   stats: { stars: 0, users: "Enterprise Clients" },
    //   year: "2024-2025",
    //   category: "Identity / Verification"
    // },
    {
      title: "Innerwell Therapy Platform",
      description:
        "Innerwell offers at-home psychedelic therapy and mental health services across multiple U.S. states. As Front-End Developer, I worked on creating a clean, responsive, user-friendly website UI that helps users explore services, take assessments, book consultations and navigate a wide range of therapy and psychiatric modalities. Focus was on accessibility, performance and seamless experience across devices.",
      image: "/ProjectsThumbnail/innerwell.jpeg?height=300&width=500",
      technologies: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Responsive Design",
        "Accessibility",
      ],
      liveUrl: "https://helloinnerwell.com/",
      githubUrl: "#",
      featured: true,
      stats: { stars: 0, users: "Unknown" },
      year: "2023-2024",
      category: "Health / Wellness",
    },

    {
      title: "Encord",
      description:
        "Encord is an advanced data management platform designed to streamline the training and deployment of machine learning models for computer vision. As a Front-End Developer, I contributed to creating an intuitive user interface that enhances data annotation and analysis processes. Utilizing modern technologies, I focused on delivering a seamless user experience, enabling teams to efficiently manage their data and improve the accuracy of their models.",
      image: "/ProjectsThumbnail/encord.jpeg?height=300&width=500",
      technologies: ["React", "Firebase", "Tailwind CSS", "Prismic", "GraphQL"],
      liveUrl: "https://encord.com/",
      githubUrl: "#",
      featured: true,
      stats: { stars: 156, users: "3.2k" },
      year: "2025",
      category: "SAAS Website",
    },
    // {
    //   title: "AI Powered Trialtrackpro",
    //   description:
    //     "Trial Track Pro is a clinical trial management platform where I developed a feature allowing users to upload CSV or XLSX files, displaying locations on a dynamic world map. The map allows users to slide between locations and view previous or next entries. I integrated authentication for secure access, using MongoDB, Nest.js, React.js, Tailwind CSS, and AWS Bucket for seamless functionality and data management",
    //   image: "/ProjectsThumbnail/trialtrackpro.png?height=300&width=500",
    //   technologies: [
    //     "React.js",
    //     "Tailwind CSS",
    //     "Open AI",
    //     "File Handling",
    //     "AWS",
    //   ],
    //   liveUrl: "https://www.trialtrackpro.com/",
    //   githubUrl: "#",
    //   featured: true,
    //   stats: { stars: 203, users: "4.1k" },
    //   year: "2025",
    //   category: "AI/ML",
    // },
    // {
    //   title: "Swift Services",
    //   description:
    //     "I developed the SwiftServices website with a modern, user-friendly interface, seamlessly highlighting its core services: Travel and Cargo, Property Services, Private Hire, and IT Services.",
    //   image: "/DesignProjectThumbnail/swiftservices.png?height=300&width=500",
    //   technologies: ["React.js", "Nest.js", "MongoDB", "Stripe", "Prismic"],
    //   liveUrl: "https://www.swiftservices.uk/",
    //   githubUrl: "#",
    //   featured: true,
    //   stats: { stars: 89, users: "1.8k" },
    //   year: "2024",
    //   category: "Web Application",
    // },
    // {
    //   title: "Aphmeow",
    //   description:
    //     "APH Meow is a dedicated online platform designed for cat enthusiasts, providing a range of resources, products, and community engagement opportunities. As a Front-End Developer, I played a key role in building a responsive and visually appealing website that enhances user experience. Leveraging modern web technologies, I focused on creating an intuitive navigation system and engaging content that connects cat lovers with essential information and products for their furry companions.",
    //   image: "/ProjectsThumbnail/catface.jpeg?height=300&width=500",
    //   technologies: [
    //     "React.js",
    //     "Shopify",
    //     "Tailwind CSS",
    //     "Theme Customization",
    //   ],
    //   liveUrl: "https://www.aphmeow.com/",
    //   githubUrl: "#",
    //   featured: true,
    //   stats: { stars: 178, users: "5.7k" },
    //   year: "2023",
    //   category: "E-Commerce Website",
    // },
    {
      title: "Bipzy Crypto Launcher",
      description:
        "Bipzy is a premier platform for investing in promising projects before they hit the market. As a Front-End Developer, I played a vital role in developing a user-friendly interface that facilitates seamless navigation and investment tracking. Utilizing modern web technologies, I focused on creating an engaging and responsive design that empowers users to discover and invest in the next generation of innovative projects in the cryptocurrency space.",
      image: "/ProjectsThumbnail/bipzy.png?height=300&width=500",
      technologies: ["React.js", "SCSS", "WebSocket", "Wallet Integration"],
      liveUrl: "https://www.bipzy.com/",
      githubUrl: "#",
      featured: true,
      stats: { stars: 92, users: "1.4k" },
      year: "2024",
      category: "FinTech",
    },
    {
      title: "Figur8",
      description:
        "FIGUR8 began as a collaboration between MIT scientists, Massachusetts General Hospital Orthopaedics and the Boston Red Sox, in search of a better way to diagnose and treat injuries.",
      image: "/ProjectsThumbnail/Figur8.png?height=300&width=500",
      technologies: ["Next.js", "SCSS", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://www.figur8tech.com/",
      githubUrl: "#",
      featured: true,
      stats: { stars: 92, users: "1.4k" },
      year: "2025",
      category: "HealthTech / Biomechanics",
    },
    {
      title: "HLYX",
      description:
        "HLYX is a versatile platform for relationship-management, business networking and marketing — built for entrepreneurs, leaders and creators navigating the new economy. It centralises your connections, provides multi-profile branding, community tools and analytics to help you grow your network and business. “We’ve redesigned business networking technology to be versatile, useful, and effective.”",
      image: "https://hlyx.io/images/Group-1171279689.png",
      technologies: ["React.js", "SCSS", "WebSocket", "Wallet Integration"], // <-- you’ll want to replace this with the actual stack if you know it
      liveUrl: "https://hlyx.io/",
      githubUrl: "#",
      featured: true,
      stats: { stars: 92, users: "1.4k" },
      year: "2024",
      category: "Business networking / Brand promoter",
    },
  ];

  return (
    <section
      id="projects"
      className="py-10 lg:py-20 bg-gradient-to-b from-muted/20 via-background to-muted/20 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary/8 to-secondary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-secondary/8 to-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/15 to-secondary/15 text-primary rounded-full text-sm font-semibold mb-6 border border-primary/20 backdrop-blur-sm">
            My Work
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-8 text-foreground tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Explore some of my recent work that showcases expertise in modern
            web development and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group pt-0 overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-0 bg-card/60 backdrop-blur-sm relative ${
                project.featured
                  ? "ring-2 ring-primary/30 shadow-lg shadow-primary/10"
                  : ""
              }`}
            >
              {project.featured && (
                <div className="absolute top-6 left-6 z-20 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
                  Featured
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full ${
                    project.title == "Figur8"
                      ? "object-scale-down"
                      : "object-cover"
                  } h-64 transition-transform duration-700  group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center space-x-6 text-white text-sm">
                    <div className="flex items-center bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 mr-1" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Users className="w-4 h-4 mr-1" />
                      {project.stats.users}
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex flex-col items-end space-y-2">
                    <span className="bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                    <span className="bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300 bg-background/80 backdrop-blur-sm border-border/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    size="sm"
                    className="flex-1 cursor-pointer group/btn bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                  {/* <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-background/80 backdrop-blur-sm border-border/50 group/btn"
                  >
                    <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                    Code
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-20">
          <Button
            variant="outline"
            size="lg"
            className="bg-background/60 backdrop-blur-sm border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-500 transform hover:scale-105 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            View All Projects
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div> */}
      </div>
    </section>
  );
}
