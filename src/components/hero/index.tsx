import Image from "next/image"
import Arya from "../../../public/arya.jpg"
import Link from "next/link"

export default function HeroSection() {
    return (
        <>
            {/* Grid Background  */}
            <div className="min-h-dvh w-full hero-grid-bg absolute z-0"></div>

            <div className="min-h-dvh w-full bg-transparent relative z-10 flex flex-col items-center justify-center text-white px-4 overflow-hidden ">
                <div className="flex items-center md:justify-between justify-center w-full max-w-5xl md:mt-20 mt-8 bg-transparent">
                    <div className="text-left hidden md:block">
                        <p className="text-4xl font-bold Antonio">20+</p>
                        <p className="text-sm text-gray-300 Poppins mt-px">Awards</p>
                    </div>

                    <div className="text-center bg-transparent ">
                        <p className="text-md bg-transparent uppercase font-bold tracking-wide text-gray-300 text-start Poppins">Junior</p>
                        <h1 className="text-5xl bg-transparent md:text-7xl font-extrabold leading-tight Antonio text-start">
                            Web <br /> Developer
                        </h1>
                    </div>

                    <div className="text-right hidden md:block">
                        <p className="text-4xl font-bold Antonio">100+</p>
                        <p className="text-sm text-gray-300 Poppins mt-px">Projects</p>
                    </div>
                </div>


                <div className="relative mt-12 h-[40vh] z-10 bg-transparent rounded-xl custom-shadow">
                    <Link href={"https://github.com/AryaEm"} target="_blank"> 
                        <div className="absolute -left-3 top-20 bg-teal-500 text-white px-4 py-2 rounded-lg text-xs font-semibold tracking-wide rotate-[-90deg] origin-left Poppins">
                            ARYA
                        </div>
                    </Link>

                    <Image src={Arya} alt="Arya Maulana" className="h-full w-full object-cover teal-border rounded-xl relative z[11] teal-border" />
                </div>

                <h2 className="absolute -bottom-20 text-[16vw] w-[200%] left-0 bg-transparent font-extrabold text-white/60 z-0 select-none Anton tracking-wide hidden md:block">
                    ARYA MAULANA
                </h2>

            </div>
        </>
    )
}