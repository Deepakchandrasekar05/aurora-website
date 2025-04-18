// src/pages/Works.jsx
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import workshopImage from "../assets/workshop.jpeg";
import recruitImage from "../assets/recruit.png";
import bg from "../assets/home_img.png";

const works = [
  {
    title: "Recruitment Workshops",
    date: "April to July",
    location: "Campus and Online",
    description:
      "To onboard fresh talent and cultivate innovation, we regularly conduct recruitment workshops. These sessions provide hands-on experience in embedded systems, robotics, and collaborative engineering.",
    image: recruitImage,
  },
  {
    title: "PCB Prodigy @ Yukta 2025",
    date: "March, 2025",
    location: "PSG Institute of Technology and Applied Research",
    description:
      "During Yukta 2025, Team Aurora hosted the “PCB Prodigy” workshop, introducing participants to PCB design fundamentals, real-time simulation, and soldering techniques through a hands-on approach.",
    image: workshopImage,
  },
  
];

function Updates() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 pt-20 px-4 md:px-8 pb-12">
        {/* Page Title */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative z-10"
          >
          <h1
            className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r 
              from-[rgba(171,132,98,1)] to-white block leading-[1.2] pb-2"
          >
            Updates
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our workshops and outreach that inspire the next generation of innovators.
          </p>
        </motion.div>

        {/* Work Cards */}
        <div className="space-y-10">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-10 max-w-4xl mx-auto rounded-2xl shadow-xl 
              bg-gray-800/80 backdrop-blur-md border border-yellow-400/30 transition-transform 
              duration-500 hover:scale-105 hover:shadow-yellow-300/20"
            >
              {/* Image Section */}
              <div className="md:w-1/2 w-full flex justify-center items-center p-4">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-64 object-contain rounded-xl"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 w-full flex flex-col justify-center p-4 space-y-3">
                <h3 className="text-3xl font-bold text-white">{work.title}</h3>
                <div className="flex items-center space-x-2 text-yellow-400 text-sm">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg">{work.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-yellow-400 text-sm">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">{work.location}</span>
                </div>
                <p className="text-gray-300 text-base">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Updates;
