"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaNodeJs, FaVuejs, FaAngular, FaStripe, FaAws, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiFirebase, SiTypescript, SiTensorflow, SiFastapi, SiChartdotjs, SiFfmpeg, SiInstagram } from "react-icons/si";

type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  date: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution dengan React, Next.js, dan Stripe integration.",
    category: "Web Development",
    tags: ["React", "Next.js", "TypeScript", "Stripe"],
    image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600",
    demoUrl: "#",
    githubUrl: "#",
    date: "2024-01-15",
    featured: true,
  },
  {
    id: "2",
    title: "AI Task Manager",
    description: "Aplikasi manajemen tugas berbasis AI dengan TensorFlow dan FastAPI.",
    category: "AI/ML",
    tags: ["Python", "TensorFlow", "React", "FastAPI"],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    demoUrl: "#",
    githubUrl: "#",
    date: "2024-02-20",
    featured: true,
  },
  {
    id: "3",
    title: "Crypto Portfolio Tracker",
    description: "Track dan analisa portofolio crypto secara real-time.",
    category: "Finance",
    tags: ["Vue.js", "Node.js", "Chart.js"],
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600",
    demoUrl: "#",
    githubUrl: "#",
    date: "2024-03-10",
    featured: false,
  },
  {
    id: "4",
    title: "Social Media Dashboard",
    description: "Dashboard untuk kelola akun sosial media dengan fitur analytics dan schedule.",
    category: "Social Media",
    tags: ["Angular", "Firebase", "Instagram API"],
    image: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=600",
    demoUrl: "#",
    githubUrl: "#",
    date: "2024-02-05",
    featured: false,
  },
  {
    id: "5",
    title: "Weather Forecast App",
    description: "Aplikasi ramalan cuaca interaktif dengan notifikasi cuaca ekstrem.",
    category: "Mobile",
    tags: ["React Native", "Weather API", "Maps", "Push Notifications"],
    image: "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=600",
    demoUrl: "#",
    githubUrl: "#",
    date: "2024-01-28",
    featured: false,
  },
  {
    id: "6",
    title: "Video Streaming Platform",
    description: "Platform streaming seperti Netflix dengan FFmpeg dan AWS S3.",
    category: "Entertainment",
    tags: ["React", "Node.js", "FFmpeg", "AWS S3"],
    image: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=600",
    demoUrl: "#",
    githubUrl: "#",
    date: "2024-03-25",
    featured: true,
  },
];

const getTechIcon = (tag: string) => {
  const icons: Record<string, JSX.Element> = {
    React: <FaReact className="text-cyan-400" />,
    "Next.js": <SiNextdotjs className="text-white" />,
    TypeScript: <SiTypescript className="text-blue-500" />,
    Stripe: <FaStripe className="text-purple-500" />,
    Python: <FaPython className="text-yellow-300" />,
    TensorFlow: <SiTensorflow className="text-orange-500" />,
    FastAPI: <SiFastapi className="text-teal-400" />,
    "Vue.js": <FaVuejs className="text-green-400" />,
    "Node.js": <FaNodeJs className="text-green-600" />,
    "Chart.js": <SiChartdotjs className="text-pink-500" />,
    Angular: <FaAngular className="text-red-600" />,
    Firebase: <SiFirebase className="text-yellow-400" />,
    "Instagram API": <SiInstagram className="text-pink-400" />,
    FFmpeg: <SiFfmpeg className="text-gray-400" />,
    "AWS S3": <FaAws className="text-orange-400" />,
  };
  return icons[tag] || <span className="text-white">{tag}</span>;
};

const ProjectShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory);

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  return (
    <div id="projects" className="min-h-screen bg-black text-white px-8 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>

      <div className="flex justify-center mb-8 flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${selectedCategory === cat ? "bg-white text-black" : "bg-gray-800 text-white hover:bg-blue-500 hover:shadow-[0_0_10px_#3b82f6]"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-black group rounded-xl overflow-hidden transition-all duration-300 border border-gray-800 shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-500 backdrop-blur-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-3 text-2xl ">
                {project.tags.map((tag) => (
                  <div key={tag}>{getTechIcon(tag)}</div>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                <a href={project.demoUrl} className="text-blue-400 text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.githubUrl} className="text-blue-400 text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
