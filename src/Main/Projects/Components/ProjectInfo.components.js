import ProjectLink from "./ProjectLink";

function ProjectInfo(props) {
    return (
        <>
            <ul className="w-fit gap-1 font-normal flex flex-wrap justify-center">
                {props.data.map((value, index) => (
                    <li key={index} className="lg:w-80 max-h-56 s_phone:w-fit lg:mx-12 s_phone:mx-0 mt-10 cursor-pointer hover:text-black text-lg overflow-hidden rounded-xl bg-white/0 hover:bg-white/5 shadow-md shadow-black backdrop-blur-md transition duration-300 ease-in-out group">

                        {/* Project Live Link */}
                        <ProjectLink title={value.title} href={value.live} />

                        <p className="text-neutral-50 duration-[1500ms] ease-in-out transition-all hidden group-hover:block m-4 line-clamp-1 hover:line-clamp-none text-center lg:text-base">{value.skills}</p>
                        <a title={value.title} href={value.github}>
                            <img src={value.image} alt={value.title} className="relative" />
                            <p className="absolute flex justify-self-center">{value.title}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ProjectInfo;