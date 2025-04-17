// Challenge Data
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import IRC_logo from "../assets/IRC_logo.png";
import ERC_logo from "../assets/ERC_logo.png";
import Mars from "../assets/Mars.jpg";
import CAT from "../assets/CAT.png";
import ISRO from "../assets/ISRO.jpg";
import IRDC from "../assets/IRDC.png";
import URC_logo from "../assets/URC_logo.png";
import bg from "../assets/galaxy.png";

const challenges = [
  {
    title: "Mars Base Challenge 2025",
    date: "March, 2025",
    location: "Online",
    description: "Secured 6th place globally for designing sustainable solutions for Mars habitation.",
    image: Mars,
    sortDate: new Date("2025-03-01"),
  },
  {
    title: "International Rover Challenge 2025",
    date: "January, 2025",
    location: "India",
    description: "Secured 24th place globally while continuing to push engineering boundaries.",
    image: IRC_logo,
    sortDate: new Date("2025-01-01"),
  },
  {
    title: "ISRO Robotics Challenge-URSC 2024",
    date: "February, 2024",
    location: "Bangalore, India",
    description: "Advanced to semi-finals at national level in ISRO's prestigious robotics challenge.",
    image: ISRO,
    sortDate: new Date("2024-02-01"),
  },
  {
    title: "International Rover Challenge 2024",
    date: "January, 2024",
    location: "BITS Pilani GOA Campus, India",
    description: "Secured 15th place globally in a highly competitive environment.",
    image: IRC_logo,
    sortDate: new Date("2024-01-01"),
  },
  {
    title: "Caterpillar Autonomy Challenge 2024",
    date: "March, 2024",
    location: "Online",
    description: "Showcased our team’s autonomy and robotics innovations at an international level.",
    image: CAT,
    sortDate: new Date("2024-03-01"),
  },
  {
    title: "European Rover Challenge (Remote Edition) 2023",
    date: "September, 2023",
    location: "Remote - Poland",
    description: "Ranked 15th globally amidst top-performing international teams.",
    image: ERC_logo,
    sortDate: new Date("2023-09-01"),
  },
  {
    title: "International Rover Design Challenge 2023",
    date: "August, 2023",
    location: "Online",
    description: "Achieved 2nd place internationally with our cutting-edge rover design.",
    image: IRDC,
    sortDate: new Date("2023-08-01"),
  },
  {
    title: "International Rover Challenge 2023",
    date: "January, 2023",
    location: "COEP Pune, India",
    description: "Secured 15th place globally with strong team performance on Mars analog terrain.",
    image: IRC_logo,
    sortDate: new Date("2023-01-01"),
  },
  {
    title: "International Rover Design Challenge 2022",
    date: "August, 2022",
    location: "Online",
    description: "Achieved 4th place internationally with significant performance and innovation.",
    image: IRDC,
    sortDate: new Date("2022-08-01"),
  },
  {
    title: "European Rover Challenge (Remote Edition) 2022",
    date: "September, 2022",
    location: "Remote - Poland",
    description: "Ranked 7th globally in Europe's top remote rover challenge.",
    image: ERC_logo,
    sortDate: new Date("2022-09-01"),
  },
  {
    title: "International Rover Design Challenge 2021",
    date: "August, 2021",
    location: "Online",
    description: "Secured 7th place internationally demonstrating advanced rover capabilities.",
    image: IRDC,
    sortDate: new Date("2021-08-01"),
  },
  {
    title: "International Mars Hackathon 2020",
    date: "November, 2020",
    location: "Online",
    description: "Achieved 6th place globally showcasing innovative Mars tech solutions.",
    image: Mars,
    sortDate: new Date("2020-11-01"),
  },
];

const sortedChallenges = challenges.sort((a, b) => b.sortDate - a.sortDate);

function Challenges() {
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
          className="text-center mb-12"
        >
           <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r 
              from-[rgba(171,132,98,1)] to-white block leading-[1.2] pb-2"
            >
            Challenges
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            A journey of excellence through international and national-level
            competitions where Team AURORA displayed its robotics expertise.
          </p>
        </motion.div>

        {/* Challenge Cards */}
        <div className="space-y-10">
          {sortedChallenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
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
                  src={challenge.image}
                  alt={challenge.title}
                  className="w-full h-64 object-contain rounded-xl"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 w-full flex flex-col justify-center p-4 space-y-3">
                <h3 className="text-3xl font-bold text-white">{challenge.title}</h3>
                <div className="flex items-center space-x-2 text-yellow-400 text-sm">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg">{challenge.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-yellow-400 text-sm">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">{challenge.location}</span>
                </div>
                <p className="text-gray-300 text-base">{challenge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Challenges;
