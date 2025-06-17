import DiscordIcon from "@/components/icons/discord-icon";
import GithubIcon from "@/components/icons/github-icon";
import LinkedinIcon from "@/components/icons/linkedin-icon";
import WhatsappIcon from "@/components/icons/whatsapp-icon";

export default function Footer() {
  return (
    <footer>
      <div className="pb-16 flex gap-4 text-2xl text-white">
        <DiscordIcon />
        <GithubIcon />
        <LinkedinIcon />
        <WhatsappIcon />
      </div>
    </footer>
  );
}
