import ImageCarousel from "../Component/Carousel";

const LandingPage = () => {
  return (
    <div>
      <ImageCarousel />
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold">Welcome to Our Platform</h1>
        <p className="text-lg mt-4">Explore our features and products!</p>
      </div>
    </div>
  );
};

export default LandingPage;
