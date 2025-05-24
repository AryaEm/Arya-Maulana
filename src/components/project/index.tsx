import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import Link from "next/link";

const projects = [
  { title: "PORTFOLIO", url: "https://github.com/AryaEm/Arya-Maulana" },
  { title: "SPOTIFY CLONE", url: "#" },
  { title: "ZENITH WEB", url: "https://github.com/AryaEm/zenith-web" },
  { title: "VIRTUAL MUSEUM", url: "https://github.com/AryaEm/Invention-Udayana" },
  { title: "ZENITH API", url: "https://github.com/AryaEm/Zenithdb" },
];

export default function ProjectSection() {
  return (
    <section className="min-h-dvh w-full relative flex justify-center items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 teal-blur"></div>

      <div className="relative z-10 flex flex-col gap-6 text-center bg-transparent w-full px-6 items-center">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex w-2/5 bg-transparent ${isEven ? "justify-start" : "justify-end"}`}
            >
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 group w-fit px-6 relative bg-transparent tracking-wider text-gray-400 text-5xl font-bold hover:text-white transition-all duration-300 hover:scale-110 Anton`}
              >
                {project.title}
                <BiSolidRightTopArrowCircle className="w-5 h-5 text-teal-400 bg-transparent absolute right-0 top-0 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          );
        })}

        {/* Description */}
        <p className="mt-10 max-w-xl text-sm text-gray-300 mx-auto bg-transparent text-center">
          Here are some of the projects I’ve worked on—built with clean code,
          creativity, and a focus on great user experience. Always experimenting,
          always improving. Take a look!
        </p>
      </div>
    </section>
  );
}
