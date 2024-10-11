import Certificates from "./Components/Certificates/Certificates";
import Experiences from "./Components/Experiences/Experiences";
import Skills from "./Components/Skills/Skills";
import SkillsData from "./Components/Skills/skillsdata";
import ExperiencesData from "./Components/Experiences/experiencesdata";
import CertificatesData from "./Components/Certificates/certificatesdata";

function Titles() {
    return (
        <>
            <div className="cursor-default flex md:flex-none justify-center items-center py-3 gap-7 text-lg font-bold px-5 m-10 text-neutral-50">

                <Skills data={SkillsData} />
                <Experiences data={ExperiencesData}/>
                <Certificates data={CertificatesData}/>
            </div>
        </>
    )
}
export default Titles;