// import { EffectCoverflow } from "swiper/modules";
// import "swiper/css/effect-coverflow";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
import { X } from "lucide-react";

Modal.setAppElement("#root");
function ProjectModal({ project, isModalOpen, closeModalHandler }) {
  // Modal Style
  const modalStyle = {
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overFlow: "hidden",
      boxShadow: "rgba(100, 100, 111, 0.3) 0px 7px 29px 0px",
      backgroundColor: "#f1f5f9",
      border: "2px solid rgb(240, 240, 240)",
      borderRadius: "12px",
      position: "absolute",
      height: "400px",

      width: "400px", // Responsive width for smaller screens
      // maxWidth: "500px", // Limit max width for larger screens
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
        isOpen={isModalOpen}
        onRequestClose={closeModalHandler}
        style={modalStyle}
      >
        <span
          className="absolute right-2 top-1 cursor-pointer"
          onClick={closeModalHandler}
        >
          <X />
        </span>

        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.5,
          }}
          loop={project?.images.length >= 3}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          {project?.images.map((image, imgIdx) => (
            <SwiperSlide
              style={{
                width: "300px",
                background: "#f1f5f9",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={imgIdx}
            >
              <img src={image} loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Modal>
    </div>
  );
}

export default ProjectModal;

{
  /* <Swiper
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
          loop={project?.images.length >= 3} // Enable infinite loop
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
              <img src={image} loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper> */
}
