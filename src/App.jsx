import { useEffect } from "react";
import Clients from "./components/Clients";
import Companies from "./components/Companies";
import Hero from "./components/Hero";
import LatestWork from "./components/LatestWork";
import MainWork from "./components/MainWork";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    async function fetchImgs() {
      try {
        const res = await fetch("./projects_images.json");
        const data = await res.json();
        console.log(data.projects_images[0].images[0].src);
      } catch (error) {
        console.log("Error fetching images:", error);
      }
    }
    fetchImgs();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <MainWork />
      <LatestWork />
      <Clients />
    </div>
  );
}

export default App;
