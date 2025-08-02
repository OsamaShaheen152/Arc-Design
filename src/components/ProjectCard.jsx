import React from "react";
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
      className="transition-all duration-500 transform bg-white border border-gray-100 shadow-lg cursor-pointer animate-in slide-in-from-bottom-4 group rounded-2xl hover:-translate-y-3 hover:shadow-2xl"
      onClick={() => onClick(project)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Project main img */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
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
        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:opacity-100" />
        <div className="absolute p-3 transition-all duration-500 transform rounded-full shadow-lg right-4 top-4 bg-white/90 backdrop-blur-sm">
          <ExternalLink className="w-5 h-5 text-gray-700" />
        </div>
      </div>

      <div className="flex flex-col p-6">
        {/* this for dots */}
        <div className="flex items-center justify-between mb-3">
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

        <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 line-clamp-2">
          {project.project_name}
        </h3>
      </div>
    </div>
  );
};

export default ProjectCard;
