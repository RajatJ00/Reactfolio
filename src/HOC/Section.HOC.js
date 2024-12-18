import React from "react";

function HOC_Sections(props) {
    return (
        <>
            <h1 className="w-fit rounded-b-xl flex gap-2 px-6 py-2 text-base font-semibold uppercase shadow-[inset_1.5px_1.5px_4px_0px_#000] overflow-hidden relative transition duration-150 ease-in-out text-transparent bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text font-Name">{props.title}
                <img src="graph.png" alt="graphics_shadow" className="absolute blur-md -z-10 group-hover:animate-ping select-none bottom-3" />
            </h1>
        </>
    )
}
export default HOC_Sections;