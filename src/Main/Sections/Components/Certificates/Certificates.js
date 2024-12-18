import Section from "../../../../HOC/Section.HOC";
import Title from "../../../../HOC/Title.HOC";
import CertificatesData from "./certificatesdata";

function Certificates() {
    return (
        <>
            <div className="w-fit h-fit font-bold rounded-xl hover:bg-white/[0.02] backdrop-blur-sm transition duration-300 ease-in-out group">
                <Section title="Certifications" />

                <Title  data={CertificatesData}/>
            </div>
        </>
    )
}
export default Certificates;