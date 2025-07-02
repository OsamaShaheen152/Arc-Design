import { useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "../../public/projects_images.json";

Modal.setAppElement("#root");
function ProjectModal({ project }) {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const openModalHandler = () => {
    setModalIsOpen(true);
  };
  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  // Modal Style
  const modalStyle = {
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
      backgroundColor: "white",
      border: "2px solid rgb(240, 240, 240)",
      borderRadius: "12px",
      position: "absolute",
      height: "fit-content",
      width: "90%", // Responsive width for smaller screens
      maxWidth: "500px", // Limit max width for larger screens
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)", // Center modal
      padding: "20px",
      boxSizing: "border-box",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000, // Ensure overlay is above other content
    },
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModalHandler}
        style={modalStyle}
      >
        <Swiper
          modules={[EffectCoverflow]} // Register the coverflow effect module
          effect="coverflow" // Set effect to coverflow
          coverflowEffect={{
            rotate: 30, // Slide rotation in degrees
            stretch: 0, // Space between slides
            depth: 100, // Depth offset for 3D effect
            modifier: 1, // Effect intensity
            slideShadows: true, // Enable shadows
          }}
          slidesPerView="auto" // Auto-fit slides
          centeredSlides // Center the active slide
          loop // Enable infinite loop
          style={{ width: "100%", padding: "20px" }}
        >
          {project?.images.map((image, imgIdx) => (
            <SwiperSlide
              style={{
                width: "300px",
                background: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={imgIdx}
            >
              <img src={image.src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal>
    </div>
  );
}

export default ProjectModal;
