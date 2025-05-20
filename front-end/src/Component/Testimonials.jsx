import React from "react";
import Slider from "react-slick"; // Install this with `npm install react-slick slick-carousel`
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "This platform is amazing! It has simplified my workflow.",
      position: "Product Manager",
    },
    {
      name: "Jane Smith",
      feedback:
        "I appreciate the user-friendly design and the excellent support team.",
      position: "Marketing Specialist",
    },
    {
      name: "Alice Johnson",
      feedback: "A must-use service for anyone looking for efficiency.",
      position: "CEO, TechNova",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="bg-gray-100 py-12 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Users Say
      </h2>
      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <p className="text-lg text-gray-700 italic">
                "{testimonial.feedback}"
              </p>
              <h4 className="mt-4 font-semibold text-xl text-gray-800">
                {testimonial.name}
              </h4>
              <span className="text-sm text-gray-500">{testimonial.position}</span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
