import { landingDescText, landingDescTitle } from "../../../util/constants/companyInfo";


export default function Desc(){
    return(
        <>
            <div
            className="
                bg-landing-desc-bg
                text-landing-desc-text
                py-20
                px-16
            "
            >
                <h1 
                className="
                    text-center
                    text-4xl
                    tracking-wider
                    mb-9
                "
                >
                    {landingDescTitle}
                </h1>

                <p
                className="
                    text-center
                    text-base
                    leading-7
                "
                >
                    {landingDescText}
                </p>
            </div>
        </>
    );
}