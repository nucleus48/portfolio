import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    image: "/skeleton-social.png",
    title: "Skeleton Social",
    color: "bg-blue-500/10",
    description:
      "A privacy first social network for sharing honest perspectives and building anonymous communities. Speak your truth, find your tribe, and maintain total privacy.",
    links: {
      web: "https://www.skeleton.social",
      appStore: "https://apps.apple.com/app/apple-store/id6751761306",
      playStore:
        "https://play.google.com/store/apps/details?id=com.skeleton.social",
    },
  },
  {
    image: "/payonus.png",
    title: "PayOnUs",
    description:
      "A global payment infrastructure empowering African businesses to accept payments from anywhere in the world. Seamlessly bridge the gap between local commerce and international markets.",
    color: "bg-purple-500/10",
    links: {
      web: "https://payonus.com",
    },
  },
  {
    image: "/mshell.png",
    title: "Mshel Homes Limited",
    description:
      "A premier real estate development platform dedicated to simplifying home ownership. Delivering innovative housing solutions and investment opportunities that empower individuals to secure their future.",
    color: "bg-emerald-500/10",
    links: {
      web: "https://mshelhomes.com/",
    },
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
  image: string;
  title: string;
  description: string;
  links: {
    web?: string;
    appStore?: string;
    playStore?: string;
  };
  color: string;
}

function ProjectCard({
  title,
  description,
  links,
  color,
  image,
}: ProjectCardProps) {
  return (
    <div className="group/project flex flex-col gap-4">
      <div
        className={`w-full aspect-video rounded-xl ${color} border border-border flex items-center justify-center overflow-hidden relative group-hover/project:border-primary/50 transition-colors`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top w-full h-full"
        />
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-xl">{title}</h3>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="flex gap-2">
          {links.web && (
            <Link
              target="_blank"
              href={links.web}
              title="View Web App"
              rel="noopener noreferrer"
            >
              <Badge variant="secondary" className="text-[10px] px-2 py-0">
                Web
              </Badge>
            </Link>
          )}
          {links.appStore && (
            <Link
              target="_blank"
              href={links.appStore}
              rel="noopener noreferrer"
              title="Download on App Store"
            >
              <Badge variant="secondary" className="text-[10px] px-2 py-0">
                App Store
              </Badge>
            </Link>
          )}
          {links.playStore && (
            <Link
              target="_blank"
              href={links.playStore}
              rel="noopener noreferrer"
              title="Get it on Play Store"
            >
              <Badge variant="secondary" className="text-[10px] px-2 py-0">
                Play Store
              </Badge>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
