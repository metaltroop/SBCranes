import { Truck, Tractor, Construction, Wrench, Container, Map } from 'lucide-react';
import { SERVICES_DATA } from '../data';

const iconMap = {
    Truck: Truck,
    Tractor: Tractor,
    Hook: Construction, // Using Construction for Hook
    Wrench: Wrench,
    Container: Container,
    Map: Map,
};

const Services = () => {
    return (
        <section id="services" className="py-20 md:py-28 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-4">
                        Our Services
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto" />
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Comprehensive lifting and transport solutions tailored to your project needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES_DATA.map((service, index) => {
                        const Icon = iconMap[service.icon] || Construction;
                        return (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                            >
                                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
