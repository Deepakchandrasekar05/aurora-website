import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Deepshika",
    role: "Team Lead",
    image: "" // Placeholder for your team lead image
  },
  {
    name: "Ram Viknesh",
    role: "Vice-Lead",
    image: "" // Placeholder for mechanical engineer image
  },
  {
    name: "Marcus Rodriguez",
    role: "Software Engineer",
    image: "" // Placeholder for software engineer image
  },
  {
    name: "Emily Parker",
    role: "Electrical Engineer",
    image: "" // Placeholder for electrical engineer image
  }
];

function Team() {
  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 gradient-text">Our Team</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the brilliant minds behind Team AURORA. Our diverse team brings together
              expertise in mechanical engineering, software development, and robotics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Image Coming Soon</span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-purple-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;