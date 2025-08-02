import React from "react";
import { Palette, Home, Building, Lightbulb } from "lucide-react";

function MainWork() {
  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Residential",
      description:
        " Crafting personalized, functional, and aesthetically pleasing home interiors, tailored to clients' lifestyles, with a focus on comfort, space optimization, and timeless design.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Commercial",
      description:
        "Designing dynamic, professional spaces for businesses, emphasizing brand identity, functionality, and user experience to enhance productivity and client engagement.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Shop Drawings",
      description:
        "Producing detailed technical drawings for interior elements, ensuring precise implementation of design concepts with accurate measurements, materials, and construction details.",
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Expertise
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
            We specialize in creating exceptional spaces that combine innovative
            design with practical functionality. Our comprehensive services
            cover every aspect of architectural and interior design.
          </p>
        </div>

        <div className="flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-8 overflow-hidden transition-all duration-500 transform bg-white border border-gray-100 shadow-lg shaheen--main--work--animation group w-96 rounded-2xl hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
              ></div>

              {/* Icon */}
              <div
                className={`inline-flex h-16 w-16 items-center justify-center bg-gradient-to-br ${service.color} mb-6 rounded-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                {service.title}
              </h3>

              <p className="mb-6 leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainWork;
