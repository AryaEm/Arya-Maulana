"use client";

import Image from "next/image";
import AboutImg from "../../../public/aboutprofile.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaSquareInstagram, FaSquareGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import AnimatedInView from "../hero/animated";

export default function AboutSection() {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section className="min-h-dvh w-full border flex items-center my-10 relative about-grid-bg secondary-bg rounded-3xl overflow-hidden overflow-x-hidden">

      <AnimatedInView delay={0} x={0} y={20} className="absolute top-6 right-6 z-[11] bg-transparent Poppins hidden md:block group">
        <button onClick={() => openLink("https://instagram.com/aryaa.em")} className="text-sm flex items-center gap-2 cursor-pointer font-semibold text-neutral-900 underline bg-transparent underline-offset-4 hover:text-neutral-700 transition">
          Let&apos;s Connect <MdOutlineArrowOutward className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-all bg-transparent text-xl teal-text" />
        </button>
      </AnimatedInView>

      <AnimatedInView delay={0} x={0} y={20} className="absolute left-6 top-20 z-[11] bg-transparent Poppins block md:hidden">
        <button onClick={() => openLink("https://instagram.com/aryaa.em")} className="text-sm flex items-center gap-2 cursor-pointer font-semibold text-neutral-900 underline bg-transparent underline-offset-4 hover:text-neutral-700 transition">
          Let&apos;s Connect <MdOutlineArrowOutward className="bg-transparent text-xl teal-text" />
        </button>
      </AnimatedInView>

      <div className="h-dvh w-full bg-transparent relative z-10 flex flex-col text-white overflow-hidden rounded-xl ">

        <AnimatedInView delay={0.1} x={-50} className="text-4xl md:text-7xl w-fit font-extrabold md:tracking-tight text-neutral-600 bg-transparent md:h-1/2 h-[44%] ml-6 md:mt-6 mt-10">
          <p className="md:block hidden bg-transparent md:leading-[3.8rem] leading-8 text-about-grad">GET TO <br />KNOW ME</p>
          <p className="md:hidden block bg-transparent md:leading-[3.8rem] leading-8 tracking-tighter text-about-grad">GET TO KNOW ME</p>
        </AnimatedInView>

        <AnimatedInView delay={0.2} x={0} y={0} className="absolute inset-0 md:flex hidden items-center bg-transparent justify-center text-5xl sm:text-6xl font-bold text-neutral-400/70 uppercase tracking-wider z-0">
          <div className="whitespace-nowrap bg-transparent">React - Node - Express - Typescript - Vue</div>
        </AnimatedInView>

        <AnimatedInView delay={0.3} x={0} y={30} className="w-full flex justify-center items-center md:my-6 my-10 z-10 bg-transparent">
          <div className="rounded-2xl md:h-[36vh] md:w-[34vw] w-[85vw] bg-transparent">
            <Image
              src={AboutImg}
              alt="About Me"
              width={400}
              height={200}
              className="rounded-xl object-cover object-center h-full w-full custom-shadow"
              priority
            />
          </div>
        </AnimatedInView>


        <div className="h-1/2 bg-transparent flex md:flex-row flex-col-reverse md:items-end justify-between ">

          <AnimatedInView delay={0.4} x={-50} className="flex items-center gap-4 text-2xl text-neutral-900 z-10 mt-4 bg-transparent ml-6 mb-6">
            <button className="hover:-translate-y-1 hover:scale-110 transition-all duration-300 bg-transparent"><FaSquareXTwitter className="bg-transparent" /></button>
            <button onClick={() => openLink("https://github.com/AryaEm")} className="hover:-translate-y-1 hover:scale-110 transition-all duration-300 bg-transparent"><FaSquareGithub className="bg-transparent" /></button>
            <button className="bg-transparent"><FaLinkedin className="hover:-translate-y-1 hover:scale-110 transition-all duration-300 bg-transparent" /></button>
            <button onClick={() => openLink("https://instagram.com/aryaa.em")} className="hover:-translate-y-1 hover:scale-110 transition-all duration-300 bg-transparent"><FaSquareInstagram className="bg-transparent" /></button>
          </AnimatedInView>

          <AnimatedInView delay={0.5} x={50} className="md:w-1/2 mx-6 md:mx-6 text-sm mb-6 mr-6 font-medium text-neutral-800 z-10 bg-transparent text-justify ">
            <p className="bg-transparent">
              Code, design, and a little bit of chaos—that&apos;s me in a nutshell. I&apos;m a full-stack developer in the making, currently crafting cool things with Next.js, Node.js/Express.js, and Firebase. Whether it&apos;s building a food ordering system, designing sleek web experiences, or debugging at 2 AM, I&apos;m all about pushing limits and creating something awesome. Outside of coding, I&apos;m either diving into tech competitions, exploring new design trends, or trying (and failing) to bulk up while still eating like a programmer. My goal? To build digital solutions that actually make an impact—and to have fun doing it.
            </p>
          </AnimatedInView>

        </div>
      </div>
    </section>
  );
}
