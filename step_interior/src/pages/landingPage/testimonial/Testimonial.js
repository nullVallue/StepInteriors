import { testimonialPerson, testimonialText, testimonialTitle } from "../../../util/constants/companyInfo";


export default function Testimonial(){
    return (
        <>
            <div
            className="
                bg-landing-testimonial-bg
                py-20
            "
            >
                <h1
                className="
                    text-center
                    tracking-wide
                    text-4xl
                    mb-16
                    text-landing-testimonial-text
                "
                >
                    {testimonialTitle}
                </h1>

                <div
                className="
                    flex
                    justify-center
                    gap-x-28
                "
                >
                    <div
                    className="
                        h-full
                        w-1/4
                    "
                    >
                        <img 
                        className="
                            h-full
                            w-full
                            object-cover
                        "
                        src={require("../../../assets/images/testimonialImg.jpg")}
                        alt="Elegant tea room with chairs and television"
                        />
                    </div>

                    <div
                    className="
                        w-4/12
                        flex
                        flex-col
                        justify-center
                        gap-y-9
                        tracking-wider
                        leading-6
                        text-landing-testimonial-text
                    "
                    >
                        <p style={{whiteSpace: 'pre-line'}}>
                            {testimonialText}
                        </p>

                        <span className="font-bold">{testimonialPerson}</span>
                    </div>

                </div>
            </div>
        </>
    );
}