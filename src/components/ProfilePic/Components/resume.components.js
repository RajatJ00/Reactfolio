function ResumeButton() {
    return (
        <a className="text-neutral-50 hover:text-black w-fit cursor-pointer rounded-xl flex gap-2 px-6 py-2 text-base font-medium uppercase leading-normal transition duration-150 ease-in-out m-5 h-10 bg-white/0 hover:bg-white/10 shadow-[inset_1.5px_1.5px_4px_0px_#000] active:shadow-[inset_-1.5px_-1.5px_4px_1px_#000] justify-center items-center overflow-hidden relative group" href="Rajat.pdf" download="Rajat_RESUME.pdf" title="Rajat_Resume">
            Resume
            <img src="graph.png" className="absolute -bottom-[90px] scale-[1.2] blur-md group-hover:animate-none animate-ping -z-10 select-none" />
            <img src="graph.png" className="absolute -right-[100px] invert blur-md group-hover:animate-none animate-ping -z-10 select-none" />
        </a>
    )
}
export default ResumeButton;