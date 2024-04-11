import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-blue-500">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center">
            <img
              className="h-8 w-auto"
              src="https://scratch.mit.edu/favicon.ico"
              alt="Scratch Logo"
            />
            <span className="text-white font-bold ml-2 text-lg">Scratch Editor</span>
          </div>


          <div className="flex items-center">
                <a
                  href="#"
                  className="text-white hover:text-gray-200 font-medium"
                >
                  Sign in
                </a>
          </div>

        </div>
      </div>
    </nav>
  )
}
