import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectCard from "../../components/ProjectCard";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));
  
  if (!project) {
    return { title: "Projek Tidak Ditemukan" };
  }
  
  return {
    title: `${project.title} - Porto Mumet.in`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));
  
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white">
      <Navbar />

      <main className="pt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#c41e2e] transition-colors mb-6 group">
          <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-[#262626] group-hover:bg-[#c41e2e]/20 flex items-center justify-center transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="font-medium">Kembali ke Projek</span>
        </Link>

        <div className="bg-white dark:bg-[#171717] rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-[#262626]">
          <div className="relative h-72 md:h-[450px] bg-gradient-to-br from-gray-100 dark:from-[#262626] to-gray-50 dark:to-[#171717]">
            <Image src={project.image} alt={project.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute top-4 right-4 flex gap-2">
              <span className="px-4 py-2 bg-gray-900/60 dark:bg-[#0a0a0a]/60 backdrop-blur-md text-white font-semibold rounded-full text-sm">{project.year}</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full">{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full">+{project.technologies.length - 3}</span>
                )}
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">{project.title}</h1>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#c41e2e]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#c41e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Deskripsi Projek</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-8">{project.description}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c41e2e] to-[#a01828] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-[#c41e2e]/30 transition-all duration-300 transform hover:-translate-y-1">
                    Lihat Projek Langsung
                  </a>
                )}
              </div>
              <div className="md:col-span-1">
                <div className="bg-gray-50 dark:bg-[#262626]/50 rounded-2xl p-6 border border-gray-200 dark:border-[#262626]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c41e2e]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#c41e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Teknologi</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1.5 bg-gray-100 dark:bg-[#171717] border border-gray-200 dark:border-[#262626] text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:border-[#c41e2e] hover:text-[#c41e2e] transition-colors cursor-default">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#c41e2e] to-[#a01828] rounded-2xl p-6 mt-4 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold">Tahun</span>
                  </div>
                  <p className="text-3xl font-bold">{project.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#c41e2e]/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#c41e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Projek Lainnya</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.filter((p) => p.id !== project.id).slice(0, 3).map((relatedProject) => (
              <ProjectCard key={relatedProject.id} project={relatedProject} variant="compact" />
            ))}
          </div>
        </div>
      </main>

      <section className="py-20 px-4 bg-gradient-to-r from-[#c41e2e] to-[#a01828] mt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Tertarik Dengan Projek Similar?</h2>
          <p className="text-white/80 mb-8 text-lg">Kami siap membantu Anda membuat projek digital yang profesional dan moderno.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://mumetin.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#c41e2e] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">Hubungi Kami</a>
            <a href="/#projects" className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#c41e2e] transition-colors">Lihat Semua Projek</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
