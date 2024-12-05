import Typewriter from 'typewriter-effect';
import Section from '../../../HOC/Section.HOC';

function Intro() {
    return (
        <>
            {/* INTRO */}
            <div className="absolute top-0">
                <Section title="Hi, I'm" />
            </div>
            <h1 className='font-Intro w-fit mt-10 text-5xl text-neutral-50 hover:text-black transition duration-300 font-semibold'>
                <Typewriter
                    options={{
                        strings: ['Rajat Jamgade', 'Frontend Developer', 'Web Developer', 'MERN Stack Developer'],
                        autoStart: true,
                        loop: true,
                        delay: 200,
                    }}
                /></h1>
        </>
    )
}
export default Intro;