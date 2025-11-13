import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const PINK_GRADIENT_TEXT = 
        "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500";
    const CARD_SHADOW = 
        "shadow-xl hover:shadow-2xl transition duration-300 ease-in-out border border-gray-100";

    const testimonials = [
        {
            quote: "The team provided outstanding support. We found our dream home in just two weeks thanks to their curated listings!",
            client: "Mr. & Mrs. Alam",
            property: "Luxury Apartment",
        },
        {
            quote: "Selling my property was seamless and fast. Their market valuation was spot on and resulted in a quick sale.",
            client: "Kazi Nabil",
            property: "Commercial Space",
        },
        {
            quote: "A truly professional and user-friendly experience. The agents were knowledgeable and responded instantly to all my queries.",
            client: "Shanta Begum",
            property: "Vacation Rental",
        },
    ];

    return (
        <section className='py-16 bg-pink-50/50 rounded-xl'>
            <div className='text-center mb-12'>
                <h2 className={`font-extrabold text-4xl md:text-5xl text-gray-800 ${PINK_GRADIENT_TEXT}`}>
                    What Our Clients Say
                </h2>
                <p className='text-gray-600 mt-3 max-w-2xl mx-auto'>
                    Hear directly from those who found their perfect property with us.
                </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-11/12 mx-auto'>
                {testimonials.map((testimony, index) => (
                    <div 
                        key={index} 
                        className={`card bg-white p-6 rounded-xl text-center ${CARD_SHADOW}`}
                    >
                        <FaQuoteLeft className='text-4xl text-pink-300 mx-auto mb-4' />
                        
                        <p className='text-gray-700 italic mb-5'>
                            "{testimony.quote}"
                        </p>
                        
                        <hr className="my-3 border-pink-100" />

                        <p className='font-bold text-gray-800'>{testimony.client}</p>
                        <p className='text-sm text-pink-500'>{testimony.property}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;