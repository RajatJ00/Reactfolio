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
                        <a href="" className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20">
                            Devtown - Full Stack Developer
                        </a>
                        <a href="" className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20">
                            Acmegrade - Web Developer
                        </a>
                    </div>
                </div>

                <div className="w-30 h-40 rounded-xl bg-white/30 font-bold px-3 border-2 border-white">
                    <h1 className="w-fit text-xl px-2 bg-gradient-to-r from-cyan-500 to-black border-b-2 rounded-b-xl">Certification</h1>
                    <div className="flex flex-wrap gap-1 m-2">
                        <a href="" className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20">
                            Java - LinkedIn
                        </a>
                        <a href="" className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20">
                            Python - LinkedIn
                        </a>
                        <a href="" className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20">
                            Projectsa
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Titles;