import { FaGithub, FaGoogle, FaLinkedin, FaDownload } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";

function ProfilePic() {
  return (
    <>
      <div className="flex pt-16 pb-3 gap-4 w-full px-14">
        <div className="w-1/5 p-6">
          <img src="logo512.png" className="top-0 absolute w-1/4  animate-pulse" alt="Profile-bg" />
          <img src="logo.png" className="relative w-fit rounded-3xl" alt="Profile-pic" />
        </div>
        <div className="ms-20 w-3/4 backdrop-opacity-10 border-2 border-solid rounded-xl bg-white/30">
          <div className="w-fit h-full p-5 font-bold"><h1 className="p-5 text-5xl cursor-default">Hi, I'm <span className="text-cyan-300">Rajat Jamgade</span></h1>
            <p className="text-lg text-gray-200 p-5 cursor-default">To secure a role as a fresher in a company that will allow me to utilize my knowledge and skills while providing a challenging and rewarding environment to contribute to the growth and success of the organization.</p>

            <div className="w-fit h-fit gap-2 flex p-5 text-center">
              <a className="transition ease-in-out hover:-translate-y-5 hover:scale-150 hover:text-cyan-400 border-2 border-black rounded-full duration-300 p-2" href="https://github.com/RajatJ00" title="Git">
                <FaGithub className="w-5 h-fit" /></a>
              <a className="transition ease-in-out hover:-translate-y-5 hover:scale-150 hover:text-cyan-400 border-2 border-black rounded-full duration-300 p-2" href="https://www.linkedin.com/in/rajat-jamgade-4b3a85209" title="Linkedin">
                <FaLinkedin className="w-5 h-fit" /></a>
              <a className="transition ease-in-out hover:-translate-y-5 hover:scale-150 hover:text-cyan-400 border-2 border-black rounded-full duration-300 p-2" href="mailto:rajatjamgade00@gmail.com" title="rajatjamgade00@gmail.com">
                <FaGoogle className="w-5 h-fit" /></a>
              <a className="transition ease-in-out hover:-translate-y-5 hover:scale-150 hover:text-cyan-400 border-2 border-black rounded-full duration-300 p-2" href="mailto:rajatjamgade00@outlook.com" title="rajatjamgade00@outlook.com">
                <PiMicrosoftOutlookLogoFill className="w-5 h-fit" /></a>
            </div>
            <a id="download" href='Rajat.pdf' download="Rajat_Jamgade_Resume.pdf" className="w-fit bg-gradient-to-r from-cyan-500 to-black hover:bg-gradient-to-l hover:cursor-pointer shadow-inner shadow-black rounded-xl text-cyan-100 text-xl flex py-2 px-4 gap-2"><FaDownload className="w-6 h-fit mt-1" />Resume</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePic;