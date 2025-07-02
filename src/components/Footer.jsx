import { Code2, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
                <Code2 className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Make It Organized</h3>
                <p className="text-sm text-blue-300">
                  Architecture & Interior Design
                </p>
              </div>
            </div>
            <p className="mb-6 max-w-md leading-relaxed text-gray-300">
              Creative and detail-oriented architectural firm with expertise in
              designing innovative, sustainable structures. We bring your vision
              to life with cutting-edge design and meticulous attention to
              detail.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition-all duration-200 hover:scale-110 hover:bg-white/20"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition-all duration-200 hover:scale-110 hover:bg-white/20"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition-all duration-200 hover:scale-110 hover:bg-white/20"
              >
                <Mail className="h-5 w-5" />
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
                  className="inline-block transform text-gray-300 transition-colors duration-200 hover:translate-x-1 hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="inline-block transform text-gray-300 transition-colors duration-200 hover:translate-x-1 hover:text-white"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="inline-block transform text-gray-300 transition-colors duration-200 hover:translate-x-1 hover:text-white"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="inline-block transform text-gray-300 transition-colors duration-200 hover:translate-x-1 hover:text-white"
                >
                  Contact
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
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                <div>
                  <p className="text-sm text-gray-300">123 Design Street</p>
                  <p className="text-sm text-gray-300">
                    Architecture City, AC 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <p className="text-sm text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <p className="text-sm text-gray-300">hello@arcdesign.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
