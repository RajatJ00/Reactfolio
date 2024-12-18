function Title(props) {
    return (
        <>
            <ul className="s_phone:w-fit lg:w-96 gap-1 m-2 font-normal flex flex-wrap">
                {props.data.map((value, index) => (
                    <li key={index} className="w-fit h-fit px-3 py-1 shadow-black transition ease-out bg-transparent hover:bg-gradient-to-r from-red-600 to-blue-700 hover:bg-clip-text hover:text-transparent text-neutral-50 hover:text-black rounded-xl duration-300 shadow-[inset_1.5px_1.5px_4px_0px_#000] font-Name">
                        {value.title}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Title;