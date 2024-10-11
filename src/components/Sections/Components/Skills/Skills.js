import React from "react";
import HOC_Sections from "../../../../HOC/Section/HOC_Section.components";

function Skills(props) {
    return (
        <>
            <div className="w-30 h-fit font-bold px-3 rounded-xl bg-white/5 hover:bg-white/[0.14] backdrop-blur-sm transition duration-300 ease-in-out">

                <HOC_Sections title="Skills" />

                {props.data.map((value, index) => (
                    <div key={index} className="flex flex-wrap gap-1 m-2 font-normal">
                        <p className="w-fit h-10 px-3 py-1 shadow-black transition ease-out text-neutral-50 rounded-xl duration-300 bg-white/10 hover:bg-white/[0.14] shadow-[inset_1.5px_1.5px_4px_0px_#000] hover:shadow-[inset_1.5px_1.5px_4px_0px_#000] flex justify-center items-center hover:text-black">
                            {value.title}
                        </p>
                    </div>
                )
                )}
            </div>
        </>
    );
};
export default Skills;