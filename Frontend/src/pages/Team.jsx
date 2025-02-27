import { useState } from "react";
import { motion } from "framer-motion";

const subsystems = [
  {
    name: "Mechanical",
    members: [
      "Ram Viknesh", "John Doe", "Jane Smith", "Alice Brown", "Bob Johnson",
      "Charlie Davis", "David Wilson", "Emma Thomas", "Frank White", "Grace Lewis"
    ]
  },
  {
    name: "Software",
    members: [
      "Marcus Rodriguez", "Liam Martinez", "Sophia Anderson", "Mason Taylor", "Olivia Harris",
      "Ethan Clark", "Ava Walker", "James Hall", "Isabella Allen", "Benjamin Young"
    ]
  },
  {
    name: "Electrical",
    members: [
      "Emily Parker", "Michael King", "Abigail Wright", "Daniel Scott", "Madison Green",
      "Lucas Baker", "Ella Adams", "Alexander Nelson", "Chloe Carter", "Samuel Mitchell"
    ]
  },
  {
    name: "Science",
    members: [
      "Henry Perez", "Lillian Roberts", "Jack Turner", "Zoe Phillips", "Nathan Campbell",
      "Harper Evans", "Sebastian Edwards", "Evelyn Collins", "Owen Stewart", "Scarlett Morris"
    ]
  },
  {
    name: "Systems Integration",
    members: [
      "William Murphy", "Victoria Cook", "Joseph Rivera", "Aria Flores", "Gabriel Reed",
      "Hannah Diaz", "Carter Brooks", "Penelope Jenkins", "Luke Rogers", "Nova Foster"
    ]
  },
  {
    name: "Autonomy",
    members: [
      "Dylan Gonzales", "Violet Simmons", "Caleb Bryant", "Aurora Russell", "Julian Butler",
      "Layla Peterson", "Eli Perry", "Natalie Cooper", "Christopher Howard", "Savannah Ward"
    ]
  },
  {
    name: "Operations",
    members: [
      "Levi Torres", "Brooklyn Bell", "Isaac Bailey", "Lucy Murphy", "Maverick Richardson",
      "Stella Cox", "Nicholas Ramirez", "Paisley Sanders", "Nathaniel Price", "Everly Griffin"
    ]
  }
];

function Team() {
  const [visibleSubsystem, setVisibleSubsystem] = useState(null);

  const toggleSubsystem = (name) => {
    setVisibleSubsystem(visibleSubsystem === name ? null : name);
  };

  return (
    <div
      className="pt-16 team-container min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1684018864429-42c0966d71e0?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[rgba(171,132,98,0.8)] to-[rgba(255,255,255,0.9)]">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the brilliant minds behind Team AURORA. Our team is divided into multiple subsystems,
              each specializing in key areas of rover development and competition.
            </p>
          </motion.div>

          {subsystems.map((subsystem, index) => (
            <motion.div
              key={subsystem.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-12"
            >
              <button
                onClick={() => toggleSubsystem(subsystem.name)}
                className="w-full text-left bg-gray-700 text-white text-3xl font-semibold py-3 px-6 rounded-lg hover:bg-gradient-to-r from-[rgba(171,132,98,0.5)] to-[rgba(255,255,255,0.7)] transition"
              >
                {subsystem.name}
              </button>

              {visibleSubsystem === subsystem.name && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                  {subsystem.members.map((member, idx) => (
                    <motion.div
                      key={member}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className="card group p-6 bg-gray-800 rounded-lg text-center hover:bg-gradient-to-r from-[rgba(171,132,98,0.5)] to-[rgba(255,255,255,0.8)]"
                    >
                      <div className="w-full h-32 bg-gray-600 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-gray-300 font-medium">Image Coming Soon</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">{member}</h3>
                      <p className="text-[rgba(171,132,98,0.6)]">{subsystem.name} Engineer</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Team;
