import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  year: number;
}

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "compact";
}

const techColors: Record<string, string> = {
  Laravel: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  PHP: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
  "Bootstrap": "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
  CSS: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  JavaScript: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  React: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
  "Next.js": "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400",
  Flutter: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
  Dart: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
  Tailwind: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  Python: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "Naive Bayes ML": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  Firebase: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  GSAP: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
};

function getTechColor(tech: string): string {
  return techColors[tech] || "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
}

export default function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const isCompact = variant === "compact";

  if (isCompact) {
    return (
      <Link
        href={`/projects/${project.id}`}
        className="group relative bg-white dark:bg-[#171717] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-[#262626] hover:border-[#c41e2e]/50"
      >
        <div className="relative h-48 bg-gradient-to-br from-gray-100 dark:from-[#262626] to-gray-50 dark:to-[#171717] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute top-3 right-3 flex items-center gap-2">
            <span className="px-3 py-1.5 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md text-gray-900 dark:text-white text-xs font-bold rounded-lg shadow-lg">
              {project.year}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#c41e2e] text-white text-sm font-semibold rounded-full shadow-lg">
              <span>Lihat Detail</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#c41e2e] transition-colors line-clamp-2 text-base">
            {project.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs line-clamp-2 mb-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className={`px2 py-0.5 text-xs font-medium rounded-md ${getTechColor(tech)}`}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-0.5 bg-[#c41e2e]/10 text-[#c41e2e] text-xs font-medium rounded-md">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group relative bg-white dark:bg-[#171717] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-[#262626] hover:border-[#c41e2e]/50"
    >
      <div className="relative h-56 bg-gradient-to-br from-gray-100 dark:from-[#262626] to-gray-50 dark:to-[#171717] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span className="px-3 py-1.5 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md text-gray-900 dark:text-white text-xs font-bold rounded-lg shadow-lg">
            {project.year}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#c41e2e] text-white text-sm font-semibold rounded-full shadow-xl shadow-[#c41e2e]/30">
            <span>Lihat Detail Projek</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>

        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          <div className="w-10 h-10 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-[#c41e2e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#c41e2e] transition-colors line-clamp-2 leading-tight">
            {project.title}
          </h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 text-xs font-semibold rounded-lg ${getTechColor(tech)}`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-[#c41e2e]/10 text-[#c41e2e] text-xs font-semibold rounded-lg">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
        <div className="w-8 h-8 rounded-full bg-[#c41e2e] flex items-center justify-center shadow-lg">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
