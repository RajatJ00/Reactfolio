import {FaFileDownload} from "react-icons/fa";

function ResumeButton() {
    return (
        <a className="text-neutral-50 hover:text-black w-fit cursor-pointer rounded-xl flex gap-2 px-6 py-2 text-base font-medium uppercase my-6 h-10 bg-white/0 hover:bg-white/10 shadow-[inset_1.5px_1.5px_4px_0px_#000] active:shadow-[inset_-1.5px_-1.5px_4px_1px_#000] justify-center items-center overflow-hidden relative group transition duration-150 ease-in-out" href="Rajat.pdf" download="Rajat_RESUME.pdf" title="Rajat_Resume">
            Resume<FaFileDownload/>
            <img src="graph.png" className="absolute -right-[110px] invert blur-md -z-10 group-hover:animate-ping select-none" />
            <img src="graph.png" className="absolute -bottom-[100px] scale-[1.2] blur-md -z-10 group-hover:animate-ping select-none" />
        </a>
    )
}
export default ResumeButton;