function Skills() {
    return (
        <>

            {/* SKILLS */}
            <div className="w-30 h-40 rounded-xl bg-white/25 backdrop-blur-sm font-bold px-3">
                <h1 className="w-fit bg-gradient-to-br from-cyan-500 to-black border-b rounded-b-xl text-black hover:text-neutral-50 flex gap-2 px-6 py-2 text-base font-medium uppercase mx-3 transition duration-150">Skills</h1>
                <div className="flex flex-wrap gap-1 m-2">
                    <p className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20 hover:bg-transparent font-medium">
                        Html
                    </p>
                    <p className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20 hover:bg-transparent font-medium">
                        Css
                    </p>
                    <p className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20 hover:bg-transparent font-medium">
                        Javascript
                    </p>
                    <p className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20 hover:bg-transparent font-medium">
                        React.js
                    </p>
                    <p className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20 hover:bg-transparent font-medium">
                        Tailwindcss
                    </p>
                </div>
            </div>
        </>
    )
}
export default Skills;