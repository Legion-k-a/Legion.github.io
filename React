// TailwindCSS + Animations version of Abdulaziz Portfolio
import React from "react";
import { motion } from "framer-motion";

const Section = ({ title, children }) => (
  <motion.section
    className="mb-10 bg-white p-6 rounded-2xl shadow-lg"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </motion.section>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100 text-gray-800">
      <header className="text-center py-10 bg-white shadow-md">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Abdulaziz
        </motion.h1>
        <p className="text-lg text-gray-600 mt-2">
          Web Developer | Car Sales Pro | Tech Enthusiast
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <Section title="👋 About Me">
          <p>
            I’m Abdulaziz, a motivated student from Uzbekistan. I enjoy coding, business,
            and gaming. Skilled in HTML, CSS, JS and passionate about frontend development,
            trading, logistics, and fitness nutrition. I help sell cars with my dad and play
            CS2 (Mirage!) and Dota 2.
          </p>
        </Section>

        <Section title="🛠 Skills">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 list-disc pl-5">
            <li>HTML5 / CSS3 / JavaScript</li>
            <li>Responsive Design</li>
            <li>Car Market Analysis</li>
            <li>Trading & Import Logistics</li>
            <li>React (basic)</li>
            <li>Git & GitHub</li>
            <li>English B1+ / Russian / Uzbek</li>
            <li>Teamwork & Communication</li>
          </ul>
        </Section>

        <Section title="📂 Projects">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-5">
            <li>Personal Portfolio Website (this one!)</li>
            <li>Simple Car Listing HTML Page</li>
            <li>Frontend Task Manager UI</li>
            <li>Logistics Info App (mockup)</li>
          </ul>
        </Section>

        <Section title="📸 Gallery">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "tashkent",
              "cars",
              "computer",
              "csgo",
              "nutrition",
              "travel",
            ].map((tag, i) => (
              <motion.img
                key={i}
                src={`https://source.unsplash.com/featured/?${tag}`}
                alt={tag}
                className="w-full h-48 object-cover rounded-xl shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </Section>

        <Section title="📬 Contact">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:abdulaziz@example.com"
              className="px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800"
            >
              ✉️ Email
            </a>
            <a
              href="tel:+998901234567"
              className="px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800"
            >
              📞 Call
            </a>
            <a
              href="https://github.com/abdulazizdev"
              target="_blank"
              className="px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800"
            >
              💻 GitHub
            </a>
          </div>
        </Section>
      </main>

      <footer className="text-center py-6 text-gray-500 bg-white border-t">
        © 2025 Abdulaziz. All rights reserved.
      </footer>
    </div>
  );
};

export default Portfolio;
