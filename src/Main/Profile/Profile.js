import Intro from "./Components/introduction.components";
import SocialMedia from "./Components/Accounts/socialmedia.components";
import ResumeButton from "./Components/resume.components";
import Photo from "./Components/Photo.components";

function ProfilePic() {
  return (
    <>
      <div className="flex justify-evenly pt-16 pb-3 gap-4 w-full lg:px-14 s_phone:px-2 font-Name">
        {/* Profile Pic */}
        <div className="lg:w-[22%] s_phone:w-[37%] h-fit relative flex self-center">
          <Photo />
        </div>

        <div className="lg:mr-24 lg:px-12 pt-5 lg:w-[57%] lg:h-fit s_phone:w-[63%] s_phone:h-72 s_phone:px-6 rounded-xl hover:bg-white/[0.02] backdrop-blur-sm transition duration-300 ease-in-out group">

          <Intro />
          <div className=" absolute bottom-0">
            <SocialMedia />
            <ResumeButton />
          </div>

        </div>
      </div>
    </>
  );
}

export default ProfilePic;