import About from "./components/About"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

export default function App() {
  return (
    <>
      <Header />

      <main className="text-balance">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer></footer>
    </>
  )
}
