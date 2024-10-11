import Intro from "./Components/introduction.components";
import SocialMedia from "./Components/Accounts/socialmedia.components";
import ResumeButton from "./Components/resume.components";
import Photo from "./Components/Photo.components";

function ProfilePic() {
  return (
    <>
      <div className="flex pt-16 pb-3 gap-4 w-full px-14">
        {/* IMAGES */}
        <div className="w-[25%] px-6 relative overflow-hidden">
          <Photo />
        </div>

        <div className="ms-20 w-[55%] h-fit rounded-xl bg-white/10 hover:bg-white/[0.14] backdrop-blur-sm transition duration-300 ease-in-out">
          <div className="w-fit h-full px-5 pt-5 font-semibold">

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