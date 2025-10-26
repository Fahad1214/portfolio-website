import { Github, Linkedin, Twitter, Heart, Mail, MessageCircle, Code, Coffee } from "lucide-react";

export function Footer() {
  const socialLinks = [
     {
      icon:Mail ,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=fali08822@gmail.com",
      label: "Email",
      color: "hover:text-blue-600",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/923214860814",
      label: "WhatsApp",
      color: "hover:text-green-500",
    },
    
    // { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
  ];

  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    // { label: "Experience", href: "#experience" },
    // { label: "Reviews", href: "#reviews" },
    // { label: "Blog", href: "#blog" },
    // { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-t from-card/80 to-background border-t border-border/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
             Fahad Ali
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Full Stack Developer crafting exceptional web experiences with
              modern technologies and creative solutions.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Code className="w-4 h-4 mr-2" />
              Built with Next.js & Tailwind CSS
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">
              Quick Links
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`text-muted-foreground transition-all duration-300 transform hover:scale-110 ${link.color}`}
                >
                  <link.icon className="h-7 w-7" />
                </a>
              ))}
            </div>
            <div className="text-muted-foreground">
              <p className="text-lg">fali08822@gmail.com</p>
              <p className="text-sm mt-2">Remote, Worldwide</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-lg flex items-center">
              © 2025 Fahad Ali. 
              {/* Made with */}
              {/* <Heart className="w-5 h-5 mx-2 text-red-500 animate-pulse" />
              and
              <Coffee className="w-5 h-5 ml-2 text-amber-600" /> */}
            </p>
            {/* <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
