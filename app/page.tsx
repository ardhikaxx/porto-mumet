"use client";

import { projects } from "./data/projects";
import { services } from "./data/services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white">
      <Navbar />

      <main className="pt-20">
        <section className="relative py-16 px-4 overflow-hidden bg-gray-50 dark:bg-[#0a0a0a]">
          <div className="absolute inset-0 bg-linear-to-br from-gray-50 dark:from-[#0a0a0a] via-white dark:via-[#111111] to-gray-50 dark:to-[#0a0a0a]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNjNDFlMmUiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 dark:opacity-30"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c41e2e]/10 rounded-full text-[#c41e2e] font-medium text-sm mb-6">
                <span className="w-2 h-2 bg-[#c41e2e] rounded-full animate-pulse"></span>
                Jasa Pembuatan Website & Aplikasi Mobile
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Dari <span className="text-[#c41e2e]">Mumet</span>, Jadi <span className="text-[#c41e2e]">Beres</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                Bikin produk digital yang rapi, cepat, dan siap jual. Website, Mobile App, AI/ML, IoT, dan UI/UX dari ide sampai launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://mumetin.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-[#c41e2e] to-[#a01828] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-[#c41e2e]/30 transition-all duration-300 transform hover:-translate-y-1">
                  Hubungi Kami
                </a>
                <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center justify-center gap-2 border-2 border-[#c41e2e] text-[#c41e2e] px-8 py-4 rounded-full font-semibold hover:bg-[#c41e2e] hover:text-white transition-all duration-300">
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

        <section id="services" className="py-24 px-4 bg-gray-50 dark:bg-[#111111]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c41e2e]/10 rounded-full text-[#c41e2e] font-medium text-sm mb-4">
                Apa yang Kami Tawarkan
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Layanan <span className="text-[#c41e2e]">Kami</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                Kami menyediakan berbagai layanan pengembangan digital untuk membantu bisnis Anda berkembang.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div key={service.id} className="group relative bg-white dark:bg-[#171717] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-[#262626] hover:border-[#c41e2e]/30 cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c41e2e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#c41e2e] to-[#a01828] rounded-2xl shadow-lg shadow-[#c41e2e]/30 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute top-6 right-6 w-12 h-12 bg-[#c41e2e]/10 rounded-full blur-xl group-hover:bg-[#c41e2e]/20 transition-all duration-300"></div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#c41e2e] transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-[#c41e2e] font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span>Pelajari selengkapnya</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-4 bg-linear-to-r from-[#c41e2e] to-[#a01828] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Siap Mengembangkan Bisnis Anda?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Hubungi kami sekarang untuk konsultasi gratis dan mendapatkan penawaran terbaik untuk projek Anda.
            </p>
            <a href="https://mumetin.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-white text-[#c41e2e] px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-xl">
              Mulai Proyek
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
