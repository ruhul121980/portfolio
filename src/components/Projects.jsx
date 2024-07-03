import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {console.log(PROJECTS)}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div key={index} className="mb-8 flex flex-col lg:flex-row lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4 flex justify-center lg:justify-start"
              >
                <img
                  className="mb-6 rounded w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]" 
                  src={project.image}
                  alt={project.title}
                />
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold text-center lg:text-left">{project.title}</h6>
                <p className="mb-4 text-neutral-400 text-center lg:text-left">{project.description}</p>
                <div className="text-center lg:text-left">
                  {project.technologies.map((tech, index) => (
                    <span
                      className="mr-1 lg:mr-2 rounded bg-neutral-900 px-1 lg:px-2 py-1 text-sm font-medium text-purple-700"
                      key={index}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-3 text-left">
                  <span className="mt-4 mr-1 lg:mr-4 rounded bg-neutral-900 px:1 lg:px-2 py-1 text-sm font-medium text-purple-700">
                    <a href={`${project.liveLink}`} target="_blank">
                      Live Link
                    </a>
                  </span>
                  <span className="mt-4 mr-1 lg:mr-4 rounded bg-neutral-900 px:1 lg:px-2 py-1 text-sm font-medium text-purple-700">
                    <a href={`${project.client}`} target="_blank">
                      Client-Side-Code
                    </a>
                  </span>
                  <span className="mt-4 rounded bg-neutral-900 px:1 lg:px-2 py-1 text-sm font-medium text-purple-700">
                    <a href={`${project.server}`} target="_blank">
                      Server-Side-Code
                    </a>
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
