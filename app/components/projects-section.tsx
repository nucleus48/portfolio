import SkeletonSocialImageSrc from "@/assets/images/skeleton-social.png";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-8">
      <h2>PROJECTS & PRODUCTS</h2>

      <div className="space-y-8">
        <ProjectCard
          title="Skeleton Social"
          description="Anonymous web and mobile social media platform"
          imageSrc={SkeletonSocialImageSrc}
        />
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  imageSrc: StaticImageData;
  description: string;
}

function ProjectCard({ title, imageSrc, description }: ProjectCardProps) {
  return (
    <div className="gap-4 sm:grid sm:[grid-template-columns:_auto_1fr]">
      <div className="bg-white px-1 pt-1 overflow-hidden rounded-sm size-24 hidden sm:block">
        <Image src={imageSrc} alt="skeleton social landing page" />
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <Button variant={"secondary"} size={"sm"}>
          View Project
        </Button>
      </div>
    </div>
  );
}
