import React from "react";
import * as FaReactIcons from "react-icons/fa";
import * as PiReactIcons from "react-icons/pi";

const Logos = (props) => {
    function ShowIcons(iconsName) {
        if (iconsName.indexOf("Fa") === 0) {
            return FaReactIcons[iconsName];
        }
        if (iconsName.indexOf("Pi") === 0) {
            return PiReactIcons[iconsName];
        }
    }

    return (
        <>
            {props.accountdata.map((value, index) => (
                <div key={index}>
                    <a href={value.link} className="transition ease-out text-neutral-50 rounded-xl duration-300 w-10 h-10 bg-black/30 hover:bg-white/5 shadow-[inset_1.5px_1.5px_4px_0px_#000] flex justify-center items-center overflow-hidden relative hover:text-black" title={value.name}>
                        <img src="graph.png" alt="graphics_shadow" className="absolute -bottom-8 scale-[1.5] blur-sm" />
                        <span className="flex items-center justify-center scale-110">
                            {React.createElement(ShowIcons(value.icon))}
                        </span>
                    </a>
                </div>
            ))}
        </>
    );
};

export default Logos;