import { useState, useEffect } from "react";

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("../../public/projects_images.json");
        if (!response.ok) {
          throw new Error("Failed to fetch projects data");
        }

        const data = await response.json();
        console.log(data);
        // // Access projects_images array and map to match expected structure
        // const formattedProjects = data.map((project) => ({
        //   id: project.id,
        //   title: project.project_name,
        //   images: project.images.map((img) => img.src), // Use path for image URLs
        // }));
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects");

        // Fallback to default projects
        try {
          const { projects: defaultProjects } = await import(
            "../data/projects.js"
          );
          // Ensure defaultProjects is an array and format if needed
          const formattedDefault = Array.isArray(defaultProjects)
            ? defaultProjects
            : defaultProjects.projects || [];
          setProjects(formattedDefault);
        } catch (fallbackErr) {
          console.error("Error loading fallback projects:", fallbackErr);
          setProjects([]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};
