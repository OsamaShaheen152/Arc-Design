import { ChevronDown, ArrowRight } from "lucide-react";
import HeroImg from "../../public/assets/hero.svg";

function Hero() {
  return (
    <div className="relative flex min-h-screen items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-200 opacity-30 mix-blend-multiply blur-xl filter"></div>
        <div className="animate-blob animation-delay-2000 absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-purple-200 opacity-30 mix-blend-multiply blur-xl filter"></div>
        <div className="animate-blob animation-delay-4000 absolute bottom-1/4 left-1/3 h-64 w-64 rounded-full bg-pink-200 opacity-30 mix-blend-multiply blur-xl filter"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Creative
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Architecture
              </span>
              <span className="block text-4xl text-gray-700 sm:text-5xl lg:text-6xl">
                & Interior Design
              </span>
            </h1>

            <p className="mb-8 max-w-2xl text-xl leading-relaxed text-gray-600">
              We are creative and detail-oriented architectural engineers with
              expertise in designing innovative, sustainable structures.
              Proficient in CAD software, structural analysis, and project
              management.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#work"
                className="group inline-flex transform items-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#projects"
                className="inline-flex transform items-center rounded-xl border-2 border-gray-200 bg-white px-8 py-4 font-semibold text-gray-700 shadow-lg transition-all duration-300 hover:scale-105 hover:border-blue-300 hover:text-blue-600 hover:shadow-xl"
              >
                Our Projects
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="max-w-lg flex-1">
            <div className="relative">
              <div className="absolute inset-0 rotate-6 scale-105 transform rounded-3xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-20"></div>
              <div className="relative rounded-3xl bg-white p-8 shadow-2xl">
                <img
                  loading="lazy"
                  src={HeroImg}
                  alt="Architecture Design"
                  className="h-auto w-full transform object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
          <a href="#work">
            <ChevronDown className="h-6 w-6 text-gray-400" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
