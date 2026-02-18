import Image from "next/image";
import { projects } from "./data/projects";
import { services } from "./data/services";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#c41e2e] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Porto Mumet.in</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-600 hover:text-[#c41e2e] transition-colors">Home</a>
              <a href="#projects" className="text-gray-600 hover:text-[#c41e2e] transition-colors">Projek</a>
              <a href="#services" className="text-gray-600 hover:text-[#c41e2e] transition-colors">Layanan</a>
              <a href="#contact" className="text-gray-600 hover:text-[#c41e2e] transition-colors">Kontak</a>
            </nav>
          </div>
        </div>
      </header>

      <section id="home" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Dari <span className="text-[#c41e2e]">Mumet</span>, Jadi <span className="text-[#c41e2e]">Beres</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Bikin produk digital yang rapi, cepat, dan siap jual. Website, Mobile App, AI/ML, IoT, dan UI/UX dari ide sampai launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-[#c41e2e] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a01828] transition-colors">
                Hubungi Kami
              </a>
              <a href="#projects" className="border-2 border-[#c41e2e] text-[#c41e2e] px-8 py-3 rounded-full font-semibold hover:bg-[#c41e2e] hover:text-white transition-colors">
                Lihat Projek
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Projek <span className="text-[#c41e2e]">Kami</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berikut adalah beberapa projek yang telah kami selesaikan untuk klien dari berbagai industri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#c41e2e]/30"
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#c41e2e] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#c41e2e]/10 text-[#c41e2e] text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan <span className="text-[#c41e2e]">Kami</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan pengembangan digital untuk membantu bisnis Anda berkembang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#c41e2e]/30 cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 w-14 h-14 bg-[#c41e2e]/10 rounded-xl flex items-center justify-center group-hover:bg-[#c41e2e] transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-[#c41e2e] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#c41e2e] transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
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

      <section id="contact" className="py-20 px-4 bg-[#c41e2e]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Membantu Projek Anda?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan mendapatkan penawaran terbaik untuk projek Anda.
          </p>
          <a
            href="mailto:hello@devstudio.com"
            className="inline-block bg-white text-[#c41e2e] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Mulai Proyek
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#c41e2e] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="text-xl font-bold">Porto Mumet.in</span>
              </div>
              <p className="text-gray-400 text-sm">
                Partner terpercaya untuk solusi digital bisnis Anda.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Website Development</li>
                <li>Mobile App</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Tentang Kami</li>
                <li>Kontak</li>
                <li>Karir</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>hello@devstudio.com</li>
                <li>+62 123 4567 890</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Porto Mumet.in. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
