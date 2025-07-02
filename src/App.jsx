import { useState } from "react";
import { Code2, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Hero from "./components/Hero";
import LatestWork from "./components/LatestWork";
import MainWork from "./components/MainWork";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <Navbar />
      {/* Main Content */}
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="work" className="py-12">
          <MainWork />
        </section>

        <section id="projects" className="bg-white/50 py-12">
          <LatestWork onProjectClick={openModal} />
        </section>
        <ProjectModal />
      </main>

      {/* Enhanced Footer */}
      <Footer />
      {/* Project Modal */}
    </div>
  );
}

export default App;
