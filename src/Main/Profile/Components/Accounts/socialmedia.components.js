import Logos from "./Logos.components";
import Data from "./Data";

function SocialMedia() {
    return (
        <>
            {/* SOCIAL MEDIA ACCOUNTS */}
            <div className="w-fit h-fit lg:gap-5 s_phone:gap-2 flex lg:my-5 s_phone:my-6">
                <Logos accountdata={Data} />
            </div>
        </>
    )
}
export default SocialMedia;