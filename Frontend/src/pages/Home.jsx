import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import bg from "../assets/home_img.png";

function Home() {
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

        <div className="relative z-10 text-left px-4 max-w-3xl pl-20 ml-[300px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-light mb-6"
          >
            Team Aurora
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-xl"
          >
            Pushing the boundaries of rover technology and exploration
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 animate-bounce text-white" />
        </motion.div>
      </section>

      {/* Mission Section */}
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
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
                alt="Rover Design"
                className="rounded-lg w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
