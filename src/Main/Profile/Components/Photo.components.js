function Photo() {
    return (
        <>
            <img src="logo1.jpg" className="w-[550px] lg:rounded-3xl s_phone:rounded-xl" alt="bg" />
            <p className="lg:w-fit s_phone:w-42 absolute uppercase lg:text-xl s_phone:text-lg font-extrabold rounded-br-2xl rounded-tl-2xl overflow-hidden px-3 s_phone:py-0 lg:py-0.5 backdrop-blur-sm bottom-0 right-0 shadow-[inset_0_2px_5px_-2px_#000] text-transparent bg-white/10 bg-gradient-to-r from-color1 to-color2 bg-clip-text drop-shadow-[1px_1px_#000]">Rajat Jamgade</p>
        </>
    )
}
export default Photo;