
"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

function SocialIcon({ type, className = "h-5 w-5" }) {
    const paths = {
        github: (
            <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.63 1.21 3.27.92.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.23-5.07-5.48 0-1.21.43-2.2 1.15-2.97-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.11 2.94.72.77 1.15 1.76 1.15 2.97 0 4.26-2.61 5.19-5.09 5.47.4.35.76 1.02.76 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        ),
        linkedin: (
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8 10H5v9h3v-9ZM6.5 5.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM19 13.5c0-2.7-1.44-3.96-3.36-3.96-1.55 0-2.24.85-2.64 1.45V10h-3v9h3v-4.46c0-1.18.22-2.33 1.69-2.33 1.45 0 1.47 1.36 1.47 2.41V19h3v-5.5Z" />
        ),
        facebook: (
            <path d="M13.5 21v-8.2h2.75l.41-3.2H13.5V7.56c0-.93.26-1.56 1.59-1.56h1.69V3.14A22 22 0 0 0 14.32 3c-2.43 0-4.09 1.49-4.09 4.23V9.6H7.5v3.2h2.73V21h3.27Z" />
        ),
    };

    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            {paths[type]}
        </svg>
    );
}

const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/mahzamincodes",
        icon: "github",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rimon-khan-23877b275/",
        icon: "linkedin",
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/rimon.khan.512539/",
        icon: "facebook",
    },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden border-t border-border bg-background">
            {/* Decorative Background */}
            <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-14">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-between gap-8 md:flex-row"
                >
                    {/* Brand */}
                    <a
                        href="#home"
                        className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
                    >
                        Mahzamin <span className="text-primary">Khan.</span>
                    </a>

                    {/* Social Links */}
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit my ${social.name} profile`}
                                className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                            >
                                <SocialIcon type={social.icon} className="h-4 w-4" />
                                {social.name}
                            </a>
                        ))}
                    </div>

                    {/* Back to Top */}
                    <a
                        href="#home"
                        className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25"
                    >
                        Back to Top
                        <ArrowUp
                            size={16}
                            className="transition-transform duration-300 group-hover:-translate-y-1"
                        />
                    </a>
                </motion.div>

                {/* Copyright */}
                <div className="mt-10 border-t border-border pt-7">
                    <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row">
                        <p className="text-xs text-muted-foreground">
                            © {year} Mahzamin Khan. All rights reserved.
                        </p>

                        <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                           Designed & Developed by Mahzamin Khan
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
