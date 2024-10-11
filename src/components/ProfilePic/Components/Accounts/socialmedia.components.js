import Logos from "./Logos.components";
import Data from "./Data";

function SocialMedia() {
    return (
        <>

            {/* SOCIAL MEDIA ACCOUNTS */}
            <div className="w-fit h-fit gap-4 flex p-5 text-center">
                <Logos accountdata={Data} />
            </div>
        </>
    )
}
export default SocialMedia;