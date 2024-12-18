import Typewriter from 'typewriter-effect';
import Section from '../../../HOC/Section.HOC';

function Intro() {
    return (
        <>
            {/* INTRO */}
            <div className="absolute top-0 group">
                <Section title="Hi, I'm" />
            </div>
            <h1 className='w-fit py-1.5 mt-10 lg:text-5xl s_phone:text-2xl transition duration-300 font-semibold text-transparent bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text font-Name'>
                <Typewriter
                    options={{
                        strings: ['Rajat Jamgade', 'Frontend Developer', 'Web Developer', 'MERN Stack Developer'],
                        autoStart: true,
                        loop: true,
                    }}
                /></h1>
        </>
    )
}
export default Intro;