import { Link } from "react-router-dom";

function Skechers() {
  const slides = [
    "/projects/skechers/2.png",
    "/projects/skechers/3.png",
    "/projects/skechers/4.png",
    "/projects/skechers/5.png",
    "/projects/skechers/6.png",
    "/projects/skechers/7.png",
    "/projects/skechers/8.png",
    "/projects/skechers/9.png",
    "/projects/skechers/10.png",
  ];

  return (
    <section className="min-h-screen bg-white px-6 py-24 flex flex-col items-center text-center">
      {/* Main Logo */}
      <div className="mb-16">
        <img
          src="/logos/skechers.png"
          alt="Skechers Project"
          className="w-40 sm:w-48 md:w-52 lg:w-56 xl:w-60 rounded-2xl mx-auto"
        />
      </div>

      {/* slides */}
      <div className="w-full lg:max-w-6xl flex flex-col items-center space-y-10 mb-10">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Skechers Slide ${index + 1}`}
            className="w-full sm:w-11/12 lg:w-3/4 xl:w-2/3 rounded-2xl"
          />
        ))}
      </div>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300"
      >
        Back to Home
      </Link>
    </section>
  );
}

export default Skechers;
