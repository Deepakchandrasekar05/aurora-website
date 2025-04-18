import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import bg from "../assets/home_img.png";
import gp from "../assets/gp_goa.jpg";
import clg from "../assets/gp_goa2.jpg";
import rover from "../assets/rover.jpg";
import logo2 from "../assets/rover_t.png";
import bgVideo from "../assets/aurora.mp4";

function Home() {
  const scrollToContent = () => {
    setTimeout(() => {
      const section = document.getElementById("mission-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 md:px-20">
        <div className="absolute inset-0">
          <video
            src={bgVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center gap-x-24 gap-y-10">
            {/* Text */}
            <div className="text-center md:text-left mt-[30px]">
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-light mb-6"
              >
                Team Aurora
              </motion.h1>
              <br />
              <br />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-200 max-w-xl"
              >
                We are passionate group of students pushing the limits of rover
                technology and space exploration. We continue to redefine
                excellence in autonomous robotics.
              </motion.p>
            </div>

            {/* Rover Image with hover animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="mt-10 md:mt-0"
            >
              <motion.img
                src={logo2}
                alt="Rover Logo"
                className="w-48 h-48 md:w-64 md:h-64 object-contain shadow-xl"
                whileHover={{
                  scale: 1.1,
                  rotate: 2,
                  x: -20,
                  y: -5, // simulate slight lift on hover
                }}
                whileTap={{ scale: 0.95 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Down Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
          onClick={scrollToContent}
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
            <div className="relative flex items-center">
              <div className="hidden md:block w-1 h-full bg-gradient-to-b from-[rgba(171,132,98,1)] to-transparent"></div>
              <div className="ml-6">
                <img
                  src={rover}
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
            <div className="relative flex items-center">
              <div className="hidden md:block w-1 h-full bg-gradient-to-b from-[rgba(171,132,98,1)] to-transparent"></div>
              <div className="mr-6">
                <img
                  src={clg}
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
            <div className="relative flex items-center">
              <div className="hidden md:block w-1 h-full bg-gradient-to-b from-[rgba(171,132,98,1)] to-transparent"></div>
              <div className="ml-6">
                <img
                  src={gp}
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
