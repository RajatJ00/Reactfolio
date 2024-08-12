import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import Logos from "./Logos.components";

function SocialMedia() {
    return (
        <>

            {/* SOCIAL MEDIA ACCOUNTS */}
            <div className="w-fit h-fit gap-2 flex p-5 text-center">

                <Logos />
                <a className="transition ease-in-out hover:-translate-y-3 hover:border-transparent hover:scale-150 hover:text-neutral-50 border-2 border-black rounded-full duration-300 p-2" href="https://www.linkedin.com/in/rajat-jamgade-4b3a85209" title="Linkedin">
                    <FaLinkedin className="w-5 h-fit" /></a>
                <a className="transition ease-in-out hover:-translate-y-3 hover:border-transparent hover:scale-150 hover:text-neutral-50 border-2 border-black rounded-full duration-300 p-2" href="mailto:rajatjamgade00@gmail.com" title="rajatjamgade00@gmail.com">
                    <FaGoogle className="w-5 h-fit" /></a>
                <a className="transition ease-in-out hover:-translate-y-3 hover:border-transparent hover:scale-150 hover:text-neutral-50 border-2 border-black rounded-full duration-300 p-2" href="mailto:rajatjamgade00@outlook.com" title="rajatjamgade00@outlook.com">
                    <PiMicrosoftOutlookLogoFill className="w-5 h-fit" /></a>
            </div></>
    )
}
export default SocialMedia;