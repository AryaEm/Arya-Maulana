"use client"

import { FaSquareInstagram, FaSquareGithub, FaSquareWhatsapp, FaSquareXTwitter } from "react-icons/fa6";

export default function FooterSection() {

    const openLink = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <>
            <section className="min-h-dvh w-full footer-grid-bg flex items-center justify-center relative">

                <div className="absolute left-8 top-1/2 -translate-y-1/2 text-[14vw] font-bold text-white/60 bg-transparent">[</div>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[14vw] font-bold text-white/60 bg-transparent">]</div>


                <div className="text-center z-10 bg-transparent md:w-1/4 w-2/4">
                    <h1 className="text-7xl md:text-8xl tracking-wide font-extrabold bg-transparent leading-tight text-white Anton text-start">
                        Lets<br />
                        <span className="text-end bg-transparent float-end ">Get In</span><br />
                        Touch
                    </h1>
                </div>

                <div className="flex gap-12 mt-10 z-10 text-2xl text-white/50 absolute bg-transparent left-1/2 -translate-x-1/2 bottom-10">
                    <button onClick={() => openLink("https://wa.me/6281804748037")} aria-label="Whatsapp"
                        className="hover:text-white hover:scale-110 hover:-translate-y-1 duration-300 transition-all">
                        <FaSquareWhatsapp />
                    </button>
                    <button onClick={() => openLink("#")} className="hover:text-white hover:scale-110 hover:-translate-y-1 duration-300 transition-all">
                        <FaSquareXTwitter />
                    </button>
                    <button onClick={() => openLink("https://github.com/AryaEm")} className="hover:text-white hover:scale-110 hover:-translate-y-1 duration-300 transition-all">
                        <FaSquareGithub />
                    </button>
                    <button onClick={() => openLink("https://instagram.com/aryaa.em")} className="hover:text-white hover:scale-110 hover:-translate-y-1 duration-300 transition-all">
                        <FaSquareInstagram />
                    </button>
                </div>
            </section>
        </>
    )
}