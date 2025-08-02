import React from "react";
import ProjectCard from "./ProjectCard";
const PROJECTS = [
  {
    id: 1,
    project_name: "Living & Dining",
    images: [
      "/assets/LIVING AND DINING cataloge/1.webp",
      "/assets/LIVING AND DINING cataloge/2.webp",
      "/assets/LIVING AND DINING cataloge/3.webp",
      "/assets/LIVING AND DINING cataloge/4.webp",
      "/assets/LIVING AND DINING cataloge/5.webp",
      "/assets/LIVING AND DINING cataloge/6.webp",
      "/assets/LIVING AND DINING cataloge/7.webp",
    ],
  },

  {
    id: 2,
    project_name: "Bedroom",
    images: [
      "/assets/BEDROOM CATALOGE/1.webp",
      "/assets/BEDROOM CATALOGE/2.webp",
      "/assets/BEDROOM CATALOGE/3.webp",
      "/assets/BEDROOM CATALOGE/4.webp",
      "/assets/BEDROOM CATALOGE/5.webp",
      "/assets/BEDROOM CATALOGE/6.webp",
      "/assets/BEDROOM CATALOGE/7.webp",
      "/assets/BEDROOM CATALOGE/8.webp",
      "/assets/BEDROOM CATALOGE/9.webp",
      "/assets/BEDROOM CATALOGE/10.webp",
    ],
  },
  {
    id: 3,
    project_name: "Kitchen",
    images: [
      "/assets/KITCHEN cataloge/1.webp",
      "/assets/KITCHEN cataloge/2.webp",
      "/assets/KITCHEN cataloge/3.webp",
      "/assets/KITCHEN cataloge/4.webp",
      "/assets/KITCHEN cataloge/5.webp",
      "/assets/KITCHEN cataloge/6.webp",
      "/assets/KITCHEN cataloge/7.webp",
    ],
  },
  {
    id: 4,
    project_name: "Bathroom",
    images: [
      "/assets/BATH ROOM cataloge/1.webp",
      "/assets/BATH ROOM cataloge/2.webp",
      "/assets/BATH ROOM cataloge/3.webp",
      "/assets/BATH ROOM cataloge/4.webp",
      "/assets/BATH ROOM cataloge/5.webp",
      "/assets/BATH ROOM cataloge/6.webp",
      "/assets/BATH ROOM cataloge/7.webp",
    ],
  },
];

function ResidentialCatalog({ openModalHandler }) {
  return (
    <div className="py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
            Residential{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
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
