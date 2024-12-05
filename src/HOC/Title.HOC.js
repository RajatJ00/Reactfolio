function Title(props) {
    return (
        <>
            <ul className="w-96 gap-1 m-2 font-normal flex flex-wrap">
                {props.data.map((value, index) => (
                    <li key={index} className="w-fit h-10 px-3 py-1 shadow-black transition ease-out text-neutral-50 rounded-xl duration-300 bg-white/10 shadow-[inset_1.5px_1.5px_4px_0px_#000] flex items-center hover:text-black">
                        {value.title}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Title;