import React from "react";
import { Home, Linkedin, Mail } from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 shadow-sm bg-white/90 backdrop-blur-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="outline-none">
            {" "}
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="w-full text-xl font-bold text-gray-900">
                  Make It Organized
                </span>
                {/* <p className="text-xs text-gray-500">Architecture & Interior</p> */}
              </div>
            </div>
          </a>

          <nav className="items-center hidden space-x-8 md:flex">
            <a
              href="#home"
              className="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
            >
              Home
            </a>

            <a
              href="#projects"
              className="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
            >
              Projects
            </a>
            <a
              href="#catalogs"
              className="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
            >
              Catalogs
            </a>

            <a
              href="#footer"
              className="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-3">
            <a
              href="https://www.linkedin.com/in/shimaa-adbullah-272692209/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="p-2 text-gray-600 transition-colors duration-200 rounded-full hover:bg-blue-50 hover:text-blue-600"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:makeitorganized102020@gmail.com"
              className="p-2 text-gray-600 transition-colors duration-200 rounded-full hover:bg-blue-50 hover:text-blue-600"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/201093039374"
              className="text-sm text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="flex-shrink-0 w-5 h-5 text-gray-600" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
