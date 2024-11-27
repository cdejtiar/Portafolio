// pages/projects.js
export default function Projects() {
  const projects = [
    { name: "Proyecto 1", description: "Descripción del Proyecto 1", link: "https://link-a-tu-proyecto1.com" },
    { name: "Proyecto 2", description: "Descripción del Proyecto 2", link: "https://link-a-tu-proyecto2.com" },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-4xl font-semibold text-center">Mis Proyectos</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-5">
            <h2 className="text-2xl font-semibold">{project.name}</h2>
            <p className="mt-3">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                Ver Proyecto
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
