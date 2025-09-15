import React from "react"

const Header: React.FC = () => {
  return (
    <header className="flex w-full items-center justify-between bg-white px-6 py-4 shadow-md">
      <div className="text-2xl font-bold text-gray-800">
        Barber SaaS Bootcamp
      </div>
      <nav className="space-x-6">
        <a href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </a>
        <a href="/services" className="text-gray-600 hover:text-gray-900">
          Services
        </a>
        <a href="/about" className="text-gray-600 hover:text-gray-900">
          About
        </a>
        <a href="/contact" className="text-gray-600 hover:text-gray-900">
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Header
