
"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Server,
    Database,
    ShieldCheck,
    Wrench,
} from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Development",
        description: "Building modern and responsive user interfaces.",
        icon: Code2,
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "Bootstrap",
            "DaisyUI",
            "shadcn/ui",
        ],
    },
    {
        title: "Backend Development",
        description: "Creating server-side applications and APIs.",
        icon: Server,
        skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
        title: "Database",
        description: "Working with database management and storage.",
        icon: Database,
        skills: ["MongoDB", "MongoDB Atlas"],
    },
    {
        title: "Authentication",
        description: "Implementing secure authentication systems.",
        icon: ShieldCheck,
        skills: ["Better Auth", "JWT", "Google OAuth"],
    },
    {
        title: "Tools & Deployment",
        description: "Development tools and deployment platforms.",
        icon: Wrench,
        skills: ["Git", "GitHub", "VS Code", "npm", "Vercel"],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-background px-5 py-15 sm:px-8 md:py-20"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        What I Work With
                    </span>

                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                        Technical{" "}
                        <span className="text-primary">Skills</span>
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-primary" />

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                        Technologies and tools I use to build modern,
                        responsive, and functional web applications.
                    </p>
                </motion.div>

                {/* Skills Categories */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;

                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -6 }}
                                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 sm:p-7"
                            >
                                {/* Decorative Background */}
                                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />

                                {/* Category Header */}
                                <div className="relative mb-7 flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                        <Icon
                                            size={24}
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-foreground">
                                            {category.title}
                                        </h3>

                                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Skills */}
                                <div className="relative flex flex-wrap gap-2.5">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Bottom Accent */}
                                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
