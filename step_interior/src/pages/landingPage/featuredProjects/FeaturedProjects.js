import { projects } from "../../../util/constants/projects";


export default function FeaturedProjects(){

    const featuredProjects = (arr) => {
        let projectArray = [];

        for(let i = 0; i < 3; i++){
            const project = arr[i]

            projectArray.push(
                <>
                    <div
                        className="
                            w-1/4
                            flex
                            flex-col
                        "
                    >
                        <div
                            className="
                                h-full
                            "
                        >
                            <img 
                            className="
                                h-full
                                w-full
                                object-cover
                            "
                            src={project.thumbnail.src} 
                            alt={project.thumbnail.alt}
                            />
                        </div>
                        <div 
                        className="
                            mt-8
                            text-center
                        "
                        >
                            <span
                            className="
                                text-base
                                tracking-wider
                                text-landing-projects-text
                            "
                            >{project.title.toUpperCase()}</span>
                        </div>

                    </div>
                </>
            );
        }

        return projectArray;

    }

    return (
        <>
            <div
                className="
                    py-20
                    bg-landing-projects-bg
                "
            >
                <h1
                    className="
                        text-center
                        text-4xl
                        tracking-widest
                        mb-16
                    "
                >
                    Featured Projects
                </h1>
                <div
                className="
                    w-screen
                    flex
                    justify-evenly
                "
                >
                    {featuredProjects(projects)}
                </div>

            </div>
        </>
    );

}