import React from "react";
const PROJECTS = [
  {
    id: 1,
    video: "/assets/excution/Execution after modification.mp4",
  },
  {
    id: 2,
    video: "/assets/excution/Untitled design.mp4",
  },
];
function Excution() {
  return (
    <div className="py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Latest
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Excution
            </span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap items-center gap-8 justify-evenly sm:flex-row">
          {PROJECTS.map((project) => (
            <video
              className="rounded-md shadow-md w-96"
              controls
              muted
              key={project.id}
            >
              <source src={project.video} type="video/mp4" />
            </video>
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

export default Excution;
