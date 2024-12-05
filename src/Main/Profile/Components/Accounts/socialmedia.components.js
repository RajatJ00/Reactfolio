import Logos from "./Logos.components";
import Data from "./Data";

function SocialMedia() {
    return (
        <>

            {/* SOCIAL MEDIA ACCOUNTS */}
            <div className="w-fit h-fit gap-5 flex my-10">
                <Logos accountdata={Data} />
            </div>
        </>
    )
}
export default SocialMedia;