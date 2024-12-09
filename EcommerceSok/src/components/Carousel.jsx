import React, { useState, useEffect } from 'react';

const images = [
  '/images/bike1.jpg', 
  '/images/bike2.jpg', 
  '/images/bike3.jpg',
  '/images/bike4.jpg'
];

const Carousel = () => {
  const [imgCarousel, setimgCarousel] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
      setimgCarousel((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);


  const imgPrev = () => {
    setimgCarousel(imgCarousel === 0 ? images.length - 1 : imgCarousel - 1);
  };


  const imgNext = () => {
    setimgCarousel(imgCarousel === images.length - 1 ? 0 : imgCarousel + 1);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
     
     <div className="overflow-hidden rounded-lg shadow-lg">
  <img 
    src={images[imgCarousel]} 
    alt={`Slide ${imgCarousel + 1}`} 
    className="w-full h-auto aspect-video object-cover transition-all duration-700"
  />
</div>

      
      <button 
        onClick={imgPrev} 
        className="absolute top-1/2 left-2 transform -translate-y-1/2"
      >
        {"<"}
      </button>
      <button 
        onClick={imgNext} 
        className="absolute top-1/2 right-2 transform -translate-y-1/2"
      >
        {">"}
      </button>

      
      
    </div>
  );
};

export default Carousel;
