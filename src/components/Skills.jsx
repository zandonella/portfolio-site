import "../styles/global.css";
import SkillBox from "./SkillBox";
import { useState } from "react";

const skills = [
  { name: "TypeScript", className: "devicon-typescript-plain" },
  { name: "React", className: "devicon-react-original" },
  { name: "SQL", className: "devicon-azuresqldatabase-plain" },
  { name: "JavaScript", className: "devicon-javascript-plain" },
  { name: "Node.js", className: "devicon-nodejs-plain" },
  { name: "Python", className: "devicon-python-plain" },
  { name: "HTML", className: "devicon-html5-plain" },
  { name: "CSS", className: "devicon-css3-plain" },
  { name: "Tailwind", className: "devicon-tailwindcss-plain" },
  { name: "Vite", className: "devicon-vitejs-plain" },
  { name: "Astro", className: "devicon-astro-plain" },
  { name: "Express", className: "devicon-express-original" },
  { name: "Supabase", className: "devicon-supabase-plain" },
  { name: "MongoDB", className: "devicon-mongodb-plain" },
  { name: "PostgreSQL", className: "devicon-postgresql-plain" },
  { name: "Docker", className: "devicon-docker-plain" },
  { name: "AWS", className: "devicon-amazonwebservices-plain-wordmark" },
  { name: "Git", className: "devicon-git-plain" },
];

export default function Skills() {
  const [hovered, setHovered] = useState(false);
  return (
    <div>
      <div
        className="container grid grid-cols-2 gap-4 py-4 md:grid-cols-6"
        onMouseLeave={() => setHovered(false)}
      >
        {skills.map((skill, index) => (
          <SkillBox
            key={index}
            className={skill.className}
            skillName={skill.name}
            setHovered={setHovered}
          />
        ))}
      </div>
      <div
        className={` ${
          hovered
            ? "fixed inset-0 z-30 h-full w-full bg-black/70 transition-all duration-200 ease-in-out"
            : ""
        }`}
      ></div>
    </div>
  );
}
