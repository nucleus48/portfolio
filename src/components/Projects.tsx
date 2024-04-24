import projects from "../projects.json"

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">Projects</h2>

      <div className="grid lg:grid-cols-[1fr_1fr] gap-8">
        {projects.map(project => (
          <div key={project.name} className="grid grid-rows-[auto_1fr] sm:grid-rows-1 sm:grid-cols-[auto_1fr] gap-4">
            <img src={project.url} alt="preview" className="w-32 h-20 border-2 border-gray-700 rounded" />

            <div className="flex flex-col gap-2">
              <div className="font-bold text-lg">{project.name}</div>
              <div className="text-gray-300">{project.description}</div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map(tool => <div className="tool text-sm pt-1 pb-1.5 px-4 font-medium rounded-full text-blue-600">{tool}</div>)}
              </div>
              <div className="text-sm font-medium text-gray-400 flex gap-4">
                <a href="">Source</a>
                <a href="">Live</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}