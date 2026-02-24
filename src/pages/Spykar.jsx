import { Link } from "react-router-dom";
import { useState } from "react";

function Spykar() {
  const [selectedImage, setSelectedImage] = useState(null);

  const slides = [
    "/projects/spykar/SPYKAR-01.png",
    "/projects/spykar/SPYKAR-02.png",
    "/projects/spykar/SPYKAR-03.png",
    "/projects/spykar/SPYKAR-04.png",
    "/projects/spykar/SPYKAR-05.png",
    "/projects/spykar/SPYKAR-06.png",
    "/projects/spykar/SPYKAR-07.png",
    "/projects/spykar/SPYKAR-08.png",
    "/projects/spykar/SPYKAR-09.png",
    "/projects/spykar/SPYKAR-10.png",
    "/projects/spykar/SPYKAR-11.png",
    "/projects/spykar/SPYKAR-12.png",
    "/projects/spykar/SPYKAR-13.png",
    "/projects/spykar/SPYKAR-14.png",
    "/projects/spykar/SPYKAR-15.png",
    "/projects/spykar/SPYKAR-16.png",
    "/projects/spykar/SPYKAR-17.png",
    "/projects/spykar/SPYKAR-18.png",
    "/projects/spykar/SPYKAR-19.png",
  ];

  return (
    <section className="min-h-screen bg-white px-4 sm:px-6 lg:px-10 py-20 flex flex-col items-center text-center">
      {/* Logo */}
      <div className="mb-14">
        <img
          src="/logos/spykar.png"
          alt="Spykar Project"
          className="w-40 sm:w-48 md:w-52 lg:w-56 xl:w-60 rounded-2xl mx-auto"
        />
      </div>

      {/* Slides */}
      <div className="w-full max-w-screen-2xl flex flex-col items-center space-y-7 mb-16">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Spykar Slide ${index + 1}`}
            onClick={() => setSelectedImage(slide)}
            className="w-full lg:w-[75%] rounded-2xl cursor-pointer transition duration-300 hover:scale-[1.01]"
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            ✕
          </button>

          <img
            src={selectedImage}
            alt="Expanded view"
            className="max-h-[95vh] max-w-[95vw] rounded-xl"
          />
        </div>
      )}

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

export default Spykar;
