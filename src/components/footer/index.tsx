"use client"

import { FaSquareInstagram, FaSquareGithub, FaSquareWhatsapp, FaSquareXTwitter } from "react-icons/fa6";
import AnimatedInView from "../hero/animated";

export default function FooterSection() {
    const openLink = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <section className="md:h-dvh h-[70dvh] w-full footer-grid-bg flex md:items-center pt-20 md:pt-0 justify-center relative">

            <div className="absolute left-8 top-1/2 -translate-y-1/2 text-[14vw] font-bold text-white/60 hidden md:block">[</div>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[14vw] font-bold text-white/60 hidden md:block">]</div>

            <AnimatedInView y={40} delay={0.2} className="text-center z-10 bg-transparent md:w-1/4 w-2/4">
                <h1 className="text-7xl md:text-8xl tracking-wide font-extrabold text-white Anton leading-tight text-start bg-transparent">
                    Let's<br />
                    <span className="block bg-transparent text-end">Get In</span>
                    Touch
                </h1>
            </AnimatedInView>

            <AnimatedInView y={40} delay={0.4} className="absolute bottom-10 z-10 bg-transparent w-full">
                <div className="flex justify-center gap-6 md:gap-12 text-2xl text-white/50 w-full bg-transparent">
                    <button onClick={() => openLink("https://wa.me/6281804748037")} aria-label="Whatsapp"
                        className="hover:text-white hover:scale-110 hover:-translate-y-1 duration-300 transition-all">
                        <FaSquareWhatsapp />
                    </button>
                    <button onClick={() => openLink("#")} aria-label="Twitter"
                        className="hover:text-white hover:scale-110 hover:-translate-y-1 duration-300 transition-all">
                        <FaSquareXTwitter />
                    </button>
                    <button onClick={() => openLink("https://github.com/AryaEm")} aria-label="GitHub"
                        className="hover:text-white hover:scale-110 hover:-translate-y-1 duration-300 transition-all">
                        <FaSquareGithub />
                    </button>
                    <button onClick={() => openLink("https://instagram.com/aryaa.em")} aria-label="Instagram"
                        className="hover:text-white hover:scale-110 hover:-translate-y-1 duration-300 transition-all">
                        <FaSquareInstagram />
                    </button>
                </div>
            </AnimatedInView>


        </section>
    );
}
