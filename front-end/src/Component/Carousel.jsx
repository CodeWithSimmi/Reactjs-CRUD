import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = () => {
  const images = ["Coffee.jpg", "Coffee 3.webp", "Coffee 2.webp"];
  
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {images.map((img, idx) => (
        <div key={idx} className="h-64">
          <img src={img} alt={`Slide ${idx + 1}`} className="object-cover w-full h-full" />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
