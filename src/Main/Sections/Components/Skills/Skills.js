import React from "react";
import Section from "../../../../HOC/Section.HOC";
import Title from "../../../../HOC/Title.HOC";
import SkillsData from "./skillsdata";

function Skills() {
    return (
        <>
            <div className="w-fit px-3 rounded-xl bg-white/5 hover:bg-white/[0.08] backdrop-blur-sm transition duration-300 ease-in-out">

                <Section title="Skills" />
                
                <Title data={SkillsData}/>
            </div>
        </>
    );
};
export default Skills;