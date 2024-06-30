import Typewriter from 'typewriter-effect';

function Intro() {
    return (
        <>
            {/* INTRO */}
            <h1 className="p-5 text-5xl cursor-default flex relative text-neutral-50 select-none hover:text-black transition duration-300">
                <span className="mr-[12px] text-lg text-black absolute top-0 hover:text-neutral-50 transition duration-300">Hi, I'm</span>
                <Typewriter
                    options={{
                        textstring: "Rajat Jamgade",
                        strings: ['Rajat Jamgade', 'Frontend Developer', 'Web Developer', 'MERN Stack Developer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </h1>
        </>
    )
}
export default Intro;