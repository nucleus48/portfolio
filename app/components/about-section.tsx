"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about">
      <article className={"space-y-8"}>
        <h2>ABOUT ME</h2>
        <div className="space-y-6">
          <p>
            I&apos;ve always been driven by a need to understand how software
            works beneath the surface. My journey began with Python, where I
            explored logic, automation, and problem solving fundamentals. That
            curiosity naturally expanded into how people interact with systems,
            leading me into web development with HTML, CSS, and JavaScript, and
            eventually into building full-stack applications using BaaS
            platforms.
          </p>

          <p>
            As my projects grew in complexity, abstraction was no longer enough.
            I wanted deeper control over system behavior, data flow, and
            performance, which pushed me into backend development. I began
            designing APIs, managing databases, and building systems where
            reliability, scalability, and correctness mattered as much as
            functionality.
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden space-y-6"
              >
                <p>
                  Along the way, I strengthened my engineering foundation by
                  studying software design principles, participating in
                  hackathons, and working on real world products that demanded
                  ownership beyond writing code. When the web became limiting, I
                  expanded into mobile development to access native capabilities
                  and deliver richer user experiences. This sparked a strong
                  interest in cross-platform performance, native APIs, and
                  building custom native modules to push platform boundaries.
                </p>

                <p>
                  Today, I focus on building scalable, high performance
                  applications across web and mobile. I approach engineering
                  with a product mindset prioritizing clean architecture,
                  intuitive user experience, and systems that remain
                  maintainable long after they reach production.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <Button
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-0 h-auto font-semibold underline-offset-4 hover:underline transition-all"
          >
            {isExpanded ? "Read Less" : "Read More..."}
          </Button>
        </div>
      </article>
    </section>
  );
}
