import Navbar from "../../components/navbar/Navbar";
import Contact from "./contact/Contact";
import Desc from "./desc/Desc";
import FeaturedProjects from "./featuredProjects/FeaturedProjects";
import Hero from "./hero/Hero";
import Testimonial from "./testimonial/Testimonial";


export default function LandingPage(){

    return (
        <>
            <Navbar />        

            <Hero />

            <Desc />

            <FeaturedProjects />

            <div
                className="
                w-full
                h-[35vh]
                "
            >
                <img 
                className="
                    h-full
                    w-full 
                    object-cover
                "
                alt=""
                src={require("../../assets/images/dividerImg.jpg")}
                />
            </div>

            <Testimonial />

            <Contact />

            <div className="bg-black h-screen w-screen">

            </div>


        </>
    );

}