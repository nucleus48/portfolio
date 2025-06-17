import { Button } from "@/components/ui/button";
import {
  BlocksIcon,
  BookTextIcon,
  ContactRoundIcon,
  HouseIcon,
  WrenchIcon,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 fixed top-0 inset-x-0 z-50 flex justify-center">
      <nav className="glass flex justify-center gap-4 px-4 py-2 rounded-2xl">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} size={"icon"} asChild>
              <Link href={"#top"}>
                <HouseIcon className="size-5" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Home</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} size={"icon"} asChild>
              <Link href={"#about"}>
                <BookTextIcon className="size-5" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>About</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} size={"icon"} asChild>
              <Link href={"#tools"}>
                <WrenchIcon className="size-5" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tools</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} size={"icon"} asChild>
              <Link href={"#projects"}>
                <BlocksIcon className="size-5" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Projects</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} size={"icon"} asChild>
              <Link href={"#contact"}>
                <ContactRoundIcon className="size-5" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact</p>
          </TooltipContent>
        </Tooltip>
      </nav>
    </header>
  );
}
