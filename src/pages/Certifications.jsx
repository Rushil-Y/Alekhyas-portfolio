import { useNavigate } from "react-router-dom";

function Certifications() {
  const navigate = useNavigate();

  return (
    <div className="certifications-page min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-8 mb-6">Certifications</h1>

      <iframe
        src="/certificates/Alekhya Mulpuri SNE Certificate (1).pdf"
        title="Certification"
        width="90%"
        height="700px"
        className="border rounded-lg"
      ></iframe>

      <button
        onClick={() => navigate("/")}
        className="mt-8 mb-8 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full transition duration-300"
      >
        Back to Home
      </button>
    </div>
  );
}

export default Certifications;
