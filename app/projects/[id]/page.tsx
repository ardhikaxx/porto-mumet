import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data/projects";
import { notFound } from "next/navigation";

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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#c41e2e] to-[#a01828] rounded-xl flex items-center justify-center shadow-lg shadow-[#c41e2e]/30 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Porto Mumet.in
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              {[
                { label: "Home", href: "/" },
                { label: "Projek", href: "/#projects" },
                { label: "Layanan", href: "/#services" },
                { label: "Kontak", href: "/#contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-gray-600 hover:text-[#c41e2e] hover:bg-[#c41e2e]/5 rounded-lg transition-all duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#c41e2e] transition-colors mb-6 group"
        >
          <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#c41e2e]/10 flex items-center justify-center transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="font-medium">Kembali ke Projek</span>
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="relative h-72 md:h-[450px] bg-gradient-to-br from-gray-100 to-gray-200">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            
            <div className="absolute top-4 right-4 flex gap-2">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-md text-white font-semibold rounded-full text-sm">
                {project.year}
              </span>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-full">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#c41e2e]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#c41e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Deskripsi Projek</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  {project.description}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#c41e2e] to-[#a01828] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-[#c41e2e]/30 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Lihat Projek Langsung
                  </a>
                )}
              </div>

              <div className="md:col-span-1">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c41e2e]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#c41e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900">Teknologi</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:border-[#c41e2e] hover:text-[#c41e2e] transition-colors cursor-default"
                      >
                        {tech}
                      </span>
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
            <div className="w-12 h-12 rounded-xl bg-[#c41e2e]/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#c41e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Projek Lainnya</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.id}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#c41e2e]/30"
                >
                  <div className="relative h-44 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-md">
                        {relatedProject.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#c41e2e] transition-colors line-clamp-2">
                      {relatedProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {relatedProject.technologies.slice(0, 2).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>

      <section className="py-20 px-4 bg-gradient-to-r from-[#c41e2e] to-[#a01828] mt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Tertarik Dengan Projek Similar?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Kami siap membantu Anda membuat projek digital yang profesional dan moderno.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://mumetin.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-[#c41e2e] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
              Hubungi Kami
            </a>
            <a
              href="/#projects"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#c41e2e] transition-colors"
            >
              Lihat Semua Projek
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#c41e2e] to-[#a01828] rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="text-xl font-bold">Porto Mumet.in</span>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2026 Porto Mumet.in. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
