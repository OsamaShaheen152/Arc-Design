import { Calendar, ExternalLink, Loader2, AlertCircle } from "lucide-react";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    id: 1,
    project_name: "Project 1",
    images: [
      "/assets/Project 1/bathroom_2.jpg",

      "/assets/Project 1/bathroom_top_view.jpg",

      "/assets/Project 1/bedroom_kids.jpg",

      "/assets/Project 1/bedroom_master.jpg",

      "/assets/Project 1/dining_room_1.jpg",

      "/assets/Project 1/floor_plan.jpg",

      "/assets/Project 1/kitchen.jpg",

      "/assets/Project 1/living_room_1.jpg",

      "/assets/Project 1/living_room_2.jpg",
    ],
  },
  {
    id: 2,
    project_name: "Project 2",
    images: [
      "/assets/Project 2/bedroom_tv_area.jpg",

      "/assets/Project 2/bedroom_twin_beds.jpg",

      "/assets/Project 2/bedroom_view_1.jpg",

      "/assets/Project 2/bedroom_view_2.jpg",

      "/assets/Project 2/entryway_modern.jpg",

      "/assets/Project 2/floor_plan_2.jpg",

      "/assets/Project 2/floor_plan.jpg",

      "/assets/Project 2/home_office.jpg",

      "/assets/Project 2/living_room_modern.jpg",

      "/assets/Project 2/living_room_overall_view.jpg",

      "/assets/Project 2/living_room_tv_area.jpg",
    ],
  },
  {
    id: 3,
    project_name: "Project 3",
    images: [
      "/assets/Project 3/bedroom_twin_beds.jpg",

      "/assets/Project 3/bedroom_view_1.jpg",

      "/assets/Project 3/dining_area_details.jpg",

      "/assets/Project 3/floor_plan_2.jpg",

      "/assets/Project 3/floor_plan.jpg",

      "/assets/Project 3/living_room_dining_area_2.jpg",

      "/assets/Project 3/living_room_dining_area.jpg",

      "/assets/Project 3/living_room_view_1.jpg",

      "/assets/Project 3/WhatsApp Image 2025-07-01 at 06.49.38_015f3d46.jpg",
    ],
  },
  {
    id: 4,
    project_name: "Project 4",
    images: [
      "/assets/Project 4/WhatsApp Image 2025-07-01 at 07.20.17_ccac9192.jpg",

      "/assets/Project 4/WhatsApp Image 2025-07-01 at 07.20.18_81c063fb.jpg",

      "/assets/Project 4/WhatsApp Image 2025-07-01 at 07.20.19_0309af2a.jpg",

      "/assets/Project 4/WhatsApp Image 2025-07-01 at 07.20.19_66640d53.jpg",
    ],
  },
];

const LatestWork = ({ openModalHandler }) => {
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
};

export default LatestWork;
