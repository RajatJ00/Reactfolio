import React from "react";
import Section from "../../../../HOC/Section.HOC";
import Title from "../../../../HOC/Title.HOC";
import SkillsData from "./skillsdata";

function Skills() {
    return (
        <>
            <div className="w-fit rounded-xl hover:bg-white/[0.02] backdrop-blur-sm transition duration-300 ease-in-out group">

                <Section title="Skills" />
                
                <Title data={SkillsData}/>
            </div>
        </>
    );
};
export default Skills;