import { Home, Linkedin, Mail } from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="outline-none">
            {" "}
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <Home className="h-6 w-6 text-white" />
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
              className="rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:makeitorganized102020@gmail.com"
              className="rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/201093039374"
              className="text-sm text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-5 w-5 flex-shrink-0 text-gray-600" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
