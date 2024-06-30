import { FaGithub } from "react-icons/fa";
function Logos() {
    return (
        <a className="transition ease-in-out hover:-translate-y-3 hover:border-transparent hover:scale-150 hover:text-neutral-50 border-2 border-black rounded-full duration-300 p-2" href="https://github.com/RajatJ00" title="Git">
            <FaGithub className="w-5 h-fit" />
        </a>
    )
}
export default Logos;