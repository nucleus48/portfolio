import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="flex flex-col py-32">
      <h1 className="font-bold text-3xl mb-2">Nucleus Erumagborie</h1>
      <h2 className="font-semibold mb-4">Software Engineer</h2>
      <p className="mb-8">
        I build fast, reliable web and mobile apps with a strong focus on user
        experience and long-term scalability.
      </p>
      <div className="flex gap-4">
        <Button size={"lg"}>
          <span>View Resume</span>
          <ArrowUpRightIcon />
        </Button>
        <Button variant={"secondary"} size={"lg"}>
          Contact Me
        </Button>
      </div>
    </section>
  );
}
