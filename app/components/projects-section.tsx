import SkeletonSocialImageSrc from "@/assets/images/skeleton-social.png";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-8">
      <h2>PROJECTS & PRODUCTS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    <div className="p-4 gap-4 grid [grid-template-columns:_auto_1fr]">
      <div className="bg-white px-2 pt-2 size-32 overflow-hidden rounded-md">
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
