import { Link } from "react-router-dom";

function Toms() {
  return (
    <section className="min-h-screen bg-white px-6 py-24 flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold text-pink-600 mb-10">Toms</h1>

      <div className="mb-16 w-full max-w-3xl">
        <img
          src="/logos/toms.png"
          alt="Toms Project"
          className="w-full rounded-2xl mx-auto"
        />
      </div>

      <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-10">
        Add description here...
      </p>

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
