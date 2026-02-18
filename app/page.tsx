"use client";

import { projects } from "./data/projects";
import { services } from "./data/services";
import dynamic from "next/dynamic";
import ProjectCard from "./components/ProjectCard";
import ServiceIcons from "./components/ServiceIcons";

const Navbar = dynamic(() => import("./components/Navbar"));
const Footer = dynamic(() => import("./components/Footer"));

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white">
      <Navbar />

      <main className="pt-20">
        <section id="home" className="relative py-16 px-4 overflow-hidden bg-gray-50 dark:bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c41e2e]/10 rounded-full text-[#c41e2e] font-medium text-sm mb-6">
                <span className="w-2 h-2 bg-[#c41e2e] rounded-full"></span>
                Jasa Pembuatan Website & Aplikasi Mobile
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Dari <span className="text-[#c41e2e]">Mumet</span>, Jadi <span className="text-[#c41e2e]">Beres</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                Bikin produk digital yang rapi, cepat, dan siap jual. Website, Mobile App, AI/ML, IoT, dan UI/UX dari ide sampai launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://mumetin.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#c41e2e] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#a01828] transition-colors">
                  Hubungi Kami
                </a>
                <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center justify-center gap-2 border-2 border-[#c41e2e] text-[#c41e2e] px-8 py-4 rounded-full font-semibold hover:bg-[#c41e2e] hover:text-white transition-colors">
                  Lihat Projek
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 px-4 bg-white dark:bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c41e2e]/10 rounded-full text-[#c41e2e] font-medium text-sm mb-4">
                Portfolio Kami
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Projek <span className="text-[#c41e2e]"> Terbaru</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                Berikut adalah beberapa projek yang telah kami selesaikan untuk klien dari berbagai industri.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <ServiceIcons services={services} />

        <section id="contact" className="py-24 px-4 bg-gradient-to-r from-[#c41e2e] to-[#a01828]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Siap Mengembangkan Bisnis Anda?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Hubungi kami sekarang untuk konsultasi gratis dan mendapatkan penawaran terbaik untuk projek Anda.
            </p>
            <a href="https://mumetin.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-white text-[#c41e2e] px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Mulai Proyek
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
