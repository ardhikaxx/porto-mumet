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
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#c41e2e] transition-all duration-300 mb-8 group">
          <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-[#262626] flex items-center justify-center group-hover:bg-[#c41e2e]/20 transition-all duration-300">
            <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="font-medium">Kembali ke Projek</span>
        </Link>

        <div className="relative mb-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#c41e2e]/10 via-[#c41e2e]/5 to-transparent rounded-3xl blur-3xl opacity-50"></div>
          <div className="relative bg-white dark:bg-[#171717] rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-[#262626]">
            <div className="relative h-80 md:h-[500px] bg-gradient-to-br from-gray-100 dark:from-[#262626] to-gray-50 dark:to-[#171717]">
              <Image src={project.image} alt={project.title} fill className="object-cover" sizes="100vw" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute top-6 right-6 flex items-center gap-3">
                <span className="px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold rounded-xl text-sm shadow-lg">{project.year}</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm font-medium rounded-xl hover:bg-white/25 transition-all duration-300 cursor-default">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-4 py-2 bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm font-medium rounded-xl">+{project.technologies.length - 4}</span>
                  )}
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">{project.title}</h1>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-8">
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#c41e2e] to-[#c41e2e]/50 rounded-full"></div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c41e2e] to-[#a01828] flex items-center justify-center shadow-xl shadow-[#c41e2e]/30">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Deskripsi Projek</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">Informasi lengkap tentang projek</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-loose text-lg">{project.description}</p>
                  </div>
                  
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c41e2e] to-[#9a1522] text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl hover:shadow-[#c41e2e]/40 hover:scale-105 transition-all duration-300 group">
                      <span>Lihat Projek Langsung</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
                
                <div className="space-y-5">
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-[#262626] dark:to-[#1f1f1f] rounded-2xl p-6 border border-gray-200 dark:border-[#333]">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-[#c41e2e]/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#c41e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg">Teknologi</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-2 bg-white dark:bg-[#171717] border border-gray-200 dark:border-[#333] text-gray-700 dark:text-gray-300 text-sm font-medium rounded-xl hover:border-[#c41e2e] hover:text-[#c41e2e] hover:bg-[#c41e2e]/5 transition-all duration-300 cursor-default">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#c41e2e] to-[#9a1522] rounded-2xl p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    <div className="relative flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white/80 text-sm font-medium">Tahun Dibuat</p>
                        <p className="text-3xl font-bold">{project.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c41e2e] to-[#a01828] flex items-center justify-center shadow-xl shadow-[#c41e2e]/30">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Projek Lainnya</h2>
              <p className="text-gray-500 dark:text-gray-400">Jelajahi projek lainnya yang mungkin menarik</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.filter((p) => p.id !== project.id).slice(0, 3).map((relatedProject) => (
              <ProjectCard key={relatedProject.id} project={relatedProject} variant="compact" />
            ))}
          </div>
        </div>
      </main>

      <section className="py-24 px-4 bg-gradient-to-r from-[#c41e2e] to-[#9a1522] mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tertarik Dengan Projek Similar?</h2>
          <p className="text-white/80 mb-8 text-lg max-w-xl mx-auto">Kami siap membantu Anda membuat projek digital yang profesional dan moderno.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://mumetin.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#c41e2e] px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl">Hubungi Kami</a>
            <Link href="/#projects" className="inline-block border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-[#c41e2e] transition-all duration-300">Lihat Semua Projek</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
