"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

interface Experience {
  title: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  description?: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Full Stack Engineer",
    company: "Skeleton Social",
    type: "Part-time",
    duration: "Sep 2024 - Dec 2025",
    location: "Lithuania (Remote)",
    description:
      "Led the end-to-end development of the Skeleton Social platform, owning the entire product lifecycle from system architecture and feature implementation to production deployment and post release maintenance. Built and maintained cross-platform web and mobile applications using Next.js and Expo, implemented backend workflows with Convex, and managed app releases on the Apple App Store and Google Play Store.",
    skills: [
      "Front-End Development",
      "Back-End Development",
      "Next.js",
      "Expo.js",
      "Convex",
      "TypeScript",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "Mshel Homes Limited",
    type: "Contract",
    duration: "Apr 2024 - Jun 2024",
    location: "Nigeria (Remote)",
    description:
      "Worked as a contract full stack engineer delivering end-to-end features for internal and customer-facing applications. Designed and implemented backend services using NestJS, built responsive web interfaces with Next.js, and integrated PostgreSQL for reliable data storage.",
    skills: ["NestJS", "Nextjs", "PostgreSQL"],
  },
  {
    title: "Back End Developer",
    company: "PayOnUs",
    type: "Full-time",
    duration: "Oct 2023 - Feb 2024",
    location: "Lagos State, Nigeria (Remote)",
    description:
      "Focused on backend development, building and maintaining RESTful APIs using Node.js and Express. Designed and optimized PostgreSQL databases and ensured data integrity and performance across services. Contributed to debugging production issues and improving system reliability in a fast paced environment.",
    skills: ["Node.js", "Express.js", "Postgres"],
  },
  {
    title: "Web Developer",
    company: "TechMyriad",
    type: "Internship",
    duration: "Jan 2023 - Jun 2023",
    location: "United Kingdom (Remote)",
    description:
      "Started as a web development intern, working on frontend features and UI components using HTML, CSS, JavaScript, and React. Collaborated with senior developers to translate designs into functional interfaces, fix bugs, and improve usability. Gained strong foundational skills in modern web development and real-world team workflows.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="space-y-8">
      <h2 className="text-2xl font-bold tracking-tight">EXPERIENCE</h2>
      <div className="relative border-l border-muted-foreground/20 ml-3 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[6.5px] top-1.5 size-3 rounded-full bg-primary border-2 border-background" />

            <div className="flex flex-col space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="font-bold text-lg">{exp.title}</h3>
                <span className="text-sm text-muted-foreground font-medium">
                  {exp.duration}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-muted-foreground italic">
                <span>{exp.company}</span>
                <span className="hidden sm:inline">•</span>
                <span>{exp.type}</span>
                <span className="hidden sm:inline">•</span>
                <span>{exp.location}</span>
              </div>

              {exp.description && (
                <p className="text-sm leading-relaxed mt-2 text-foreground/80">
                  {exp.description}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mt-3">
                {exp.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-[10px] px-2 py-0"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
