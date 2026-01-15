function ResumeButton() {
    return (
        <a className="w-fit cursor-pointer rounded-xl flex gap-2 px-6 py-2 text-base font-extrabold uppercase my-6 h-10 shadow-[1.5px_1.5px_4px_0px_#000] hover:shadow-[inset_1.5px_1.5px_4px_0px_#000] active:shadow-[inset_-1.5px_-1.5px_4px_1px_#000] justify-center overflow-hidden relative text-transparent bg-gradient-to-r from-color1 active:from-red-600 active:to-blue-700 bg-clip-text" href="Rajat.pdf" download="Rajat_RESUME.pdf" title="Rajat_Resume">
            Resume
            <img src="graph.png" alt="graphics_shadow" className="absolute -bottom-[86px] bg-black/30 scale-[1.2] blur -z-10 select-none" />
        </a>
    )
}
export default ResumeButton;