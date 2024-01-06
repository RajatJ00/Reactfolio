import Carousel from "../Carousel/carousel.components"

function Titles() {
    return (
        <>
            <div className="cursor-default flex md:flex-none justify-center items-center py-3 gap-7 text-lg font-bold px-5 m-10 text-white">
                <div className="w-30 h-40 rounded-xl bg-white/30 font-bold px-3 border-2 border-white">
                    <h1 className="w-fit text-2xl px-2 bg-gradient-to-r from-cyan-500 to-black border-b-2 rounded-b-xl">Skills</h1>
                    <div className="flex flex-wrap gap-1 m-2">
                        <p className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20">
                            Html
                        </p>
                        <p className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20">
                            Css
                        </p>
                        <p className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20">
                            Javascript
                        </p>
                        <p className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20">
                            React.js
                        </p>
                        <p className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20">
                            Tailwindcss
                        </p>
                    </div>
                </div>

                <div className="w-30 h-40 rounded-xl bg-white/30 font-bold px-3 border-2 border-white">
                    <h1 className="w-fit text-xl px-2 bg-gradient-to-r from-cyan-500 to-black border-b-2 rounded-b-xl">Internships</h1>
                    <div className="flex flex-wrap gap-1 m-2">
                        <p className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20">
                            Devtown - Full Stack Development
                        </p>
                        <p className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20">
                            Acmegrade - Full Stack Development
                        </p>
                    </div>
                </div>

                <div className="w-30 h-40 rounded-xl bg-white/30 font-bold px-3 border-2 border-white">
                    <h1 className="w-fit text-xl px-2 bg-gradient-to-r from-cyan-500 to-black border-b-2 rounded-b-xl">Certification</h1>
                    <div className="flex flex-wrap gap-1 m-2">
                        <p className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20">
                            Java - FUEL (LinkedIn)
                        </p>
                        <p className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20">
                            Python - FUEL (LinkedIn)
                        </p>
                        <p className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20">
                            Projects
                        </p>
                        <p className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20">
                            Projects
                        </p>
                        <p className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20">
                            Projects
                        </p>
                        <p className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20">
                            Projects
                        </p>
                    </div>
                </div>
            </div>
            <Carousel />
        </>
    )
}
export default Titles;