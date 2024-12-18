import React from "react";
import { FaLink } from "react-icons/fa";

function ProjectLink(props) {
    return (
        <>
            <div className="w-fit rounded-b-xl px-4 py-1.5 text-base uppercase shadow-[1.5px_1.5px_4px_0px_#000] overflow-hidden relative group transition duration-150 ease-in-out text-neutral-50 justify-self-center font-Name">
                <a title={props.title} href={props.href} className="flex gap-5 justify-between">
                    {props.title}<FaLink className="w-4 h-4 hover:text-white/40 self-center" />
                </a>
                <img src="graph.png" alt="graphics_shadow" className="absolute blur-md -z-10 group-hover:animate-ping select-none -bottom-1" />
            </div>
        </>
    )
}
export default ProjectLink;