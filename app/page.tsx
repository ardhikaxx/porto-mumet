import { projects } from "./data/projects";
import { services } from "./data/services";
import dynamic from "next/dynamic";
import ProjectCard from "./components/ProjectCard";
import ServiceIcons from "./components/ServiceIcons";

const Navbar = dynamic(() => import("./components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("./components/Footer"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white">
      <Navbar />

      <main className="pt-20">
        <section className="py-16 px-4 bg-gray-50 dark:bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Dari <span className="text-[#c41e2e]">Mumet</span>, Jadi <span className="text-[#c41e2e]">Beres</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
              Bikin produk digital yang rapi, cepat, dan siap jual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://mumetin.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-[#c41e2e] text-white px-8 py-4 rounded-full font-semibold">
                Hubungi Kami
              </a>
              <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="border-2 border-[#c41e2e] text-[#c41e2e] px-8 py-4 rounded-full font-semibold">
                Lihat Projek
              </button>
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 px-4 bg-white dark:bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Projek <span className="text-[#c41e2e]">Terbaru</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <ServiceIcons services={services} />

        <section id="contact" className="py-24 px-4 bg-[#c41e2e]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Siap Mengembangkan Bisnis Anda?
            </h2>
            <a href="https://mumetin.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#c41e2e] px-10 py-5 rounded-full font-semibold">
              Mulai Proyek
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
