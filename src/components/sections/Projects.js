
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

// GitHub Icon (Custom SVG)
function GithubMark({ className = "h-4 w-4" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.63 1.21 3.27.92.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.23-5.07-5.48 0-1.21.43-2.2 1.15-2.97-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.11 2.94.72.77 1.15 1.76 1.15 2.97 0 4.26-2.61 5.19-5.09 5.47.4.35.76 1.02.76 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
    );
}

const projects = [
    {
        name: "BookNook",
        description:
            "A full-stack book and library management application where users can browse, manage, borrow, and return books.",
        image: "/Images/booknook.png",
        liveUrl: "https://booknook-client-blond.vercel.app/",
        clientRepo: "https://github.com/mahzamincodes/PH-B14-A08-BookNook-Client",
        serverRepo: "https://github.com/mahzamincodes/PH-B14-A08-BookNook-Server",
        technologies: [
            "Next.js",
            "React",
            "JavaScript",
            "Tailwind CSS",
            "shadcn/ui",
            "Express.js",
            "MongoDB",
            "Better Auth",
            "JWT",
            "Google OAuth",
        ],
        features: [
            "User authentication and Google login",
            "Browse and manage books",
            "Add, edit, and delete books",
            "Borrow and return books",
            "Personal book management",
            "Protected routes and secured backend APIs",
        ],
    },
    {
        name: "FitLog",
        description:
            "A workout-focused web application that helps users explore workouts and manage their personal workout plan.",
        image: "/Images/fit-log.png",
        liveUrl: "https://ph-b14-a06-fit-log.vercel.app/",
        clientRepo: "https://github.com/mahzamincodes/PH-B14-A06-fit-log",
        serverRepo: null,
        technologies: [
            "Next.js",
            "React",
            "JavaScript",
            "Tailwind CSS",
            "API integration",
            "React Context API",
        ],
        features: [
            "Browse workout collections",
            "View individual workout details",
            "Save workouts to a personal plan",
            "Manage saved workouts",
            "Display workout statistics",
        ],
    },
    {
        name: "Bazar Dor",
        description:
            "An e-commerce style platform for browsing and discovering products.",
        image: "/Images/bazar-dor.png",
        liveUrl: "https://ph-b14-a07-bazar-dor.vercel.app/",
        clientRepo: "https://github.com/mahzamincodes/PH-B14-A07-bazar-dor",
        serverRepo: null,
        technologies: [
            "Next.js",
            "React",
            "JavaScript",
            "Tailwind CSS",
        ],
        features: [
            "Product browsing and discovery",
            "Responsive design for mobile and desktop",
        ],
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="bg-background px-5 py-15 sm:px-8 md:py-20"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 text-center"
                >
                    <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        My Work
                    </span>

                    <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Featured <span className="text-primary">Projects</span>
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-primary" />

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                        Explore some of my recent projects, technologies, and
                        development work.
                    </p>
                </motion.div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.12,
                            }}
                            whileHover={{ y: -6 }}
                            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                        >
                            {/* Project Image */}
                            <div className="relative h-56 overflow-hidden bg-muted sm:h-60">
                                <Image
                                    src={project.image}
                                    alt={`${project.name} screenshot`}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>

                            {/* Project Content */}
                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                                    {project.name}
                                </h3>

                                <p className="mb-5 text-sm leading-7 text-muted-foreground">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mb-6">
                                    <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">
                                        Technologies
                                    </h4>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">
                                        Key Features
                                    </h4>

                                    <ul className="space-y-2">
                                        {project.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"
                                            >
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Project Links */}
                                <div className="mt-auto border-t border-border pt-5">
                                    <div className="flex flex-wrap gap-2">
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-3 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                                            >
                                                <Globe size={17} />
                                                Live Demo
                                            </a>
                                        )}

                                        {project.clientRepo && (
                                            <a
                                                href={project.clientRepo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${project.name} Client Repository on GitHub`}
                                                title="Client-side GitHub Repository"
                                                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5 hover:text-primary"
                                            >
                                                <GithubMark />
                                                Client Repo
                                            </a>
                                        )}

                                        {project.serverRepo && (
                                            <a
                                                href={project.serverRepo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${project.name} Server Repository on GitHub`}
                                                title="Server-side GitHub Repository"
                                                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5 hover:text-primary"
                                            >
                                                <GithubMark />
                                                Server Repo
                                            </a>
                                        )}
                                    </div>

                                    <p className="mt-3 text-center text-xs text-muted-foreground">
                                        Source code available on GitHub
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
