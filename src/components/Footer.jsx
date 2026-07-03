import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
];

const SOCIALS = [
    {
        label: "LinkedIn",
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/adarsh-kumar-826936285/",
    },
    {
        label: "GitHub",
        icon: FaGithub,
        href: "https://github.com/Adarsh10050",
    },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__inner">
                <p className="footer__name">Adarsh Kumar</p>

                <nav className="footer__nav">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="footer__nav-link"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="footer__socials">
                    {SOCIALS.map((social) => {
                        const Icon = social.icon;

                        return (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__social"
                                aria-label={social.label}
                            >
                                <Icon size={20} />
                            </a>
                        );
                    })}
                </div>

                <p className="footer__copyright">
                    © {year} Adarsh Kumar. All rights reserved.
                </p>
            </div>
        </footer>
    );
}