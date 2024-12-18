import Section from "../../../../HOC/Section.HOC";
import Title from "../../../../HOC/Title.HOC";
import ExperiencesData from "./experiencesdata";

function Experiences(props) {
    return (
        <>
            <div className="w-fit h-fit font-bold rounded-xl hover:bg-white/[0.02] backdrop-blur-sm transition duration-300 ease-in-out group">

                <Section title="Experiences" />

                <Title data={ExperiencesData}/>
            </div>
        </>
    )
}
export default Experiences;