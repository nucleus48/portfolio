import projects from "../projects.json";
import Globe from "../assets/globe.svg";
import Github from "../assets/github.svg";

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">Projects</h2>

      <div className="projects">
        {projects.map((project) => (
          <div key={project.name} className="">
            <img
              src={project.preview}
              alt="preview"
              className="w-32 h-20 border-1 object-cover border-gray-700 rounded mb-4"
            />

            <div className="flex flex-col gap-2">
              <div className="font-bold text-lg">{project.name}</div>
              <div className="text-gray-300 line-clamp-3">
                {project.description}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <div className="tool text-sm pt-1 pb-1.5 px-4 font-medium rounded-full text-blue-600">
                    {tool}
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-gray-400 flex gap-4">
                {project.source && (
                  <a href={project.source} className="flex items-center gap-1">
                    <img className="w-4" src={Github} alt="globe" />
                    <span>Source</span>
                  </a>
                )}
                <a href={project.url} className="flex items-center gap-1">
                  <img className="w-4" src={Globe} alt="globe" />
                  <span>Live</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
