"use client";

import { FiInstagram, FiGithub, FiMessageCircle } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-white text-white dark:text-white text-gray-900 light:text-gray-900 py-10 px-4 border-t border-[#262626] dark:border-[#262626] light:border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-white dark:text-white text-gray-900 light:text-gray-900">
              Porto Mumet.in
            </h2>
            <span className="text-gray-500">|</span>
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Porto Mumet.in. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/mumet.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#c41e2e] rounded-lg hover:bg-white hover:text-[#c41e2e] transition-all duration-300 group"
            >
              <FiInstagram size={18} className="text-white group-hover:text-[#c41e2e]" />
              <span className="text-sm text-white group-hover:text-[#c41e2e]">
                Instagram
              </span>
            </a>

            <a
              href="https://wa.me/6285933648537"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#c41e2e] rounded-lg hover:bg-white hover:text-[#c41e2e] transition-all duration-300 group"
            >
              <FiMessageCircle size={18} className="text-white group-hover:text-[#c41e2e]" />
              <span className="text-sm text-white group-hover:text-[#c41e2e]">
                WhatsApp
              </span>
            </a>

            <a
              href="https://github.com/ardhikaxx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#c41e2e] rounded-lg hover:bg-white hover:text-[#c41e2e] transition-all duration-300 group"
            >
              <FiGithub size={18} className="text-white group-hover:text-[#c41e2e]" />
              <span className="text-sm text-white group-hover:text-[#c41e2e]">
                GitHub
              </span>
            </a>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="flex flex-col items-center space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white dark:text-white text-gray-900 light:text-gray-900">
                Porto Mumet.in
              </h2>
              <p className="text-gray-400 light:text-gray-600 text-sm mt-2">
                Dari Mumet, Jadi Beres!
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/mumet.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#c41e2e] rounded-full hover:bg-white hover:text-[#c41e2e] transition-all duration-300 group"
                aria-label="Instagram"
              >
                <FiInstagram size={20} className="text-white group-hover:text-[#c41e2e]" />
              </a>
              <a
                href="https://wa.me/6285933648537"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#c41e2e] rounded-full hover:bg-white hover:text-[#c41e2e] transition-all duration-300 group"
                aria-label="WhatsApp"
              >
                <FiMessageCircle size={20} className="text-white group-hover:text-[#c41e2e]" />
              </a>
              <a
                href="https://github.com/ardhikaxx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#c41e2e] rounded-full hover:bg-white hover:text-[#c41e2e] transition-all duration-300 group"
                aria-label="GitHub"
              >
                <FiGithub size={20} className="text-white group-hover:text-[#c41e2e]" />
              </a>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-sm">
                &copy; {currentYear} Porto Mumet.in. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
