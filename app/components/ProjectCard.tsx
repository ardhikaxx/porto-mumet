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
        className="block bg-white dark:bg-[#171717] rounded-2xl border border-gray-100 dark:border-[#262626]"
      >
        <div className="relative h-44">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
          
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 bg-white/95 text-gray-800 text-xs font-bold rounded-md">
              {project.year}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-bold text-white text-sm line-clamp-2">
              {project.title}
            </h3>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 2).map((tech, index) => (
              <span key={index} className="px-2 py-0.5 bg-[#c41e2e]/10 text-[#c41e2e] text-[10px] font-semibold rounded">
                {tech}
              </span>
            ))}
            {project.technologies.length > 2 && (
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-[#262626] text-gray-500 text-[10px] font-medium rounded">
                +{project.technologies.length - 2}
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
      className="block bg-white dark:bg-[#171717] rounded-3xl border border-gray-100 dark:border-[#262626]"
    >
      <div className="relative h-56">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-50" />
      
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1.5 bg-white/95 text-gray-800 text-xs font-bold rounded-lg">
            {project.year}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {project.title}
        </h3>
        
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="px-2.5 py-1 bg-[#c41e2e]/10 text-[#c41e2e] text-xs font-semibold rounded-md">
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
    </Link>
  );
}
