"use client";

import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const projects = [
  { title: "PORTFOLIO", url: "https://github.com/AryaEm/Arya-Maulana" },
  { title: "SPOTIFY CLONE", url: "#" },
  { title: "ZENITH WEB", url: "https://github.com/AryaEm/zenith-web" },
  { title: "VIRTUAL MUSEUM", url: "https://github.com/AryaEm/Invention-Udayana" },
  { title: "ZENITH API", url: "https://github.com/AryaEm/Zenithdb" },
];

export default function ProjectSection() {
  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-dvh w-full relative flex justify-center items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 teal-blur"></div>

      <div className="relative z-10 flex flex-col gap-6 text-center bg-transparent w-full px-6 items-center">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <ProjectItem
              key={index}
              title={project.title}
              url={project.url}
              justify={isEven ? "justify-start" : "justify-end"}
              delay={index * 0.2}
              variants={itemVariants}
            />
          );
        })}

        <FadeInText />
      </div>
    </section>
  );
}

// Komponen untuk satu project
function ProjectItem({ title, url, justify, delay, variants }: any) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ delay }}
      className={`flex w-full md:w-2/5 bg-transparent ${justify}`}
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 group w-fit px-6 relative bg-transparent tracking-wider text-gray-400 md:text-5xl text-4xl font-bold hover:text-white transition-all duration-300 hover:scale-110 Anton"
      >
        {title}
        <BiSolidRightTopArrowCircle className="w-5 h-5 text-teal-400 bg-transparent absolute right-0 top-0 group-hover:translate-x-2 transition-transform" />
      </Link>
    </motion.div>
  );
}

// Paragraf deskripsi bawah
function FadeInText() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.p
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        },
      }}
      initial="hidden"
      animate={controls}
      className="mt-10 max-w-xl text-sm text-gray-300 mx-auto bg-transparent text-center"
    >
      Here are some of the projects I’ve worked on—built with clean code,
      creativity, and a focus on great user experience. Always experimenting,
      always improving. Take a look!
    </motion.p>
  );
}
