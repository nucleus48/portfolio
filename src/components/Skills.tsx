import HTML from '../assets/html.svg'
import CSS from '../assets/css.svg'
import JS from '../assets/js.svg'
import TS from '../assets/ts.svg'
import RT from '../assets/react.svg'
import TAILWIND from '../assets/tailwind.svg'
import SVELTE from '../assets/svelte.svg'
import FIREBASE from '../assets/firebase.svg'

export default function Skills() {
  const skills = [
    ['HTML', HTML],
    ['CSS', CSS],
    ['Javascript', JS],
    ['Typescript', TS],
    ['React', RT],
    ['Tailwincss', TAILWIND],
    ['Svelte', SVELTE],
    ['Firebase', FIREBASE]
  ]

  return (
    <section id="skills" className="text-center py-16 max-w-[800px] mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">My Skills</h2>

      <div className="flex flex-wrap gap-4 content-center justify-center">
        {skills.map(([skill, img]) => (
          <div key={skill} className={`w-32 h-32 flex bg-gray-800 rounded flex-col justify-center items-center gap-2`}>
            <div>
              <img className='w-16' src={img} alt="logo" />
            </div>
            <div className='font-semibold'>{skill}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

