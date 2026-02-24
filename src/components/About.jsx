import AlekhyaPic from "../imgs/AlekhyaPic.jpeg";

function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto py-20 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-pink-600">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Profile Image */}
        <img
          src={AlekhyaPic}
          alt="Alekhya Mulpuri"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
        />

        {/* About Text */}
        <div className="text-gray-700 space-y-4 text-base sm:text-lg">
          <p>
            I’m Alekhya Mulpuri, a creative designer specializing in accessories
            and footwear. I love transforming ideas into unique designs that
            combine style, functionality, and personality.
          </p>
          <p>
            With a keen eye for detail and a passion for trends, I aim to create
            designs that resonate with people and stand out in the industry. I
            enjoy collaborating with brands and exploring innovative approaches
            to design challenges.
          </p>
          <p>
            Outside of design, I enjoy traveling, exploring different cultures,
            and indulging in several art forms, and collecting antiques. These
            hobbies inspire my work and fuel my creativity, allowing me to bring
            fresh perspectives to every project I undertake.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
