import { FaLink } from "react-icons/fa";

function ProjectInfo() {
    return (
        <div className="h-[360px] hover:h-fit cursor-pointer shadow-black shadow-inner hover:text-black text-neutral-50 text-lg overflow-hidden group rounded-xl bg-white/10 hover:bg-white/[0.14] backdrop-blur-sm transition duration-300 ease-in-out">
            <div>
                <h1 className="flex items-center justify-between mx-5 px-2 pt-[6px] pb-1 font-bold uppercase bg-white/20 rounded-b-xl">Myshow
                    <a title="MyShow-Vercel" href="https://my-show-rj.vercel.app/" className="text-neutral-50 hover:text-white/40"><FaLink className="w-5 h-5" /></a>
                </h1>
                <p className="m-2 line-clamp-6 text-center group-hover:text-black translate-y-5 text-transparent group-hover:translate-y-0 duration-500 ease-in-out">Built a project to search for Movies details and TV details by using Reactjs, Tailwind CSS, TMDB API, NPM Packages, and Razorpay. and project interface even better than any other website! Integrate with a movie database API, display data based on user queries, and provide movie details.</p>
            </div>
            <img className="bg-white object-fill -translate-y-32 group-hover:-translate-y-0 duration-300 ease-in" src="/Img/myshow1.png" alt="MyShow Project" />
        </div>
    )
}

export default ProjectInfo;