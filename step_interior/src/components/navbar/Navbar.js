import { Link, useLocation } from "react-router-dom";
import Logo from "../logo/Logo";
import Palette from "../../util/theme/Palette";

export default function Navbar(){

    const { pathname } = useLocation();

    const linkClass = `
        text-navbar-text
        align-middle
        h-min
        tracking-wider
        text-base
    `;


    return (
        <>
            <div
                className="
                    w-screen
                    bg-navbar-bg
                    py-5
                    fixed
                    z-20
                "
            >

                <div
                    className="
                        w-min
                        mx-auto
                        flex
                        gap-x-20
                        items-center
                    "
                >
                    {
                        (pathname === '/')?
                        <a href="#hero" className={linkClass + " font-semibold"}>
                            <Logo size="14" color={Palette.light['grey']}/>
                        </a>:
                        <Link to="/" className={linkClass}>
                            <Logo size="14" color={Palette.light['grey']}/>
                        </Link>
                    }
                    {
                        (pathname === '/')?
                        <a href="#hero" className={linkClass + " font-semibold"}>HOME</a>:
                        <Link to="/" className={linkClass}>HOME</Link>

                    }
                    <Link className={linkClass}>ABOUT</Link>
                    <Link className={linkClass}>WORKS</Link>
                    <Link className={linkClass}>CONTACT</Link>
                </div>

            </div>
        </>
    );

}