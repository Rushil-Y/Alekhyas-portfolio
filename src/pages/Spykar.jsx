import { Link } from "react-router-dom";

function Spykar() {
  const slides = [
    "/projects/spykar/16.png",
    "/projects/spykar/17.png",
    "/projects/spykar/18.png",
    "/projects/spykar/19.png",
    "/projects/spykar/20.png",
    "/projects/spykar/21.png",
    "/projects/spykar/22.png",
    "/projects/spykar/23.png",
    "/projects/spykar/24.png",
    "/projects/spykar/25.png",
    "/projects/spykar/26.png",
    "/projects/spykar/27.png",
    "/projects/spykar/28.png",
    "/projects/spykar/29.png",
    "/projects/spykar/30.png",
    "/projects/spykar/31.png",
    "/projects/spykar/32.png",
    "/projects/spykar/33.png",
  ];

  return (
    <section className="min-h-screen bg-white px-6 py-24 flex flex-col items-center text-center">
      <div className="mb-16 w-full lg:max-w-6xl">
        <img
          src="/logos/spykar.png"
          alt="Spykar Project"
          className="w-full rounded-2xl mx-auto"
        />
      </div>

      <div className="w-full lg:max-w-6xl flex flex-col items-center space-y-10 mb-10">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Spykar Slide ${index + 1}`}
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

export default Spykar;
