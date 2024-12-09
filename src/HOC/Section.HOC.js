import React from "react";

function HOC_Sections(props) {
    return (
        <>

            <h1 className="w-fit rounded-b-xl mx-3 text-black flex gap-2 px-6 py-2 text-base font-medium uppercase bg-white/10 shadow-[inset_1.5px_1.5px_4px_0px_#000] overflow-hidden relative group transition duration-150 ease-in-out">{props.title}
                <img src="graph.png" className="absolute blur-md -z-10 group-hover:animate-ping select-none invert -right-16" />
                <img src="graph.png" className="absolute blur-md -z-10 group-hover:animate-ping select-none" />
            </h1>
        </>
    )
}
export default HOC_Sections;