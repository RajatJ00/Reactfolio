import Section from "../../../../HOC/Section.HOC";
import Title from "../../../../HOC/Title.HOC";
import ExperiencesData from "./experiencesdata";

function Experiences(props) {
    return (
        <>
            <div className="w-fit h-fit font-bold px-3 rounded-xl bg-white/5 hover:bg-white/[0.08] backdrop-blur-sm transition duration-300 ease-in-out">

                <Section title="Experiences" />

                <Title data={ExperiencesData}/>
            </div>
        </>
    )
}
export default Experiences;