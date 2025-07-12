import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    id: 1,
    project_name: "Living & Dining",
    images: [
      "/assets/LIVING AND DINING cataloge/1.jpeg",
      "/assets/LIVING AND DINING cataloge/2.jpeg",
      "/assets/LIVING AND DINING cataloge/3.jpeg",
      "/assets/LIVING AND DINING cataloge/4.jpeg",
      "/assets/LIVING AND DINING cataloge/5.jpeg",
      "/assets/LIVING AND DINING cataloge/6.jpeg",
      "/assets/LIVING AND DINING cataloge/7.jpeg",
    ],
  },

  {
    id: 2,
    project_name: "Bedroom",
    images: [
      "/assets/BEDROOM CATALOGE/1.jpeg",
      "/assets/BEDROOM CATALOGE/2.jpeg",
      "/assets/BEDROOM CATALOGE/3.jpeg",
      "/assets/BEDROOM CATALOGE/4.jpeg",
      "/assets/BEDROOM CATALOGE/5.jpeg",
      "/assets/BEDROOM CATALOGE/6.jpeg",
      "/assets/BEDROOM CATALOGE/7.jpeg",
      "/assets/BEDROOM CATALOGE/8.jpeg",
      "/assets/BEDROOM CATALOGE/9.jpeg",
      "/assets/BEDROOM CATALOGE/10.jpeg",
    ],
  },
  {
    id: 3,
    project_name: "Kitchen",
    images: [
      "/assets/KITCHEN cataloge/1.jpeg",
      "/assets/KITCHEN cataloge/2.jpeg",
      "/assets/KITCHEN cataloge/3.jpeg",
      "/assets/KITCHEN cataloge/4.jpeg",
      "/assets/KITCHEN cataloge/5.jpeg",
      "/assets/KITCHEN cataloge/6.jpeg",
      "/assets/KITCHEN cataloge/7.jpeg",
    ],
  },
  {
    id: 4,
    project_name: "Bathroom",
    images: [
      "/assets/BATH ROOM cataloge/1.jpg",
      "/assets/BATH ROOM cataloge/2.jpg",
      "/assets/BATH ROOM cataloge/3.jpg",
      "/assets/BATH ROOM cataloge/4.jpg",
      "/assets/BATH ROOM cataloge/5.jpg",
      "/assets/BATH ROOM cataloge/6.jpg",
      "/assets/BATH ROOM cataloge/7.jpg",
    ],
  },
];

function ResidentialCatalog({ openModalHandler }) {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
            Residential{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Catalog
            </span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => openModalHandler(project)}
              index={index}
            />
          ))}
        </div>

        {PROJECTS.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-500">No projects found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResidentialCatalog;
