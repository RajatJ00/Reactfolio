import Certificates from "./Components/certificates.components";
import Internships from "./Components/internships.components";
import Skills from "./Components/skills.components";

function Titles() {
    return (
        <>
            <div className="cursor-default flex md:flex-none justify-center items-center py-3 gap-7 text-lg font-bold px-5 m-10 text-white select-none">

                <Skills />
                <Internships />
                <Certificates />
            </div>
        </>
    )
}
export default Titles;