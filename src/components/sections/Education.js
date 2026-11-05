
"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, CalendarDays } from "lucide-react";

const educationData = [
    {
        degree: "Master's in English Literature",
        institution: "Government Titumir College, Dhaka",
        year: "2021",
        level: "Postgraduate",
        icon: GraduationCap,
    },
    {
        degree: "Bachelor's in English Literature",
        institution: "Government Titumir College, Dhaka",
        year: "2020",
        level: "Undergraduate",
        icon: BookOpen,
    },
];

export default function Education() {
    return (
        <section
            id="education"
            className="relative overflow-hidden bg-background px-5 py-15 sm:px-8 md:py-20"
        >
            <div className="mx-auto max-w-5xl">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        My Academic Journey
                    </span>

                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                        Education{" "}
                        <span className="text-primary">& Background</span>
                    </h2>

                    <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-primary" />

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                        My academic journey has helped me develop strong
                        communication, analytical thinking, and independent
                        learning skills.
                    </p>
                </motion.div>

                {/* Education Timeline */}
                <div className="relative mx-auto max-w-3xl">
                    {/* Timeline Line */}
                    <div className="absolute bottom-10 left-[27px] top-10 w-px bg-border sm:left-[35px]" />

                    <div className="space-y-8">
                        {educationData.map((education, index) => {
                            const Icon = education.icon;

                            return (
                                <motion.div
                                    key={education.year}
                                    initial={{
                                        opacity: 0,
                                        x: index === 0 ? -25 : 25,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.15,
                                    }}
                                    className="group relative flex gap-5 sm:gap-7"
                                >
                                    {/* Timeline Icon */}
                                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground sm:h-[72px] sm:w-[72px]">
                                        <Icon size={28} strokeWidth={1.8} />
                                    </div>

                                    {/* Education Card */}
                                    <div className="min-w-0 flex-1 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 sm:p-7">
                                        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                                            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                                {education.level}
                                            </span>

                                            <span className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
                                                <CalendarDays
                                                    size={15}
                                                />
                                                {education.year}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary sm:text-xl md:text-2xl">
                                            {education.degree}
                                        </h3>

                                        <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                            <Award
                                                size={18}
                                                className="mt-0.5 shrink-0 text-primary"
                                            />
                                            {education.institution}
                                        </p>

                                        <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
                                            <span className="h-2 w-2 rounded-full bg-primary" />
                                            <span className="text-xs font-medium text-muted-foreground">
                                                Academic Achievement
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
