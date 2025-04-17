import { motion } from 'framer-motion';
import Altium from "../assets/altium.png";
import Ansys from "../assets/ansys.png";
import vartech from "../assets/vartech.png";
import solidworks from "../assets/solidworks.png";
import bg from "../assets/galaxy.png";

const sponsors = [
  {
    name: "Altium",
    tier: "Bronze",
    logo: Altium
  },
  {
    name: "Solidworks",
    tier: "Bronze",
    logo: solidworks
  },
  {
    name: "Ansys",
    tier: "Bronze",
    logo: Ansys
  },
  {
    name: "VAR TECH",
    tier: "Bronze",
    logo: vartech
  }
];

function Sponsors() {
  return (
    <div
      className="pt-16 team-container min-h-screen bg-contain bg-center relative"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    <div className="pt-16 relative">
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative z-10"
          >
            {/* Golden gradient title with padding to prevent cutoff */}
            <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r 
              from-[rgba(171,132,98,1)] to-white block leading-[1.2] pb-2"
            >
              Our Sponsors
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are grateful for the support of our sponsors who make our mission possible.
              Their commitment to innovation helps drive our success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card text-center bg-gray-900/50 w-100 mx-auto p-6 rounded-xl border border-gray-700 rounded-lg shadow-lg bg-gray-800
                           transition duration-500 ease-in-out transform
                           hover:bg-gradient-to-r from-[rgba(171,132,98,0.5)] to-[rgba(246, 147, 0, 0.02)]
                           hover:scale-105"
              >
                <div className="h-40 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-full object-cover max-w-[1200px] mx-auto"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white">{sponsor.name}</h3>
                <p className="text-yellow-400 font-medium">{sponsor.tier} Sponsor</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r 
              from-[rgba(171,132,98,1)] to-white block leading-[1.2] pb-2"
            >
              Become a Sponsor
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Join us in pushing the boundaries of rover technology. Your support can help
              shape the future of space exploration.
            </p>
            <button className="px-8 py-3 bg-[rgba(171,132,98,0.5)] rounded-full text-white font-semibold hover:opacity-90 transition-opacity shadow-lg">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Sponsors;
