import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { DevProjectsSection } from "@/components/dev-projects-section";
import { DesignProjectsSection } from "@/components/design-projects-section";
import { ReviewsSection } from "@/components/reviews-section";
import { BlogSection } from "@/components/blog-section";
import { CertificatesSection } from "@/components/certificates-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import GithubCommitChart from "@/components/github-commit-chart";
import VisitorTracker from "@/components/visitor-tracker";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <main className="min-h-screen">
      <SpeedInsights/>
      {/* <VisitorTracker /> */}
      <Header />
      <HeroSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <DevProjectsSection />
      <DesignProjectsSection />
      <ExperienceSection />
      <ReviewsSection />
      <BlogSection />
      <CertificatesSection />
      <GithubCommitChart /> */}
      <ContactSection />
      <Footer />
    </main>
  );
}
