import { Link } from "react-router-dom";

function Firstcry() {
  const slides = [
    "/projects/firstcry/12.png",
    "/projects/firstcry/13.png",
    "/projects/firstcry/14.png",
    "/projects/firstcry/15.png",
  ];

  return (
    <section className="min-h-screen bg-white px-6 py-24 flex flex-col items-center text-center">
      {/*  Logo */}
      <div className="mb-16">
        <img
          src="/logos/firstcry.png"
          alt="Firstcry Project"
          className="w-40 sm:w-48 md:w-52 lg:w-56 xl:w-60 rounded-2xl mx-auto"
        />
      </div>

      {/* Slides */}
      <div className="w-full lg:max-w-6xl flex flex-col items-center space-y-10 mb-10">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Firstcry Slide ${index + 1}`}
            className="w-full sm:w-11/12 lg:w-3/4 xl:w-2/3 rounded-2xl"
          />
        ))}
      </div>

      {/* Back Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300"
      >
        Back to Home
      </Link>
    </section>
  );
}

export default Firstcry;
