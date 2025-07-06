import { Palette, Home, Building, Lightbulb } from "lucide-react";

function MainWork() {
  const services = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Residential",
      description:
        " Crafting personalized, functional, and aesthetically pleasing home interiors, tailored to clients' lifestyles, with a focus on comfort, space optimization, and timeless design.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Commercial",
      description:
        "Designing dynamic, professional spaces for businesses, emphasizing brand identity, functionality, and user experience to enhance productivity and client engagement.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Shop Drawings",
      description:
        "Producing detailed technical drawings for interior elements, ensuring precise implementation of design concepts with accurate measurements, materials, and construction details.",
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            We specialize in creating exceptional spaces that combine innovative
            design with practical functionality. Our comprehensive services
            cover every aspect of architectural and interior design.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative transform overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
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
