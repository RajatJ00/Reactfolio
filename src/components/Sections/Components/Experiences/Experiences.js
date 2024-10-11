import HOC_Sections from "../../../../HOC/Section/HOC_Section.components";

function Experiences(props) {
    return (
        <>
            <div className="w-30 h-fit font-bold px-3 rounded-xl bg-white/10 hover:bg-white/[0.14] backdrop-blur-sm transition duration-300 ease-in-out">

                <HOC_Sections title="Experiences" />
                
                {props.data.map((value, index) => (
                    <div key={index} className="flex flex-wrap gap-1 m-2">
                        <a className="w-fit px-3 py-1 font-medium shadow-black transition ease-out text-neutral-50 rounded-xl duration-300 bg-white/5 hover:bg-white/[0.14] shadow-[inset_1.5px_1.5px_4px_0px_#000] hover:shadow-[inset_1.5px_1.5px_4px_0px_#000] hover:text-black">
                            {value.title}
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Experiences;