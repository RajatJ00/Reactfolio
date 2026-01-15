function Title(props) {
    return (
        <>
            <ul className="s_phone:w-fit lg:w-96 gap-1 m-2 font-light flex flex-wrap">
                {props.data.map((value, index) => (
                    <li key={index} className="w-fit h-fit px-3 py-1 shadow-black transition ease-out bg-transparent bg-gradient-to-r hover:from-title1 hover:to-title2 bg-clip-text hover:text-transparent text-color1 rounded-xl duration-300 shadow-[inset_1.5px_1.5px_4px_0px_#000] font-Name hover:font-normal">
                        {value.title}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Title;