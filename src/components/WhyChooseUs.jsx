import React from 'react';
import { FaHeart, FaShieldAlt, FaChartLine, FaRegCalendarCheck } from 'react-icons/fa'; 

const WhyChooseUs = () => {
    
    // Define the style variables for consistency
    
    const PINK_ACCENT = "text-pink-600";
    const CARD_SHADOW = 
        "shadow-xl hover:shadow-2xl transition duration-300 ease-in-out hover:border-pink-500 border border-gray-100";

    const features = [
        {
            icon: <FaShieldAlt className={`text-4xl ${PINK_ACCENT}`} />,
            title: "Verified Properties",
            description: "Every listing is meticulously verified to ensure legitimacy, quality, and accurate information, giving you complete peace of mind.",
        },
        {
            icon: <FaHeart className={`text-4xl ${PINK_ACCENT}`} />,
            title: "User-Centric Experience",
            description: "Our platform is designed for you—easy navigation, personalized recommendations, and a seamless journey from browsing to closing.",
        },
        {
            icon: <FaChartLine className={`text-4xl ${PINK_ACCENT}`} />,
            title: "Market Expertise",
            description: "Benefit from our deep understanding of the local real estate market, ensuring you get the best value whether buying, selling, or renting.",
        },
        {
            icon: <FaRegCalendarCheck className={`text-4xl ${PINK_ACCENT}`} />,
            title: "24/7 Support",
            description: "We are here to assist you around the clock. Get timely responses and dedicated support for all your real estate inquiries.",
        },
    ];

    return (
        <section className='py-16 my-20'>
            
            <div className='text-center mb-12'>
                <h3 className={`text-2xl font-bold mb-2 ${PINK_ACCENT}`}>
                    THE DIFFERENCE
                </h3>
                <h2 className='font-extrabold text-4xl md:text-4xl text-gray-700 '>
                    Why Choose Our Real Estate Platform?
                </h2>
                <p className='text-gray-600 mt-3 max-w-2xl mx-auto'>
                    We combine technology with personalized service to deliver an exceptional property experience.
                </p>
            </div>

            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {features.map((feature, index) => (
                    <div 
                        key={index} 
                        className={`card text-center p-6 bg-base-100 rounded-xl ${CARD_SHADOW}`}
                    >
                      
                        <div className="flex justify-center mb-4">
                            {feature.icon}
                        </div>
                        
                      
                        <h4 className={`text-xl font-extrabold mb-3 text-gray-800`}>
                            {feature.title}
                        </h4>
                        
                        
                        <p className='text-gray-600 text-sm'>
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;