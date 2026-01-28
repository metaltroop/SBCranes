import { Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data';

const Contact = () => {
    return (
        <footer id="contact" className="bg-primary text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Get a Quote</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Ready to lift? Contact us for a consultation or quote for your next project. We are available 24/7 for emergency requirements.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <MapPin className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-white mb-1">Visit Us</h4>
                                    <p className="text-gray-300">{CONTACT_INFO.address}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <Mail className="text-accent w-6 h-6 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-white mb-1">Email Uses</h4>
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-300 hover:text-white transition-colors">
                                        {CONTACT_INFO.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <Phone className="text-accent w-6 h-6 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-white mb-1">Call Us</h4>
                                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-300 hover:text-white transition-colors">
                                        {CONTACT_INFO.phone}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Company</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                        placeholder="Company Name"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors min-h-[120px]"
                                    placeholder="Tell us about your project requirements..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-accent text-white font-bold py-4 rounded-lg hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} SB Cranes. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
