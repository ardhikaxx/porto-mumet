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

export default function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const isCompact = variant === "compact";

  if (isCompact) {
    return (
      <Link
        href={`/projects/${project.id}`}
        className="group relative bg-white dark:bg-[#171717] rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-[#262626] hover:border-[#c41e2e]"
      >
        <div className="relative h-44 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-bold rounded-md shadow-sm">
              {project.year}
            </span>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-[#c41e2e] transition-colors line-clamp-2 text-sm">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.technologies.slice(0, 2).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-[#c41e2e]/10 text-[#c41e2e] text-[10px] font-semibold rounded"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 2 && (
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-[#262626] text-gray-500 dark:text-gray-400 text-[10px] font-medium rounded">
                +{project.technologies.length - 2}
              </span>
            )}
          </div>
        </div>

        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-[#c41e2e]/20 transition-all duration-300 pointer-events-none" />
      </Link>
    );
  }

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group relative bg-white dark:bg-[#171717] rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-[#262626] hover:border-[#c41e2e]"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
        
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-bold rounded-lg shadow-sm">
            {project.year}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#c41e2e] text-white text-sm font-semibold rounded-lg shadow-lg shadow-[#c41e2e]/30">
            <span>Lihat Detail</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#c41e2e] transition-colors line-clamp-2 leading-snug">
          {project.title}
        </h3>
        
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 bg-[#c41e2e]/10 text-[#c41e2e] text-xs font-semibold rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2.5 py-1 bg-[#c41e2e]/10 text-[#c41e2e] text-xs font-semibold rounded-md">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>

      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent group-hover:ring-[#c41e2e]/20 transition-all duration-300 pointer-events-none" />
    </Link>
  );
}
