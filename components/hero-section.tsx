import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  Sparkles,
  Code,
  Palette,
  Zap,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-secondary/12">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/15 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-secondary/15 to-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-accent/8 to-primary/5 rounded-full blur-2xl animate-float"></div>

        <div
          className="absolute top-32 right-32 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <Code className="w-8 h-8 text-primary/30" />
        </div>
        <div
          className="absolute bottom-32 left-32 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <Palette className="w-6 h-6 text-secondary/30" />
        </div>
        <div
          className="absolute top-1/2 right-20 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <Zap className="w-7 h-7 text-accent/30" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12 animate-fade-in-up">
            <div className="relative w-48 h-48 mx-auto mb-10">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent p-1.5  shadow-2xl shadow-primary/20"
                style={{ animationDuration: "4s" }}
              >
                <div className="w-full h-full rounded-full bg-background p-3 shadow-inner">
                  <img
                    src="FahadProfileImage.png"
                    alt="Hamza - Front-End Developer"
                    className="w-full h-full rounded-full object-cover shadow-lg"
                  />
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/15 to-secondary/15 text-primary rounded-full text-sm font-semibold mb-6 animate-pulse border border-primary/20 backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></span>
                Available for new projects
              </span>
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight tracking-tight">
              Hi! I'm Fahad
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-10 tracking-tight">
              Expert Full-Stack Developer
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Crafting Beautiful, Functional Web Experiences with modern
              technologies. I specialize in building responsive, user-centric
              applications that bring your vision to life with precision and
              creativity.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl shadow-primary/25 px-8 py-4 text-lg font-semibold"
            >
              <a href="#projects" className="relative z-10 flex items-center">
                View My Work
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </a>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group bg-background/60 backdrop-blur-sm border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="/FahadAliResume.pdf" download="FahadAliResume.pdf">
                <Download className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-primary/40 rounded-full flex justify-center backdrop-blur-sm bg-background/20">
              <div className="w-1.5 h-4 bg-gradient-to-b from-primary to-secondary rounded-full mt-3 animate-pulse"></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
