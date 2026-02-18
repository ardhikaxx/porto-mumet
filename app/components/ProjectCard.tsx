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
        className="group bg-white dark:bg-[#171717] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-[#262626] hover:border-[#c41e2e]/50"
      >
        <div className="relative h-44 bg-gradient-to-br from-gray-100 dark:from-[#262626] to-gray-50 dark:to-[#171717] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 bg-gray-900/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-medium rounded-md">
              {project.year}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#c41e2e] transition-colors line-clamp-2">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 2).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-gray-100 dark:bg-[#262626] text-gray-600 dark:text-gray-400 text-xs rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group bg-white dark:bg-[#171717] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-[#262626] hover:border-[#c41e2e]/50"
    >
      <div className="relative h-52 bg-gradient-to-br from-gray-100 dark:from-[#262626] to-gray-50 dark:to-[#171717] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
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
            <span
              key={idx}
              className="px-3 py-1 bg-gray-100 dark:bg-[#262626] text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
            >
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
  );
}
