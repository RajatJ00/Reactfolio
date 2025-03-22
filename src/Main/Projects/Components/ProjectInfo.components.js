import { FaArrowDown, FaGithub } from "react-icons/fa";
import ProjectLink from "./ProjectLink";

function ProjectInfo(props) {
    return (
        <>
            <ul className="w-fit gap-1 font-normal flex flex-wrap justify-center">
                {props.data.map((value, index) => (
                    <li key={index} className="lg:w-80 max-h-56 s_phone:w-fit lg:mx-12 s_phone:mx-0 mt-10 hover:text-black text-lg overflow-hidden rounded-xl bg-white/0 hover:bg-white/5 shadow-md shadow-black backdrop-blur-md transition duration-300 ease-in-out group">

                        {/* Project Live Link */}
                        <ProjectLink title={value.title} href={value.live} />

                        <p className="text-neutral-50 duration-[1500ms] ease-in-out transition-all hidden group-hover:block m-3 line-clamp-1 hover:line-clamp-none text-center lg:text-base">{value.skills}
                        </p>
                        <a title={value.title} href={value.github} className="relative">
                            <span className="absolute top-0 bg-black/80 z-10 flex items-center place-self-center gap-3 w-fit rounded-b-xl px-2 py-2 mx-2 ml-2 text-xs uppercase shadow-[-1.5px_-1.5px_4px_0px_#000] text-neutral-50 justify-self-center font-Name"><FaGithub /></span>
                            <img src={value.image} alt={value.title} className="relative" />
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ProjectInfo;