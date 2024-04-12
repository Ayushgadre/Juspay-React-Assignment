import React from "react";

// Navbar component
export default function Navbar() {
  return (
    <nav className="bg-blue-500">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and title */}
          <div className="flex items-center">
            <img
              className="h-8 w-auto"
              src="https://juspay.in/logo_juspay.svg"
              alt="Scratch Logo"
            />
            <span className="text-white font-bold ml-2 text-lg">
              Juspay Visual Code Editor
            </span>
          </div>

          <div className="flex items-center">
            <a
              href="https://github.com/Ayushgadre"
              className="text-white hover:text-gray-200 font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
