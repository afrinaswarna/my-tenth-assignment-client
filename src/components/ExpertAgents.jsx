import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebook } from 'react-icons/fa';

const ExpertAgents = () => {
    const PINK_GRADIENT_TEXT = 
        "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500";
    const PINK_ACCENT = "text-pink-600";
    const AGENT_CARD_SHADOW = 
        "shadow-xl hover:shadow-2xl transition duration-300 ease-in-out border border-pink-100 hover:border-pink-500";

    const agents = [
        {
            name: "Sophia Chen",
            title: "Senior Sales Director",
            image: "https://i.ibb.co.com/MyZPYXZQ/download-14.jpg", 
            phone: "+880 123-456789",
        },
        {
            name: "Mark Johnson",
            title: "Property Specialist",
            image: "https://i.ibb.co.com/Y4qt4BdV/download-13.jpg", 
        },
        {
            name: "Afrina Swarna",
            title: "Lead Rental Expert",
            image: "https://i.ibb.co.com/jP59cdcf/images-7.jpg",
            phone: "+880 123-555555",
        },
    ];

    return (
        <section className='py-16'>
            <div className='text-center mb-12'>
                <h2 className={`font-extrabold text-4xl md:text-5xl text-gray-800 ${PINK_GRADIENT_TEXT}`}>
                    Meet Our Expert Agents
                </h2>
                <p className='text-gray-600 mt-3 max-w-2xl mx-auto'>
                    Highly dedicated professionals ready to guide you through your property journey.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {agents.map((agent, index) => (
                    <div 
                        key={index} 
                        className={`card bg-base-100 rounded-xl overflow-hidden text-center ${AGENT_CARD_SHADOW}`}
                    >
                        <figure className="h-56">
                            <img 
                                src={agent.image} 
                                alt={`Agent ${agent.name}`} 
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        
                        <div className="p-5">
                            <h4 className='text-xl font-bold text-gray-600'>{agent.name}</h4>
                            <p className={`text-sm font-semibold mb-3 ${PINK_ACCENT}`}>{agent.title}</p>
                            
                            <div className="flex items-center justify-center gap-2 text-gray-600 text-sm mb-4">
                                <FaPhoneAlt className={PINK_ACCENT} />
                                <span>{agent.phone}</span>
                            </div>

                            <div className="flex justify-center gap-4">
                                <a href="#" className={`p-2 rounded-full border border-pink-200 text-pink-500 hover:bg-pink-50 transition`}>
                                    <FaEnvelope />
                                </a>
                                <a href="#" className={`p-2 rounded-full border border-pink-200 text-pink-500 hover:bg-pink-50 transition`}>
                                    <FaFacebook />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExpertAgents;