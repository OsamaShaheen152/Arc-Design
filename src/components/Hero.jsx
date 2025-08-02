import React from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

function Hero() {
  return (
    <div className="relative flex items-center min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-blue-200 rounded-full animate-blob left-1/4 top-1/4 opacity-30 mix-blend-multiply blur-xl filter"></div>
        <div className="absolute w-64 h-64 bg-purple-200 rounded-full animate-blob animation-delay-2000 right-1/4 top-1/3 opacity-30 mix-blend-multiply blur-xl filter"></div>
        <div className="absolute w-64 h-64 bg-pink-200 rounded-full animate-blob animation-delay-4000 bottom-1/4 left-1/3 opacity-30 mix-blend-multiply blur-xl filter"></div>
      </div>

      <div className="relative px-4 pt-10 pb-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Text Content */}
          <div className="max-w-4xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Creative
              <span className="block text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text">
                Architecture
              </span>
              <span className="block text-4xl text-gray-700 sm:text-5xl lg:text-6xl">
                & Interior Design
              </span>
            </h1>

            <p className="max-w-3xl mx-auto mb-8 text-xl leading-relaxed text-gray-600">
              We are creative and detail-oriented architectural engineers with
              expertise in designing innovative, sustainable structures.
              Proficient in CAD software, structural analysis, and project
              management.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#catalogs"
                className="inline-flex items-center px-8 py-4 font-semibold text-white transition-all duration-300 transform shadow-lg group rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
              >
                View Our Catalogs
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-4 font-semibold text-gray-700 transition-all duration-300 transform bg-white border-2 border-gray-200 shadow-lg rounded-xl hover:scale-105 hover:border-blue-300 hover:text-blue-600 hover:shadow-xl"
              >
                Our Projects
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
          <a href="#expertise">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
