import AWSIcon from "@/components/icons/aws-icon";
import DockerIcon from "@/components/icons/docker-icon";
import ExpoIcon from "@/components/icons/expo-icon";
import NestJSIcon from "@/components/icons/nestjs-icon";
import NextJSIcon from "@/components/icons/nextjs-icon";
import TypescriptIcon from "@/components/icons/typescript-icon";

export default function ToolsSection() {
  return (
    <section id="tools" className="space-y-8">
      <h2>PREMIUM TOOLS</h2>

      <div className="grid [grid-template-columns:_repeat(auto-fit,minmax(256px,1fr))] gap-8">
        <Tool
          icon={<NextJSIcon />}
          title="Nextjs"
          description="Web Framework"
        />
        <Tool icon={<ExpoIcon />} title="Expo" description="Mobile Framework" />
        <Tool
          icon={<NestJSIcon />}
          title="Nestjs"
          description="Backend Framework"
        />
        <Tool
          icon={<TypescriptIcon />}
          title="Typescript"
          description="Static Type Checking"
        />
        <Tool
          icon={<DockerIcon />}
          title="Docker"
          description="Containerization"
        />
        <Tool icon={<AWSIcon />} title="AWS" description="Cloud Computing" />
      </div>
    </section>
  );
}

interface ToolProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function Tool({ icon, title, description }: ToolProps) {
  return (
    <div className="flex gap-4">
      <div className="bg-white p-2 text-5xl rounded-xl aspect-square h-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
