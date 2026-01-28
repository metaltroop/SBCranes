import { PROJECTS_DATA } from '../data';

const Projects = () => {
    return (
        <section id="projects" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto" />
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Delivering excellence in complex environments across India.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PROJECTS_DATA.map((project, index) => (
                        <div
                            key={index}
                            className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg h-[400px]"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-90 transition-opacity duration-300" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-xl font-bold text-white mb-2 font-heading">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {project.description}
                                </p>
                                <div className="h-1 w-12 bg-accent mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
