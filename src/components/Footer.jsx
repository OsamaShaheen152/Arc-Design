import React from "react";
import { Home, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
function Footer() {
  return (
    <footer
      id="footer"
      className="text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6 space-x-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
                <Home className="text-white h-7 w-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Make It Organized</h3>
                <p className="text-sm text-blue-300">
                  Architecture & Interior Design
                </p>
              </div>
            </div>
            <p className="max-w-md mb-6 leading-relaxed text-gray-300">
              Creative and detail-oriented architectural firm with expertise in
              designing innovative, sustainable structures. We bring your vision
              to life with cutting-edge design and meticulous attention to
              detail.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/in/shimaa-adbullah-272692209/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                className="p-3 transition-all duration-200 rounded-full bg-white/10 hover:scale-110 hover:bg-white/20"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:osamashaheen152@gmail.com"
                className="p-3 transition-all duration-200 rounded-full bg-white/10 hover:scale-110 hover:bg-white/20"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-blue-300">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="inline-block text-gray-300 transition-colors duration-200 transform hover:translate-x-1 hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="inline-block text-gray-300 transition-colors duration-200 transform hover:translate-x-1 hover:text-white"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#catalogs"
                  className="inline-block text-gray-300 transition-colors duration-200 transform hover:translate-x-1 hover:text-white"
                >
                  Catalogs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-blue-300">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="">
                <a
                  href="https://wa.me/201093039374"
                  className="flex items-center text-sm text-gray-300 gap-x-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="flex-shrink-0 w-5 h-5 text-blue-400" />
                  01093039374 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="flex-shrink-0 w-5 h-5 text-blue-400" />
                <p className="text-sm text-gray-300">01100859083</p>
              </div>

              <div className="">
                <a
                  href="mailto:makeitorganized102020@gmail.com"
                  className="flex items-center text-sm text-gray-300 gap-x-3"
                >
                  <Mail className="flex-shrink-0 w-5 h-5 text-blue-400" />
                  makeitorganized102020@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
