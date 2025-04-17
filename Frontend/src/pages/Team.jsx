import { useState } from "react";
import { motion } from "framer-motion";
import Tharakeshwaran from "../assets/team/Tharakeshwaran.jpg";
import Abishek from "../assets/team/Abishek.jpg";
import Aksheta from "../assets/team/Aksheta.jpg";
import Anandh from "../assets/team/Anandh.jpg";
import Ashwin from "../assets/team/Ashwin.jpg";
import Barath from "../assets/team/Barath.jpg";
import Bavishyaa from "../assets/team/Bavishyaa.jpg";
import Deepak from "../assets/team/Deepak.jpg";
import Dousik from "../assets/team/Dousik.jpg";
import Gautham from "../assets/team/Gautham.jpg";
import Gopinath from "../assets/team/Gopinath.jpg";
import Harikrishna from "../assets/team/Harikrishna.jpg";
import Harshaa from "../assets/team/Harshaa.jpg";
import Lakshana from "../assets/team/Lakshana.jpg";
import Lenin from "../assets/team/Lenin.jpg";
import Mahadev from "../assets/team/Mahadev.jpg";
import Modhika from "../assets/team/Modhika.jpg";
//import Rishikeesh from "../assets/team/Rishikeesh.jpg";
import Roshini from "../assets/team/Roshini.jpg";
import Sandeep from "../assets/team/Sandeep.jpg";
import Sania from "../assets/team/Sania.jpg";
import Shaswathra from "../assets/team/Shaswathra.jpg";
import Shivani from "../assets/team/Shivani.jpg";
import SriHarini from "../assets/team/SriHarini.jpg";
import SriHarish from "../assets/team/SriHarish.jpg";
import Thrisha from "../assets/team/Thrisha.jpg";
import VarshaRD from "../assets/team/VarshaRD.jpg";
import VarshaRS from "../assets/team/VarshaRS.png";
import Vismitha from "../assets/team/Vismitha.jpg";
import Waafiq from "../assets/team/Waafiq.jpeg";
import Nagarjun from "../assets/team/Nagarjun.jpg";
import Ravikrishna from "../assets/team/Ravikrishna.jpg";
import Venkatesh from "../assets/team/Venkatesh.jpg";

const subsystems = [
  {
    name: "Mechanical Subsytem",
    members: [{ name: "Tharakeshwaran", imageUrl: Tharakeshwaran }],
  },
  {
    name: "Electrical Subsystem",
    members: [
      { name: "Harshaa", imageUrl: Harshaa },
      { name: "Leninsingharam", imageUrl: Lenin },
      { name: "Barath Krishna", imageUrl: Barath },
      { name: "Anandh", imageUrl: Anandh },
      { name: "Mahadev", imageUrl: Mahadev },
    ],
  },
  {
    name: "Science and Sensors Subsystem",
    members: [
      { name: "Varsha RD", imageUrl: VarshaRD },
      { name: "Varsha RS", imageUrl: VarshaRS },
      { name: "Aksheta", imageUrl: Aksheta },
      { name: "Sania Franklin", imageUrl: Sania },
      { name: "Vismitha", imageUrl: Vismitha },
      { name: "Shaswathra", imageUrl: Shaswathra },
      { name: "Sri Harish", imageUrl: SriHarish },
      { name: "Bavishyaa", imageUrl: Bavishyaa },
      { name: "Modhika", imageUrl: Modhika },
      { name: "Thrisha", imageUrl: Thrisha },
      { name: "Gopinath", imageUrl: Gopinath },
    ],
  },
  {
    name: "ROS subsystem",
    members: [
      { name: "Shivani Varsha", imageUrl: Shivani },
      { name: "Ashwin M", imageUrl: Ashwin },
      { name: "Waafiq Raakin", imageUrl: Waafiq },
      { name: "Roshini Priya", imageUrl: Roshini },
    ],
  },
  {
    name: "Autonomous Subsytem",
    members: [
      { name: "Sandeep S", imageUrl: Sandeep },
      { name: "Harikrishna S", imageUrl: Harikrishna },
      { name: "Rishikeesh", imageUrl: "/src/assets/team/Rishikeesh.jpg" },
      { name: "Gautham Prasad", imageUrl: Gautham },
      { name: "Deepak Chandrasekar", imageUrl: Deepak },
      { name: "Lakshana G", imageUrl: Lakshana },
    ],
  },
  {
    name: "Communication Subsystem",
    members: [
      { name: "Abishek M", imageUrl: Abishek },
      { name: "Dousik M", imageUrl: Dousik },
      { name: "Sri Harini", imageUrl: SriHarini },
    ],
  },
];

const faculty = [
  {
    name: "Dr. Nagarjun J",
    imageUrl: Nagarjun,
    desig: "AP (SL. G) DEPT.MECH",
    role: "Faculty Incharge",
  },
  {
    name: "Dr. Ravikrishna S",
    imageUrl: Ravikrishna,
    desig: "AP (SR. G) DEPT.EEE.",
    role: "Faculty Advisor",
  },
  {
    name: "Dr. D Venkatesh",
    imageUrl: Venkatesh,
    desig: "AP (SR. G ) DEPT.ECE.",
    role: "Faculty Advisor",
  },
];

function Team() {
  const [visibleSubsystem, setVisibleSubsystem] = useState(null);
  const [showFaculty, setShowFaculty] = useState(false);

  const toggleSubsystem = (name) => {
    setVisibleSubsystem(visibleSubsystem === name ? null : name);
  };

  const toggleFaculty = () => {
    setShowFaculty(!showFaculty);
  };

  return (
    <div
      className="pt-16 team-container min-h-screen bg-cover bg-fixed bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1684018864429-42c0966d71e0?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
            <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[rgba(171,132,98,1)] to-white">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the brilliant minds behind Team AURORA. Our team is divided
              into multiple subsystems, each specializing in key areas of rover
              development and competition.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <button
              onClick={toggleFaculty}
              className="w-full text-left bg-gray-700 text-white text-3xl font-semibold py-3 px-6 rounded-lg hover:bg-gradient-to-r from-[rgba(171,132,98,0.5)] to-[rgba(255,255,255,0.7)] transition"
            >
              Faculty Advisors
            </button>

            {showFaculty && (
              <div className="grid md:grid-cols-3 gap-8 mt-6">
                {faculty.map((member, idx) => (
                  <motion.div
                    key={`faculty-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="card group p-6 bg-gray-800 rounded-lg text-center hover:bg-gradient-to-r from-[rgba(19,22,52,1)] to-[rgba(255, 255, 255, 0.64)]"
                  >
                    <div className="w-full h-80 bg-gray-600 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-200 object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {member.name}
                    </h3>
                    <p className="text-[rgba(171,132,98,0.8)]">
                      {member.desig}
                    </p>
                    <p className="text-[rgba(171,132,98,0.8)]">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
            <hr />
            <br />
          {/* Student Subsystems */}
          {subsystems.map((subsystem, index) => (
            <motion.div
              key={subsystem.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (index + 1) * 0.1 }}
              className="mb-12"
            >
              <button
                onClick={() => toggleSubsystem(subsystem.name)}
                className="w-full text-left bg-gray-700 text-white text-3xl font-semibold py-3 px-6 rounded-lg hover:bg-gradient-to-r from-[rgba(171,132,98,0.5)] to-[rgba(255,255,255,0.7)] transition"
              >
                {subsystem.name}
              </button>

              {visibleSubsystem === subsystem.name && (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
                  {subsystem.members.map((member, idx) => (
                    <motion.div
                      key={`${subsystem.name}-${idx}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className="card group p-6 bg-gray-800 rounded-lg text-center hover:bg-gradient-to-r from-[rgba(19,22,52,1)] to-[rgba(255, 255, 255, 0.64)]"
                    >
                      <div className="w-full h-60 bg-gray-600 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {member.name}
                      </h3>
                      <p className="text-[rgba(171,132,98,0.6)]">
                        {subsystem.name} Developer
                      </p>
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
