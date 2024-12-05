import Section from "../../../../HOC/Section.HOC";
import Title from "../../../../HOC/Title.HOC";
import CertificatesData from "./certificatesdata";

function Certificates() {
    return (
        <>
            <div className="w-fit h-fit font-bold px-3 rounded-xl bg-white/5 hover:bg-white/[0.08] backdrop-blur-sm transition duration-300 ease-in-out">
                <Section title="Certifications" />

                <Title  data={CertificatesData}/>
            </div>
        </>
    )
}
export default Certificates;