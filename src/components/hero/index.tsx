"use client";

import Image from "next/image";
import Arya from "../../../public/arya.jpg";
import AnimatedInView from "./animated";
import { motion } from "framer-motion";

export default function HeroSection() {
    const openLink = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <div className="min-h-dvh w-full hero-grid-bg relative z-10 flex flex-col items-center justify-center text-white px-4 overflow-hidden overflow-x-hidden">

            <div className="flex items-center md:justify-between justify-center w-full max-w-5xl md:mt-20 mt-8 bg-transparent">

                <AnimatedInView x={-50} className="bg-transparent">
                    <div className="text-left hidden md:block bg-transparent cursor-default">
                        <p className="text-6xl bg-transparent font-bold Antonio">20+</p>
                        <p className="text-sm text-gray-300 Poppins mt-px bg-transparent">Awards</p>
                    </div>
                </AnimatedInView>

                <AnimatedInView y={30} delay={0.1} className="bg-transparent">
                    <div className="text-center bg-transparent">
                        <p className="text-md bg-transparent uppercase font-bold tracking-wide text-gray-300 text-start Poppins">Junior</p>
                        <h1 className="text-5xl bg-transparent md:text-7xl font-extrabold leading-tight Antonio text-start">
                            Web <br /> Developer
                        </h1>
                    </div>
                </AnimatedInView>

                <AnimatedInView x={50} delay={0.2} className="bg-transparent">
                    <div className="text-right hidden md:block bg-transparent cursor-default">
                        <p className="text-6xl bg-transparent font-bold Antonio">100+</p>
                        <p className="text-sm text-gray-300 Poppins mt-px bg-transparent text-start">Projects</p>
                    </div>
                </AnimatedInView>
            </div>

            <AnimatedInView y={40} delay={0.3} className="bg-transparent">
                <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    className="relative mt-12 h-[40vh] z-10 bg-transparent rounded-xl custom-shadow"
                >
                    <button onClick={() => openLink("https://instagram.com/aryaa.em")}>
                        <motion.div
                            transition={{ duration: 0.2 }}
                            className="absolute -left-3 top-20 bg-teal-500 text-white px-4 py-2 rounded-lg text-xs font-semibold tracking-wide rotate-[-90deg] origin-left Poppins"
                        >
                            ARYA
                        </motion.div>
                    </button>

                    <Image
                        src={Arya}
                        alt="Arya Maulana"
                        className="h-full w-full object-cover teal-border rounded-xl relative z[11] teal-border"
                    />
                </motion.div>
            </AnimatedInView>

            <AnimatedInView x={0} y={0} delay={1} className="bg-transparent">
                <motion.h2
                    className="absolute md:-bottom-20 bottom-12 text-[16vw] w-[200%] left-0 bg-transparent font-extrabold text-white/60 z-0 select-none Anton tracking-wide"
                >
                    ARYA MAULANA
                </motion.h2>
            </AnimatedInView>

        </div>
    );
}
