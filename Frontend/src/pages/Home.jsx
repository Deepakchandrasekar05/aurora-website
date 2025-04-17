import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import bg from "../assets/home_img.png";

function Home() {
  const scrollToContent = () => {
    setTimeout(() => {
      const section = document.getElementById("mission-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Small delay
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start">
        <div className="absolute inset-0">
          <img
            src={bg}
            alt="Space Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>


        <div className="relative z-10 text-left px-4 md:px-8 max-w-3xl pl-6 md:pl-12 ml-0 md:ml-[300px]">

        <div className="relative z-10 text-left px-4 max-w-3xl pl-20 ml-[300px]">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}

            className="text-5xl md:text-7xl font-light mb-6"

            className="text-6xl md:text-7xl font-light mb-6"

          >
            Team Aurora
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}

            className="text-lg md:text-2xl text-gray-300 max-w-xl"

            className="text-xl md:text-2xl text-gray-300 max-w-xl"

          >
            Pushing the boundaries of rover technology and exploration
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToContent}
          style={{ pointerEvents: "auto" }} // Ensure clickable behavior
        >
          <ChevronDown className="w-8 h-8 animate-bounce text-white" />
        </motion.div>
      </section>

      {/* Mission Section */}
      <section id="mission-section" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[rgba(171,132,98,1)] to-white">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Team AURORA is dedicated to pushing the boundaries of rover
                technology through innovative design and engineering. Our
                mission is to develop cutting-edge rovers capable of exploring
                challenging terrains and competing at the highest level in
                international competitions.
              </p>
            </div>

            {/* Divider and Image Card */}
            <div className="relative flex items-center">
              <div className="hidden md:block w-1 h-full bg-gradient-to-b from-[rgba(171,132,98,1)] to-transparent"></div>
              <div className="ml-6">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
                  alt="Rover Design"
                  className="rounded-lg w-full shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div


            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[rgba(171,132,98,1)] to-white">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Team AURORA is dedicated to pushing the boundaries of rover
                technology through innovative design and engineering. Our
                mission is to develop cutting-edge rovers capable of exploring
                challenging terrains and competing at the highest level in
                international competitions.
              </p>
            </div>

            {/* Divider and Image Card */}
            <div className="relative flex items-center">
              <div className="hidden md:block w-1 h-full bg-gradient-to-b from-[rgba(171,132,98,1)] to-transparent"></div>
              <div className="ml-6">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
                  alt="Rover Design"
                  className="rounded-lg w-full shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Divider and Image Card */}
            <div className="relative flex items-center">
              <div className="hidden md:block w-1 h-full bg-gradient-to-b from-[rgba(171,132,98,1)] to-transparent"></div>
              <div className="mr-6">
                <img
                  src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80"
                  alt="Team Working"
                  className="rounded-lg w-full shadow-lg"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[rgba(171,132,98,1)] to-white">
                About Us
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We are a team of passionate engineers, designers, and innovators
                united by our love for robotics and space exploration. Our
                members come from diverse backgrounds, bringing unique skills
                and perspectives to the table. Through collaboration and
                determination, we strive to create the next generation of
                autonomous rovers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About IRC Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[rgba(171,132,98,1)] to-white">
                About IRC
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                The International Rover Challenge (IRC) is a prestigious
                competition that brings together top student teams from around
                the world to design and build rovers capable of tackling
                real-world challenges. It tests the limits of innovation,
                problem-solving, and teamwork, pushing participants to develop
                groundbreaking solutions in robotics and automation.
              </p>
            </div>

            {/* Divider and Image Card */}
            <div className="relative flex items-center">
              <div className="hidden md:block w-1 h-full bg-gradient-to-b from-[rgba(171,132,98,1)] to-transparent"></div>
              <div className="ml-6">
                <img
                  src="https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?auto=format&fit=crop&q=80"

                  alt="IRC Competition" 

                  alt="IRC Competition"

                  className="rounded-lg w-full shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
