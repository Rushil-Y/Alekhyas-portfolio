import { Link } from "react-router-dom";

function Toms() {
  const slides = [
    "/projects/toms/35.png",
    "/projects/toms/36.png",
    "/projects/toms/37.png",
    "/projects/toms/38.png",
    "/projects/toms/39.png",
    "/projects/toms/40.png",
    "/projects/toms/41.png",
    "/projects/toms/42.png",
    "/projects/toms/43.png",
  ];

  return (
    <section className="min-h-screen bg-white px-6 py-24 flex flex-col items-center text-center">
      <div className="mb-16 w-full lg:max-w-6xl">
        <img
          src="/logos/toms.png"
          alt="Toms Project"
          className="w-full rounded-2xl mx-auto"
        />
      </div>

      <div className="w-full lg:max-w-6xl flex flex-col items-center space-y-10 mb-10">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Toms Slide ${index + 1}`}
            className="w-full sm:w-11/12 lg:w-3/4 xl:w-2/3 rounded-2xl"
          />
        ))}
      </div>

      <Link
        to="/"
        className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300"
      >
        Back to Home
      </Link>
    </section>
  );
}

export default Toms;
