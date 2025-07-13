import { ExternalLink, Loader2 } from "lucide-react";
import { useState } from "react";

const ProjectCard = ({ project, onClick, index }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Fallback image if the main image fails to load
  const fallbackImage =
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop";

  return (
    <div
      className="animate-in slide-in-from-bottom-4 group transform cursor-pointer rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
      onClick={() => onClick(project)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Project main img */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
          </div>
        )}
        <img
          src={imageError ? fallbackImage : project.images[0]}
          loading="lazy"
          alt={project.title}
          className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute right-4 top-4 transform rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm transition-all duration-500">
          <ExternalLink className="h-5 w-5 text-gray-700" />
        </div>
      </div>

      <div className="flex flex-col p-6">
        {/* this for dots */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-blue-200 transition-colors duration-300 group-hover:bg-blue-400"
                style={{ transitionDelay: `${i * 50}ms` }}
              />
            ))}
          </div>
        </div>

        <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors duration-300">
          {project.project_name}
        </h3>
      </div>
    </div>
  );
};

export default ProjectCard;
