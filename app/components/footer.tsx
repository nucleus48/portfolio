import DiscordIcon from "@/components/icons/discord-icon";
import GithubIcon from "@/components/icons/github-icon";
import LinkedinIcon from "@/components/icons/linkedin-icon";
import WhatsappIcon from "@/components/icons/whatsapp-icon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="pb-16 flex gap-4 text-2xl text-muted-foreground">
        <Link href="https://discord.com/invite/NUaGntDJ" target="_blank">
          <DiscordIcon />
        </Link>
        <Link href="https://github.com/nucleus48" target="_blank">
          <GithubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/nucleuseru" target="_blank">
          <LinkedinIcon />
        </Link>
        <Link href="https://wa.link/atx99w" target="_blank">
          <WhatsappIcon />
        </Link>
      </div>
    </footer>
  );
}
