import Intro from "./Components/introduction.components";
import SocialMedia_Accounts from "./Components/Accounts/socialmedia_accounts.components";
import ResumeButton from "./Components/resume.components";

function ProfilePic() {
  return (
    <>
      <div className="flex pt-16 pb-3 gap-4 w-full px-14">
        {/* IMAGES */}
        <div className="w-1/5 px-6 select-none">
          <img src="logo512.png" className="top-0 absolute w-1/4 transform ease-in duration-[3000ms] animate-pulse hover:rotate-[360deg]" alt="Profile-bg" />
          <img src="logo.png" className="relative w-fit rounded-3xl" alt="Profile-pic" />
        </div>

        <div className="ms-20 w-3/4 h-fit backdrop-opacity-10 rounded-xl bg-white/30">
          <div className="w-fit h-full p-5 font-bold">

            <Intro />
            <SocialMedia_Accounts />
            <ResumeButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePic;