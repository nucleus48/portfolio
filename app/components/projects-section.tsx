import { Apple, Globe, Play } from "lucide-react";

const projects = [
  {
    title: "Lumina AI",
    description: "Advanced AI-driven content generation and insights platform.",
    links: {
      web: "https://lumina.ai",
    },
    color: "bg-blue-500/10",
  },
  {
    title: "Syncro",
    description:
      "Real-time collaboration tool for distributed engineering teams.",
    links: {
      appStore: "https://apple.com",
      playStore: "https://google.com",
    },
    color: "bg-purple-500/10",
  },
  {
    title: "Pulse Health",
    description: "Holistic wellness tracker with personalized health metrics.",
    links: {
      appStore: "https://apple.com",
    },
    color: "bg-emerald-500/10",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-8">
      <h2>PROJECTS & PRODUCTS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  links: {
    web?: string;
    appStore?: string;
    playStore?: string;
  };
  color: string;
}

function ProjectCard({ title, description, links, color }: ProjectCardProps) {
  return (
    <div className="group/project flex flex-col gap-4">
      {/* Placeholder Image */}
      <div
        className={`w-full aspect-video rounded-xl ${color} border border-border flex items-center justify-center overflow-hidden relative group-hover/project:border-primary/50 transition-colors`}
      >
        <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-50" />
        <Globe className="size-8 text-muted-foreground/20" />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-xl">{title}</h3>
          <div className="flex gap-2">
            {links.web && (
              <a
                href={links.web}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="View Web App"
              >
                <Globe className="size-4" />
              </a>
            )}
            {links.appStore && (
              <a
                href={links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Download on App Store"
              >
                <Apple className="size-4" />
              </a>
            )}
            {links.playStore && (
              <a
                href={links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Get it on Play Store"
              >
                <Play className="size-4" />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
