
"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-background px-5 py-10 sm:px-8 md:py-10"
        >
            <div className="mx-auto max-w-5xl">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 text-center md:mb-14"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                        About <span className="text-primary">Me</span>
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-primary" />
                </motion.div>

                {/* About Content */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mx-auto max-w-4xl"
                >
                    <div className="space-y-6 text-center">
                        <p className="text-base leading-8 text-muted-foreground sm:text-lg md:text-xl">
                            I'm{" "}
                            <span className="font-semibold text-foreground">
                                Mahzamin
                            </span>
                            , an aspiring Full-Stack Web Developer passionate
                            about building modern, responsive, and user-friendly
                            web applications. I enjoy turning ideas into
                            functional digital experiences using technologies
                            like JavaScript, React, Next.js, Node.js, and
                            MongoDB. I'm continuously learning, improving my
                            problem-solving skills, and building real-world
                            projects to grow as a developer.
                        </p>

                        <p className="text-base leading-8 text-muted-foreground sm:text-lg md:text-xl">
                            My goal is to become a skilled Full-Stack Developer
                            and create meaningful solutions through technology.
                            I believe in writing clean code, designing intuitive
                            interfaces, and constantly expanding my technical
                            toolkit.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
