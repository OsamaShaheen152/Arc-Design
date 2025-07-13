import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    id: 1,
    project_name: "Lake View Caffee",
    images: [
      "/assets/LAKE VIEW CAFFE.EGY/1.webp",
      "/assets/LAKE VIEW CAFFE.EGY/2.webp",
      "/assets/LAKE VIEW CAFFE.EGY/3.webp",
      "/assets/LAKE VIEW CAFFE.EGY/4.webp",
      "/assets/LAKE VIEW CAFFE.EGY/5.webp",
      "/assets/LAKE VIEW CAFFE.EGY/6.webp",
    ],
  },
  {
    id: 2,
    project_name: "Zizfone Rest",
    images: [
      "/assets/ZIZFONE REST. KSA/1.webp",
      "/assets/ZIZFONE REST. KSA/2.webp",
      "/assets/ZIZFONE REST. KSA/3.webp",
      "/assets/ZIZFONE REST. KSA/4.webp",
      "/assets/ZIZFONE REST. KSA/5.webp",
      "/assets/ZIZFONE REST. KSA/6.webp",
    ],
  },
  {
    id: 3,
    project_name: "Beauty Salon",
    images: [
      "/assets/BEAUTY SALON . OMAN/beauty salon_1.webp",
      "/assets/BEAUTY SALON . OMAN/beauty salon_2.webp",
      "/assets/BEAUTY SALON . OMAN/beauty salon_3.webp",
      "/assets/BEAUTY SALON . OMAN/beauty salon_4.webp",
    ],
  },
];

function CommercialCatalog({ openModalHandler }) {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
            Commercial{" "}
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

export default CommercialCatalog;
