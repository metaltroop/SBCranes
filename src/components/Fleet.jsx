import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FLEET_DATA } from '../data';
import { cn } from '../lib/utils';

const Fleet = () => {
    const [activeTab, setActiveTab] = useState('mobile');
    const tabs = Object.keys(FLEET_DATA);

    return (
        <section id="fleet" className="py-20 md:py-28 bg-primary text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">World-Class Fleet</h2>
                    <div className="w-24 h-1 bg-accent mb-8" />

                    <div className="flex flex-wrap gap-4 mb-8">
                        {tabs.map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={cn(
                                    "px-6 py-2 rounded-full font-semibold transition-all duration-300 border",
                                    activeTab === key
                                        ? "bg-accent border-accent text-white"
                                        : "bg-transparent border-white/20 text-gray-300 hover:border-white hover:text-white"
                                )}
                            >
                                {FLEET_DATA[key].title}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid lg:grid-cols-2 gap-12 items-center"
                        >
                            <div className="order-2 lg:order-1 space-y-6">
                                <h3 className="text-3xl font-bold font-heading text-accent">
                                    {FLEET_DATA[activeTab].title}
                                </h3>
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    {FLEET_DATA[activeTab].description}
                                </p>

                                {FLEET_DATA[activeTab].capacities.length > 0 && (
                                    <div className="mt-8">
                                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Available Capacities</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {FLEET_DATA[activeTab].capacities.map((cap, idx) => (
                                                <span key={idx} className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium border border-white/10">
                                                    {cap}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="order-1 lg:order-2">
                                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
                                    <img
                                        src={FLEET_DATA[activeTab].image}
                                        alt={FLEET_DATA[activeTab].title}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Fleet;
