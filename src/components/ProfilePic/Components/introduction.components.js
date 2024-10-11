import Typewriter from 'typewriter-effect';
import HOC_Sections from '../../../HOC/Section/HOC_Section.components';

function Intro() {
    return (
        <>
            {/* INTRO */}
            <h1 className="p-5 text-5xl cursor-default flex relative text-neutral-50 hover:text-black transition duration-300">
                <div className="absolute -top-5">
                    <HOC_Sections title="Hi, I'm" />
                </div>
                <Typewriter
                    options={{
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