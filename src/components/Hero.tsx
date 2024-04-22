import Whatsapp from "../assets/whatsapp.svg"
import Discord from "../assets/discord.svg"
import Github from "../assets/github.svg"

export default function Hero() {
  return (
    <section className="flex flex-col sm:flex-row sm:justify-center md:gap-8 lg:gap-40">
      <div className="py-16 relative space-y-4 w-[100%] max-w-[500px] sm:w-max sm:mx-0 mx-auto sm:max-w-max">
        <h1 className="text-4xl leading-[3rem] md:leading-[4rem] font-bold md:text-5xl pr-14">
          Hi,<br />
          I'm Nucleus, <br />
          <span className="career">Web Developer.</span>
        </h1>
        <p className="text-xl">
          Crafting seamless online <br /> experience is my passion.
        </p>
        <div className="absolute sm:static right-4 -top-4 py-16 h-full flex flex-col gap-2 sm:flex-row sm:h-max sm:w-[250px] md:w-[350px] sm:gap-4 items-center sm:py-0">
          <div className="sm:order-4 text-xl h-full sm:w-full w-1 rounded-full bg-blue-600 sm:h-1"></div>
          <a href="#"><img className="w-6 sm:w-10 block" src={Whatsapp} alt="whatsapp" /></a>
          <a href="#"><img className="w-6 sm:w-10 block" src={Discord} alt="discord" /></a>
          <a href="#"><img className="w-6 sm:w-10 block" src={Github} alt="github" /></a>
        </div>
      </div>
      <div className="w-60 h-60 mx-auto self-center bg-gray-800 rounded mb-16 sm:mb-0"></div>
    </section>
  )
}
