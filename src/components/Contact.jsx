function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8 bg-pink-50"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-pink-600">
        Get in Touch
      </h2>
      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
        Want to collaborate or just drop a friendly hello? You can reach me
        through any of the platforms below, or feel free to send me an email
        directly.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a
          href="mailto:mulpurialekhya01@gmail.com"
          className="px-6 py-3 w-full sm:w-auto text-center bg-pink-500 text-white rounded-xl shadow-md hover:bg-pink-600 hover:scale-105 transform transition duration-300"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/alekhya-mulpuri-158763215/"
          target="_blank"
          className="px-6 py-3 w-full sm:w-auto text-center bg-pink-600 text-white rounded-xl shadow-md hover:bg-pink-700 hover:scale-105 transform transition duration-300"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
