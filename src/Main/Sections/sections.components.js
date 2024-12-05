import Certificates from "./Components/Certificates/Certificates";
import Experiences from "./Components/Experiences/Experiences";
import Skills from "./Components/Skills/Skills";

function Titles() {
    return (
        <>
            <div className="cursor-default flex md:flex-none justify-center items-center py-3 gap-7 text-md px-5 m-10">

                <Skills/>
                <Experiences/>
                <Certificates/>
            </div>
        </>
    )
}
export default Titles;