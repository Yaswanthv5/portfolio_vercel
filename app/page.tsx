import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import "@/styles/global.css"; // Ensure the correct absolute path

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  const profile = {
    name: "Varikuti Yaswanthreddy",
    title: "Programmer Analyst (Data Engineer) at Cognizant",
    location: "Andhra Pradesh, India",
    contact: "Yyaswanthreddy5@gmail.com | 7997792835",
    linkedin: "https://www.linkedin.com/in/varikuti-yaswanthreddy",
    skills: ["Amazon EMR", "Snowflake", "Informatica"],
    languages: ["English", "Hindi", "Telugu"],
    certifications: [
      "Artificial Intelligence",
      "Oracle Cloud Infrastructure 2024 AI Associate",
      "BigQuery ML Skill Badge",
      "Python Programming"
    ],
    experience: [
      {
        role: "Programming Analyst",
        company: "Cognizant",
        duration: "July 2024 - Present",
        location: "Chennai, India"
      },
      {
        role: "Programmer Analyst Trainee",
        company: "Cognizant",
        duration: "June 2023 - July 2024",
        location: "Chennai, India"
      },
      {
        role: "Data Engineer",
        company: "Cognizant",
        duration: "Jan 2023 - July 2023",
        location: "Bengaluru, India"
      },
      {
        role: "Project Intern",
        company: "Entuple Technologies Pvt. Ltd.",
        duration: "June 2021 - Nov 2021",
        location: "Bengaluru, India"
      }
    ],
    education: [
      {
        institution: "GMR Institute of Technology",
        degree: "B.Tech, Electronics & Communication Engineering",
        duration: "2018 - 2022"
      }
    ]
  };

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-gray-100 text-black min-h-screen"}>
      <div className="container mx-auto p-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center"
        >
          <h1 className="text-4xl font-bold">{profile.name}</h1>
          <Button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun /> : <Moon />}
          </Button>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl mt-2"
        >
          {profile.title}
        </motion.h2>
        <p className="mt-2">📍 {profile.location}</p>
        <p className="mt-2">📧 {profile.contact}</p>
        <a href={profile.linkedin} target="_blank" className="text-blue-400 mt-2 inline-block">LinkedIn Profile</a>
        
        <h2 className="text-3xl mt-8 font-semibold">Experience</h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {profile.experience.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transform transition"
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p>{exp.company} - {exp.duration}</p>
              <p className="text-sm mt-1">📍 {exp.location}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
