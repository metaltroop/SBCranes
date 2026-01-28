import { CLIENTS_DATA } from '../data';

const Clients = () => {
    return (
        <section id="clients" className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">
                    Trusted By Industry Leaders
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex space-x-16">
                    {/* First set of logos */}
                    {CLIENTS_DATA.map((client, index) => (
                        <div key={index} className="flex items-center justify-center mx-8 my-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                            {/* Using text specific placeholders since we don't have real logos */}
                            <span className="text-2xl font-bold font-heading text-primary">{client}</span>
                        </div>
                    ))}
                    {/* Duplicate for infinite loop */}
                    {CLIENTS_DATA.map((client, index) => (
                        <div key={`dup-${index}`} className="flex items-center justify-center mx-8 my-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                            <span className="text-2xl font-bold font-heading text-primary">{client}</span>
                        </div>
                    ))}
                    {/* Triplicate for smooth infinite loop on wide screens */}
                    {CLIENTS_DATA.map((client, index) => (
                        <div key={`tri-${index}`} className="flex items-center justify-center mx-8 my-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                            <span className="text-2xl font-bold font-heading text-primary">{client}</span>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
      `}</style>
        </section>
    );
};

export default Clients;
