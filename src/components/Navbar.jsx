import { Code2, Github, Linkedin, Mail } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home">
            {" "}
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">
                  Make It Organized
                </span>
                <p className="text-xs text-gray-500">Architecture & Interior</p>
              </div>
            </div>
          </a>

          <nav className="hidden items-center space-x-8 md:flex">
            <a
              href="#home"
              className="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#work"
              className="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
            >
              Work
            </a>
            <a
              href="#projects"
              className="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-3">
            <a
              href="#"
              className="rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
