import { Link } from "react-router-dom";
import { useState } from "react";

function Toms() {
  const [selectedImage, setSelectedImage] = useState(null);

  const slides = [
    "/projects/toms/TOMS-22.png",
    "/projects/toms/TOMS-23.png",
    "/projects/toms/TOMS-24.png",
    "/projects/toms/TOMS-25.png",
    "/projects/toms/TOMS-26.png",
    "/projects/toms/TOMS-27.png",
    "/projects/toms/TOMS-28.png",
    "/projects/toms/TOMS-29.png",
    "/projects/toms/TOMS-30.png",
  ];

  return (
    <section className="min-h-screen bg-white px-4 sm:px-6 lg:px-10 py-20 flex flex-col items-center text-center">
      {/* Logo */}
      <div className="mb-14">
        <img
          src="/projects/toms/TOMS-1.png"
          alt="Toms Project"
          className="w-40 sm:w-48 md:w-52 lg:w-56 xl:w-60 rounded-2xl mx-auto"
        />
      </div>

      {/* Slides */}
      <div className="w-full max-w-screen-2xl flex flex-col items-center space-y-4 md:space-y-6 lg:space-y-7 mb-16">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Toms Slide ${index + 1}`}
            loading="lazy"
            onClick={() => setSelectedImage(slide)}
            className="w-full lg:w-[75%] 2xl cursor-pointer transition duration-300 hover:scale-[1.01]"
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

export default Toms;
