import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const challenges = [
  {
    title: "International Rover Challenge 2024",
    date: "January, 2024",
    location: "BITS Pilani GOA Campus, India",
    description: "A prestigious competition testing rover capabilities in Mars-like terrain.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80"
  },
  {
    title: "European Rover Challenge 2024",
    date: "September, 2024",
    location: "Kielce, Poland",
    description: "Europe's premier rover challenge focusing on autonomous navigation.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
  },
  {
    title: "University Rover Challenge 2023",
    date: "June, 2023",
    location: "Hanksville, Utah, USA",
    description: "An annual competition where teams design and build the next generation of Mars rovers.",
    image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&q=80"
  }
];

function Challenges() {
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
            {/* Fixed gradient text and ensured 'g' is fully visible */}
            <h1 
              className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r 
              from-[rgba(171,132,98,1)] to-white block leading-[1.2] pb-2"
            >
              Challenges
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the exciting competitions and challenges where Team AURORA showcases
              our rover's capabilities and innovative solutions.
            </p>
          </motion.div>

          <div className="space-y-12">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card flex flex-col md:flex-row gap-8"
              >
                <div className="md:w-1/2">
                  <img
                    src={challenge.image}
                    alt={challenge.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold text-white">{challenge.title}</h3>
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <Calendar className="w-5 h-5" />
                    <span>{challenge.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <MapPin className="w-5 h-5" />
                    <span>{challenge.location}</span>
                  </div>
                  <p className="text-gray-300">{challenge.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Challenges;
