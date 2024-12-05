import Intro from "./Components/introduction.components";
import SocialMedia from "./Components/Accounts/socialmedia.components";
import ResumeButton from "./Components/resume.components";
import Photo from "./Components/Photo.components";

function ProfilePic() {
  return (
    <>
      <div className="flex justify-around pt-16 pb-3 gap-4 w-full px-14">
        {/* Profile Pic */}
        <div className="w-[24%] relative">
          <Photo />
        </div>

        <div className="mr-24 px-12 pt-5 w-[55%] h-fit rounded-xl bg-white/5 hover:bg-white/[0.08] backdrop-blur-sm transition duration-300 ease-in-out">

          <Intro />
          <SocialMedia />
          <ResumeButton />

        </div>
      </div>
    </>
  );
}

export default ProfilePic;