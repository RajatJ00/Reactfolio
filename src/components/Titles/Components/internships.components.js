function Internships() {
    return (
        <>
            {/* INTERNSHIPS */}
            <div className="w-30 h-40 rounded-xl bg-white/30 font-bold px-3">
                <h1 className="w-fit bg-gradient-to-br from-cyan-500 to-black border-b rounded-b-xl text-black hover:text-neutral-50 flex gap-2 px-6 py-2 text-base font-medium uppercase mx-3 transition duration-150">Internships</h1>
                <div className="flex flex-wrap gap-1 m-2">
                    <a href="https://drive.google.com/drive/folders/1KRU_j8k92zYrscv8GGsY0PdDCb2Q5fCY?usp=drive_link" className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20 hover:bg-transparent font-medium">
                        Devtown - Full Stack Developer
                    </a>
                    <a href="https://drive.google.com/drive/folders/1f6BTUzwPiPGVnJssVPKUkLBDOJ3OdEwX?usp=drive_link" className="w-fit px-3 py-1 rounded-xl shadow-inner shadow-black bg-white/20 hover:bg-transparent font-medium">
                        Acmegrade - Web Developer
                    </a>
                </div>
            </div>
        </>
    )
}
export default Internships;