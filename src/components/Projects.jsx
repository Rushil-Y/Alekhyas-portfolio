import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      title: "Skechers",
      logo: "/logos/skechers.png",
      link: "/projects/skechers",
    },
    {
      title: "Firstcry",
      logo: "/logos/firstcry.png",
      link: "/projects/firstcry",
    },
    {
      title: "Spykar",
      logo: "/logos/spykar.png",
      link: "/projects/spykar",
    },
    {
      title: "Toms",
      logo: "/logos/toms.png",
      link: "/projects/toms",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-4xl font-bold mb-16 text-center text-pink-600">
        Projects
      </h2>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-8 border border-pink-100 transition duration-300 lg:shadow-md lg:hover:shadow-xl lg:hover:-translate-y-2"
          >
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Logo */}
              <div className="h-20 flex items-center justify-center">
                <img
                  src={project.logo}
                  alt={project.title}
                  className="max-h-full object-contain transition duration-300 lg:grayscale lg:group-hover:grayscale-0"
                />
              </div>

              {/* Company Name */}
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>

              {/* View Button */}
              <Link
                to={project.link}
                className="px-5 py-2 text-sm font-medium bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300"
              >
                View Work
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
