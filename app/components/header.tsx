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

export default function Header() {
  return (
    <header className="p-4 fixed top-0 inset-x-0 z-50">
      <nav className="flex justify-center gap-4 p-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <HouseIcon className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Home</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <BookTextIcon className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>About</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <WrenchIcon className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tools</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <BlocksIcon className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Projects</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <ContactRoundIcon className="size-5" />
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
