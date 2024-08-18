import { companyName } from "../../../util/constants/companyInfo";

export default function Hero(){
    return (
        <>
            <div 
            id="hero"
            className="
                bg-hero-bgimg 
                bg-cover 
                bg-no-repeat
                bg-center
                h-screen 
                w-screen
                flex
                justify-center
                items-center
            "
            >
                <span 
                className="
                    text-landing-hero-text
                    text-5xl
                    tracking-[0.2em]
                    font-medium
                    drop-shadow-lg
                "
                >
                    {
                        companyName.toUpperCase()
                    }
                </span>
            </div>
        </>
    );
}