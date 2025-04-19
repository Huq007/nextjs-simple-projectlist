import { BackgroundGradient } from "@/utils/background-gradient";
import projectData from "../data/product_list.json";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  isFeatured: boolean;
  techStack: string[];
  url: string;
}

function FeaturedProjects() {
  const featuredProjects = projectData.projects.filter(
    (project: Project) => project.isFeatured
  );

  return (
    <div>
      <div className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-50 text-center mb-4">
        Featured Projects
      </div>
      <div className="ml-10 mr-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
        {featuredProjects.map((project: Project) => (
          <BackgroundGradient
            key={project.id}
            className="rounded-[22px] p-4 sm:p-5 bg-white dark:bg-zinc-900"
          >
            <Image
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              height="00"
              width="400"
              className="object-contain rounded-[22px]"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {project.title}
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
              {project.description}
            </p>
            <Link href={project.url} target="_blank">
              <button className="rounded-full pl-4 pr-4 py-2 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>See Details </span>
              </button>
            </Link>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProjects;
