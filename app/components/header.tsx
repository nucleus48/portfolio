"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  BlocksIcon,
  BookTextIcon,
  ContactRoundIcon,
  HouseIcon,
  WrenchIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "p-4 sticky -top-100 inset-x-0 z-50 flex justify-center transition-all pb-11 lg:hidden",
        scrollY > 100 && "top-0"
      )}
    >
      <nav
        className={cn(
          "flex justify-center gap-4 px-4 py-2 rounded-2xl transition-all",
          scrollY > 100 && "glass"
        )}
      >
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
