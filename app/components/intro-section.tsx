"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import * as motion from "motion/react-client";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function IntroSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col"
    >
      <motion.h1
        variants={itemVariants}
        className="font-bold text-3xl mb-2 sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl"
      >
        Nucleus Erumagborie
      </motion.h1>
      <motion.h2 variants={itemVariants} className="font-semibold mb-4">
        Full Stack Typescript Engineer
      </motion.h2>
      <motion.p variants={itemVariants} className="mb-8 max-w-md">
        I build fast, reliable web and mobile apps with a strong focus on user
        experience and long term scalability.
      </motion.p>
      <motion.div variants={itemVariants} className="flex gap-4">
        <Button size={"lg"} asChild>
          <Link href={"/resume.pdf"} target="_blank">
            <span>View Resume</span>
            <ArrowUpRightIcon />
          </Link>
        </Button>
        <Button variant={"secondary"} size={"lg"} asChild>
          <Link href="#contact">Contact Me</Link>
        </Button>
      </motion.div>
    </motion.section>
  );
}
