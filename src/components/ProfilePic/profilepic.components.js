import Intro from "./Components/introduction.components";
import SocialMedia from "./Components/Accounts/socialmedia.components";
import ResumeButton from "./Components/resume.components";
import Background from "./Components/Background.components";

function ProfilePic() {
  return (
    <>
      <div className="flex pt-16 pb-3 gap-4 w-full px-14">
        {/* IMAGES */}
        <div className="w-1/5 px-6 select-none">
          <Background />
          <img src="logo.png" className="relative w-fit rounded-3xl" alt="Profile-pic" />
        </div>

        <div className="ms-20 w-3/4 h-fit rounded-xl bg-white/25 backdrop-blur-sm">
          <div className="w-fit h-full p-5 font-bold">

            <Intro />
            <SocialMedia />
            <ResumeButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePic;