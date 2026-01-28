import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { NAV_LINKS } from '../data';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="text-2xl font-bold font-heading text-primary tracking-tighter">
                            SB CRANES
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "font-medium transition-colors hover:text-accent",
                                    isScrolled ? "text-primary" : "text-white"
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="bg-accent text-white px-6 py-2 rounded-md font-bold hover:bg-accent/90 transition-colors"
                        >
                            Get a Quote
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "p-2 rounded-md",
                                isScrolled ? "text-primary" : "text-white"
                            )}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-20 animate-in slide-in-from-top-4 fade-in">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-accent hover:bg-gray-50"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="block mt-4 text-center bg-accent text-white px-6 py-3 rounded-md font-bold hover:bg-accent/90 transition-colors mx-3"
                        >
                            Get a Quote
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
