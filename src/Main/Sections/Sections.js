import Certificates from "./Components/Certificates/Certificates";
import Experiences from "./Components/Experiences/Experiences";
import Skills from "./Components/Skills/Skills";

function Sections() {
    return (
        <>
            <div className="cursor-default flex lg:flex-row s_phone:flex-col justify-center items-center py-3 gap-5 text-md px-5 lg:m-10 s_phone:m-2">

                <Skills/>
                <Experiences/>
                <Certificates/>
            </div>
        </>
    )
}
export default Sections;