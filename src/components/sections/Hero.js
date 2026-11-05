
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-[calc(100svh-80px)] items-center justify-center overflow-hidden px-5 py-12 sm:px-8 md:px-10 lg:py-16"
        >
            <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">

                {/* Hero Text */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="order-2 text-center md:order-1 md:text-left"
                >
                    <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
                        Hi, I am{" "}
                        <span className="text-primary">
                            Mahzamin
                        </span>
                    </h1>

                    <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg md:mx-0 md:text-xl">
                        Aspiring Full-Stack Web Developer passionate about building modern,
                        responsive, and user-friendly web applications. I enjoy turning ideas
                        into functional digital experiences using JavaScript, React, and
                        Next.js.
                    </p>

                    {/* GitHub Projects Button */}
                    <div className="flex justify-center md:justify-start">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                            className="inline-flex items-center justify-center gap-3 rounded-lg bg-black px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-colors hover:bg-gray-800 sm:text-lg"
                            href="https://github.com/mahzamincodes"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="h-5 w-5" />
                            View My Projects
                        </motion.a>
                    </div>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: 40, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="order-1 flex items-center justify-center md:order-2"
                >
                    <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[400px]">
                        <Image
                            src="/Images/profile.jpg.jpeg"
                            alt="Mahzamin Khan - Professional headshot"
                            width={400}
                            height={500}
                            priority
                            className="h-auto w-full rounded-2xl object-cover shadow-2xl"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Decorative Background */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        </section>
    );
}
