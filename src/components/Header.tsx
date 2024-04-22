export default function Header() {
  return (
    <header className="py-4 flex items-center">
      <div className="size-16 rounded-full mr-auto bg-gray-700"></div>

      
      <nav className="hidden sm:block">
        <ul className="flex gap-4 mr-4 font-medium">
          <li><a href="#top">Home</a></li>
          <li><a href="#about" >About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>

      <a href="#contact" className="inline-block py-2 px-6 font-medium rounded-full bg-blue-600 active:bg-blue-400 focus:bg-blue-400 hover:bg-blue-400">Contact</a>
    </header>
  )
}