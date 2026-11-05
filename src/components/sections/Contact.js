
"use client";

import { motion } from "framer-motion";
import { Mail, CodeXml, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-background px-5 py-24 sm:px-8 md:py-32"
        >
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16"
                >
                    {/* Decorative Background */}
                    <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

                    <div className="relative">
                        {/* Heading */}
                        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            Contact Me
                        </span>

                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                            Get In <span className="text-primary">Touch</span>
                        </h2>

                        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-primary" />

                        <p className="mx-auto mb-10 mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                            I am always open to discussing new projects,
                            creative ideas, or opportunities where I can help
                            your business grow.
                        </p>

                        {/* Contact Buttons */}
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <a
                                href="mailto:mdrimonkhan765@gmail.com"
                                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
                            >
                                <Mail size={19} />
                                Let Us Connect
                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </a>

                            <a
                                href="https://github.com/mahzamincodes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-7 py-3.5 text-base font-semibold text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                            >
                                <CodeXml size={20} />
                                GitHub Profile
                                <ArrowUpRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </a>
                        </div>

                        {/* Contact Information */}
                        <div className="mt-12 border-t border-border pt-8">
                            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
                                <a
                                    href="mailto:mdrimonkhan765@gmail.com"
                                    className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                        <Mail size={18} />
                                    </span>

                                    <span className="text-left">
                                        <span className="block text-xs text-muted-foreground">
                                            Email
                                        </span>
                                        <span className="font-medium text-foreground">
                                            mdrimonkhan765@gmail.com
                                        </span>
                                    </span>
                                </a>

                                <div className="flex items-center gap-3 text-sm">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <MapPin size={18} />
                                    </span>

                                    <span className="text-left">
                                        <span className="block text-xs text-muted-foreground">
                                            Location
                                        </span>
                                        <span className="font-medium text-foreground">
                                            Shibchar, Madaripur, Bangladesh
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
