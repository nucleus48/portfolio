import Whatsapp from "../assets/whatsapp.svg"
import Discord from "../assets/discord.svg"
import Github from "../assets/github.svg"
import Typewriter from "typewriter-effect"
import HeroImg from "../assets/webdev.jpg"

export default function Hero() {
  return (
    <section className="mb-16 sm:overflow-hidden grid gap-4 auto-rows-max sm:grid-cols-[1fr_1fr]">
      <div className="py-16 relative space-y-4 w-[100%] max-w-[500px] sm:w-auto sm:mx-0 mx-auto sm:max-w-auto">
        <h1 className="text-4xl leading-[3rem] md:leading-[4rem] font-bold md:text-5xl pr-14 sm:pr-0">
          Hi,<br />
          I'm Nucleus, <br />
          <Typewriter
            onInit={typewriter => typewriter
              .typeString("Web Developer.")
              .deleteAll()
              .typeString("Frontend Developer.")
              .deleteAll()
              .typeString("Backend Developer.")
              .deleteAll()
              .typeString("Fullstack Developer.")
              .deleteAll()
              .start()}
            options={{ loop: true, delay: 200 }}
          />
        </h1>
        <p className="text-xl">
          Crafting seamless online <br /> experience is my passion.
        </p>
        <div className="absolute sm:static right-4 -top-4 py-16 h-full flex flex-col gap-2 sm:flex-row sm:h-max sm:w-[250px] md:w-[350px] sm:gap-4 items-center sm:py-0">
          <div className="sm:order-4 text-xl h-full sm:w-full w-1 rounded-full bg-blue-600 sm:h-1"></div>
          <a href="https://wa.me/2347049695246"><img className="w-6 sm:w-10 block" src={Whatsapp} alt="whatsapp" /></a>
          <a href="https://discord.com/invite/NUaGntDJ"><img className="w-6 sm:w-10 block" src={Discord} alt="discord" /></a>
          <a href="https://github.com/nucleus48"><img className="w-6 sm:w-10 block" src={Github} alt="github" /></a>
        </div>
      </div>
      <div className="hero -rotate-3 bg-white overflow-hidden flex justify-center">
        <img className="h-full w-full max-w-[500px] object-contain rotate-3" src={HeroImg} alt="hero" />
      </div>
    </section>
  )
}
