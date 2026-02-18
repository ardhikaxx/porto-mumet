import Image from "next/image";
import Link from "next/link";
import { projects } from "./data/projects";
import { services } from "./data/services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white">
      <Navbar />

      <main className="pt-20">
        <section className="relative py-16 px-4 overflow-hidden bg-gray-50 dark:bg-[#0a0a0a]">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 dark:from-[#0a0a0a] via-white dark:via-[#111111] to-gray-50 dark:to-[#0a0a0a]"></div>
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
                <a href="https://mumetin.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#c41e2e] to-[#a01828] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-[#c41e2e]/30 transition-all duration-300 transform hover:-translate-y-1">
                  Hubungi Kami
                </a>
                <a href="#projects" className="inline-flex items-center justify-center gap-2 border-2 border-[#c41e2e] text-[#c41e2e] px-8 py-4 rounded-full font-semibold hover:bg-[#c41e2e] hover:text-white transition-all duration-300">
                  Lihat Projek
                </a>
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
                <Link
                  href={`/projects/${project.id}`}
                  key={project.id}
                  className="group bg-white dark:bg-[#171717] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-[#262626] hover:border-[#c41e2e]/50"
                >
                  <div className="relative h-52 bg-gradient-to-br from-gray-100 dark:from-[#262626] to-gray-50 dark:to-[#171717] overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-gray-900/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        {project.year}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#c41e2e] transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-[#262626] text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-[#c41e2e]/20 text-[#c41e2e] text-xs font-medium rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
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
                  <div key={service.id} className="group bg-white dark:bg-[#171717] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-[#262626] hover:border-[#c41e2e]/50 cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="shrink-0 w-14 h-14 bg-gradient-to-br from-[#c41e2e]/20 to-[#c41e2e]/5 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#c41e2e] group-hover:to-[#a01828] transition-all duration-300">
                        <IconComponent className="w-7 h-7 text-[#c41e2e] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#c41e2e] transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-4 bg-gradient-to-r from-[#c41e2e] to-[#a01828] relative overflow-hidden">
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
