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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#c41e2e] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Porto Mumet.in</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-600 hover:text-[#c41e2e] transition-colors">Home</Link>
              <Link href="/#projects" className="text-gray-600 hover:text-[#c41e2e] transition-colors">Projek</Link>
              <Link href="/#services" className="text-gray-600 hover:text-[#c41e2e] transition-colors">Layanan</Link>
              <Link href="/#contact" className="text-gray-600 hover:text-[#c41e2e] transition-colors">Kontak</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#c41e2e] transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Projek
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-[#c41e2e] text-white text-sm font-medium rounded-full">
                  {project.year}
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Deskripsi Projek</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Teknologi yang Digunakan</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#c41e2e]/10 text-[#c41e2e] font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.link && (
              <div className="pt-6 border-t border-gray-100">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#c41e2e] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#a01828] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Lihat Projek
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects
            .filter((p) => p.id !== project.id)
            .slice(0, 3)
            .map((relatedProject) => (
              <Link
                key={relatedProject.id}
                href={`/projects/${relatedProject.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <Image
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#c41e2e] transition-colors line-clamp-1">
                    {relatedProject.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{relatedProject.year}</p>
                </div>
              </Link>
            ))}
        </div>
      </main>

      <section id="contact" className="py-16 px-4 bg-[#c41e2e] mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Tertarik Dengan Projek Ini?
          </h2>
          <p className="text-white/80 mb-6">
            Hubungi kami untuk membuat projek serupa atau projek custom lainnya.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-white text-[#c41e2e] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-10 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>&copy; 2026 Porto Mumet.in. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
