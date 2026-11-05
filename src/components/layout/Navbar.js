
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
];

const socialLinks = [
    {
        href: "https://github.com/mahzamincodes",
        label: "GitHub",
    },
    {
        href: "https://www.linkedin.com/in/rimon-khan-23877b275/",
        label: "LinkedIn",
    },
    {
        href: "https://www.facebook.com/rimon.khan.512539/",
        label: "Facebook",
    },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className="fixed top-0 right-0 left-0 z-50 border-b border-border/60 bg-background/85 shadow-sm shadow-black/5 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

                {/* Logo / Name */}
                <div className="flex items-center">
                    <a
                        href="#home"
                        onClick={closeMenu}
                        className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary sm:text-2xl"
                    >
                        Mahzamin <span className="text-primary">Khan</span>
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-7 md:flex lg:gap-9">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="group relative py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary lg:text-base"
                        >
                            {link.label}

                            <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center">
                    <button
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                        onClick={toggleMenu}
                        className="rounded-lg p-2 text-foreground transition-colors hover:bg-accent md:hidden"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 top-20 z-40 flex h-[calc(100dvh-80px)] flex-col gap-8 overflow-y-auto bg-background px-6 py-10 shadow-xl md:hidden"
                    >
                        {/* Mobile Navigation Links */}
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMenu}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.05,
                                    }}
                                    className="rounded-lg px-4 py-3 text-xl font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="mt-auto border-t border-border pt-6">
                            <div className="flex flex-wrap gap-x-6 gap-y-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.href}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        {social.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
