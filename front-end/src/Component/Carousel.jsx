import React, { useState, useEffect } from "react";
import images from "../../public/index";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full ">
     
      <div className="relative w-full  ">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full object-cover transition-opacity duration-200"
        />
      </div>
    </div>
  );
};

export default Hero;