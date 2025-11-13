import React from 'react';



const HeroSlider = () => {
    
    
    const PINK_GRADIENT_BG = "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600";
   

    const slides = [
        {
            id: 1,
            image: "https://i.ibb.co.com/gbMRF7kt/gettyimages-1140618593-612x612.jpg",
            title: "Find Your Perfect Home Today",
            subtitle: "Browse thousands of verified listings for rent and sale across the city.",
            buttonText: "Explore Properties",
            link: "/allProperties",
        },
        {
            id: 2,
            image: "https://i.ibb.co.com/LdsW7dsc/photo-1556740738-b6a63e27c4df.jpg", // Replace with high-quality image URL
            title: "Exclusive Rental Deals Await",
            subtitle: "Secure your next apartment with zero hidden fees and fast approval process.",
            buttonText: "View Rentals",
            link: "/allProperties?category=Rent",
        },
        {
            id: 3,
            image: "https://i.ibb.co.com/Kxy53vdx/photo-1441986300917-64674bd600d8.jpg", // Replace with high-quality image URL
            title: "Sell Your Property with Ease",
            subtitle: "List your home and connect with serious buyers through our expert platform.",
            buttonText: "Start Selling",
            link: "/addProperties",
        },
    ];

    
    
    return (
        <div className="w-full mx-auto mb-16 h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
           
            <div className="carousel w-full h-full"> 
                {slides.map((slide, index) => (
                   
                    <div 
                        key={slide.id} 
                        id={`slide${index + 1}`} 
                        className="carousel-item relative w-full"
                    >
                        
                        <img 
                            src={slide.image} 
                            className="w-full h-full object-cover" 
                            alt={`Slide ${slide.id}`}
                        />
                        
                      
                        <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center p-4 md:p-12">
                            <div className="text-center max-w-3xl text-white">
                                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-sm md:text-xl mb-8 font-medium">
                                    {slide.subtitle}
                                </p>
                                
                                
                                <a 
                                    href={slide.link} 
                                    className={`inline-block font-semibold text-base md:text-lg px-8 py-3 rounded-lg transition duration-300 shadow-xl ${PINK_GRADIENT_BG}`}
                                >
                                    {slide.buttonText}
                                </a>
                            </div>
                        </div>

                       
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={`#slide${index === 0 ? slides.length : index}`} className="btn btn-circle bg-white bg-opacity-20 border-none text-white hover:bg-opacity-40">❮</a> 
                            <a href={`#slide${index === slides.length - 1 ? 1 : index + 2}`} className="btn btn-circle bg-white bg-opacity-20 border-none text-white hover:bg-opacity-40">❯</a>
                        </div>
                    </div>
                ))}
            </div>
            
            
        </div>
    );
};

export default HeroSlider;