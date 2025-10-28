import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Wrench,
  BrainCog,
} from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: Code,
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Vue.js",
        "Shopify",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Electron JS"
      ],
      color: "from-blue-500 to-cyan-500",
      level: "Expert",
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "GraphQL",
        "REST APIs",
        "Supabase",
      ],
      color: "from-green-500 to-emerald-500",
      level: "Advanced",
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      skills: [
        "Figma",
        "Adobe XD",
        "Responsive Design",
        "Accessibility",
        "User Research",
        "Prototyping",
      ],
      color: "from-purple-500 to-pink-500",
      level: "Advanced",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        "AWS",
        "Vercel",
        "Docker",
        "Git",
        "GitHub Actions",
        "Netlify",
        "Firebase",
      ],
      color: "from-orange-500 to-red-500",
      level: "Intermediate",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "Expo", "PWA", "Ionic"],
      color: "from-indigo-500 to-purple-500",
      level: "Advanced",
    },
    {
      title: "AI/ML",
      icon: BrainCog,
      skills: ["OpenAI API", "ChatGPT Integration",  "Automation", "N8N", "make.com"],
      color: "from-teal-500 to-blue-500",
      level: "Expert",
    },
  ];

  return (
    <section id="skills" className="py-10 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-primary/6 to-secondary/4 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-secondary/6 to-accent/4 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-accent/4 to-primary/3 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/15 to-secondary/15 text-primary rounded-full text-sm font-semibold mb-6 border border-primary/20 backdrop-blur-sm">
            My Expertise
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-8 text-foreground tracking-tight">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            A comprehensive toolkit of modern technologies and frameworks to
            deliver exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group shadow-2xl lg:shadow-lg lg:hover:shadow-2xl transition-all duration-700 -translate-y-4 lg:translate-y-0 lg:hover:-translate-y-4 border-0 bg-card/60 backdrop-blur-sm relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-8 lg:opacity-0 lg:group-hover:opacity-8 transition-opacity duration-700`}
              ></div>

              <CardContent className="p-10 relative z-10">
                <div className="flex items-center mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mr-6 scale-110 lg:scale-100 lg:group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                  >
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary lg:text-foreground lg:group-hover:text-primary transition-colors duration-500">
                      {category.title}
                    </h3>
                    <span
                      className={`inline-block px-3 py-1 bg-gradient-to-r ${category.color} text-white text-xs font-semibold rounded-full mt-2`}
                    >
                      {category.level}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-gray-600 px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default transform hover:scale-105 bg-background/80 backdrop-blur-sm border border-border/50"
                    >
                      {skill}
                    </Badge>
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
