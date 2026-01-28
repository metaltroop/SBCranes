import { ArrowRight } from 'lucide-react';
import { STATS } from '../data';
import heroBg from '../assets/images/hero_background.png';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary/40 z-10" /> {/* Overlay */}
                <img
                    src={heroBg}
                    alt="Construction Site"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 py-20 text-center text-white">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700">
                    Lifting With Precision
                </h1>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-gray-200 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
                    Reliable Lifting. Proven Experience. Pan-India Execution.
                </p>
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                    <a
                        href="#contact"
                        className="inline-flex items-center bg-accent text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-accent/90 transition-all hover:scale-105"
                    >
                        Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </div>
            </div>

            {/* Stats Strip */}
            <div className="absolute bottom-0 left-0 right-0 bg-primary/90 text-white z-30 py-6 md:py-8 backdrop-blur-sm border-t border-white/10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {STATS.map((stat, index) => (
                            <div key={index} className="space-y-1">
                                <p className="text-3xl md:text-4xl font-bold font-heading text-accent">{stat.value}</p>
                                <p className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
