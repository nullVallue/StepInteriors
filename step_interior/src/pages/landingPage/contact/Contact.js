import { companyEmail } from "../../../util/constants/companyInfo";


export default function Contact(){
    return(
        <>
        <div
        className="
            w-full
            bg-landing-contact-bg
            text-landing-contact-text
            text-center
            py-16
        "
        >
            <h1 
            className="
                text-xl
            "
            >Have a project in mind?</h1>
            <h2
            className="
                mt-0.5
                mb-5
                text-4xl
            "
            >Lets get in touch!</h2>
            <h3
            className="
                text-5xl
                underline
            "
            ><a href={`mailto:${companyEmail}`}>{companyEmail}</a></h3>
        </div>
        </>
    );
}