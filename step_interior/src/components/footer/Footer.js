import { companyName, companyEmail, companyPhone } from "../../util/constants/companyInfo";
import Palette from "../../util/theme/Palette";
import Logo from "../logo/Logo";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp";
import { Pinterest } from "@styled-icons/boxicons-logos/Pinterest";

export default function Footer(){

    const iconClass = `
        size-7
        text-footer-text
    `;

    return(
        <>
            <div 
            className="
                bg-footer-bg
                w-full
                flex
                flex-col
                items-center
                text-footer-text
                pb-9
                pt-24
            "
            >
                <Logo size="28" color={Palette.light['tertiary']}/>
                <h3 
                className="
                text-xs
                mt-6
                mb-11
                "
                >
                    {companyName.toUpperCase()}
                </h3>
                <p>{`${companyEmail} | ${companyPhone}`}</p>
                <div
                className="
                    my-7
                    flex
                    gap-9
                "
                >
                    <FacebookCircle className={iconClass} />
                    <Instagram className={iconClass}/>
                    <Whatsapp className={iconClass}/>
                    <Pinterest className={iconClass}/>
                </div>
                <p className="text-xs">© 2024 by Wei Jian Tan. All Rights Reserved.</p>
            </div>
        </>
    );
}