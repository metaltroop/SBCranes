import { CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-accent/20 rounded-xl rotate-3 transition-transform group-hover:rotate-6 duration-300" />
                        <img
                            src="https://placehold.co/800x600?text=About+Image" // Prompt 7
                            alt="About SB Cranes"
                            className="relative rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
                        />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">
                            Engineered for the Extraordinary
                        </h2>
                        <div className="w-20 h-1 bg-accent" />
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We are a leading crane rental and heavy lifting solutions provider operating across India. From short-term requirements to long-duration projects, we deliver practical lifting solutions that meet real site conditions.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {['Reliability', 'Integrity', 'Safety', 'Excellence'].map((value) => (
                                <div key={value} className="flex items-center space-x-2">
                                    <CheckCircle2 className="text-accent h-5 w-5" />
                                    <span className="font-semibold text-primary">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
