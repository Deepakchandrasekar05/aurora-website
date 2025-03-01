import { motion } from 'framer-motion';

const sponsors = [
  {
    name: "Altium",
    tier: "Platinum",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
  },
  {
    name: "Solidworks",
    tier: "Gold",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80"
  },
  {
    name: "Ansys",
    tier: "Silver",
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
  }
];

function Sponsors() {
  return (
    <div className="pt-16 relative">
      <section className="py-20 px-4">
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

          <div className="grid md:grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card text-center bg-gray-900/50 p-6 rounded-xl border border-gray-700 shadow-lg"
              >
                <div className="h-40 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-full object-cover"
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
            <button className="px-8 py-3 bg-[#131634] rounded-full text-white font-semibold hover:opacity-90 transition-opacity shadow-lg">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Sponsors;
