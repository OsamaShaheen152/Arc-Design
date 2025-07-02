import { useState } from "react";
import { Calendar, ExternalLink, Loader2, AlertCircle } from "lucide-react";
import { useProjects } from "../hooks/useProjects";
import ProjectCard from "./ProjectCard";

const LatestWork = ({ onProjectClick }) => {
  const { projects, loading, error } = useProjects();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    if (onProjectClick) onProjectClick(project);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  if (loading) {
    return (
      <div className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              My Latest{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Work
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Discover our recent architectural and interior design projects
            </p>
          </div>
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <span className="ml-2 text-gray-600">Loading projects...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              My Latest{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Work
              </span>
            </h2>
          </div>
          <div className="flex items-center justify-center py-12">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <span className="ml-2 text-red-600">{error}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
            My Latest{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Explore our portfolio of innovative architectural designs and
            stunning interior spaces. Each project represents our commitment to
            excellence and creative vision.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => openModal(project)}
              index={index}
            />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-500">No projects found.</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
    </div>
  );
};

export default LatestWork;
