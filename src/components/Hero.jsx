import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
    SiDocker, SiTerraform, SiLinux, SiGit, SiKubernetes,
} from 'react-icons/si';
import '../styles/Hero.css';

const GREETING = "Hi, I'm Adarsh Kumar";
const EASE = [0.16, 1, 0.3, 1]; // Apple-style easeOut

// Inline AWS mark — avoids depending on react-icons' AWS export name,
// which has changed across Simple Icons versions (SiAmazonaws / SiAws).
function AwsIcon(props) {
    return (
        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...props}>
            <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.207.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.847.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.567.031-.862.103-.295.072-.583.16-.862.272a2.287 2.287 0 01-.28.104.492.492 0 01-.128.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.168c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.245-.151c.95 0 1.644.216 2.091.647.44.43.662 1.086.662 1.964v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.542-.271.758-.51a1.26 1.26 0 00.271-.51c.048-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 5.98 5.98 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.472.294.839.294zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.128 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.686c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.503 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .358.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.183.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.303.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926a2.147 2.147 0 01-.583.703c-.247.199-.542.343-.886.447-.36.111-.734.167-1.14.167zM21.966 15.673c-2.31 1.705-5.664 2.611-8.549 2.611-4.043 0-7.684-1.494-10.437-3.978-.216-.192-.024-.455.24-.303 2.976 1.729 6.646 2.775 10.44 2.775 2.56 0 5.376-.53 7.968-1.629.39-.176.718.255.338.524zm.966-1.102c-.295-.375-1.949-.183-2.699-.088-.223.024-.263-.176-.056-.32 1.309-.926 3.472-.654 3.72-.343.246.311-.073 2.478-1.31 3.51-.191.152-.374.072-.287-.144.28-.7.902-2.253.632-2.615z" />
        </svg>
    );
}

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, ease: EASE, delay: 0.2 } },
};
const slideFromRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE, delay: 0.4 } },
};

function TypingGreeting({ text }) {
    const [typed, setTyped] = useState('');
    const [done, setDone] = useState(false);

    useEffect(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) { setTyped(text); setDone(true); return; }

        const totalDuration = 1700;
        const step = totalDuration / text.length;
        let i = 0;
        const id = setInterval(() => {
            i += 1;
            setTyped(text.slice(0, i));
            if (i >= text.length) { clearInterval(id); setTimeout(() => setDone(true), 300); }
        }, step);
        return () => clearInterval(id);
    }, [text]);

    return (
        <p className="hero__greeting">
            {typed}
            {!done && <span className="hero__cursor" aria-hidden="true" />}
        </p>
    );
}

const BUTTONS = [
    { href: '/resume.pdf', label: 'Download resume', variant: 'solid', extra: { download: true } },
    { href: 'mailto:adarshdev85219@gmail.com', label: 'Contact me', variant: 'outline' },
];

// Single source of truth for the stack — used by the terminal card
const STACK = [
    { icon: AwsIcon, label: 'AWS' },
    { icon: SiDocker, label: 'Docker' },
    { icon: SiTerraform, label: 'Terraform' },
    { icon: SiLinux, label: 'Linux' },
    { icon: SiGit, label: 'Git' },
    { icon: SiKubernetes, label: 'Kubernetes' },
];

function TerminalCard() {
    return (
        <motion.div
            className="hero__terminal"
            variants={slideFromRight}
            aria-label="Terminal preview: whoami, skill list, and availability status"
        >
            <div className="hero__terminal-bar">
                <span className="hero__terminal-dot hero__terminal-dot--red" />
                <span className="hero__terminal-dot hero__terminal-dot--yellow" />
                <span className="hero__terminal-dot hero__terminal-dot--green" />
                <span className="hero__terminal-title">adarsh@devops:~</span>
            </div>

            <motion.div
                className="hero__terminal-body"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.p className="hero__terminal-line" variants={fadeIn}>
                    <span className="hero__terminal-prompt">$</span>whoami
                </motion.p>
                <motion.p className="hero__terminal-line hero__terminal-value" variants={fadeIn}>
                    Adarsh Kumar
                </motion.p>

                <motion.p className="hero__terminal-line" variants={fadeIn}>
                    <span className="hero__terminal-prompt">$</span>skills --list
                </motion.p>
                <motion.ul className="hero__terminal-list" variants={container}>
                    {STACK.map(({ icon: Icon, label }) => (
                        <motion.li key={label} variants={fadeIn}>
                            <Icon aria-hidden="true" />
                            {label}
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.p className="hero__terminal-line" variants={fadeIn}>
                    <span className="hero__terminal-prompt">$</span>status
                </motion.p>
                <motion.p className="hero__terminal-line hero__terminal-status" variants={fadeIn}>
                    <span className="hero__terminal-status-dot" />
                    Ready for DevOps opportunities
                    <span className="hero__cursor hero__cursor--terminal" aria-hidden="true" />
                </motion.p>
            </motion.div>
        </motion.div>
    );
}

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero__grid">
                <motion.div className="hero__inner" variants={container} initial="hidden" animate="visible">
                    <motion.div variants={fadeIn}>
                        <TypingGreeting text={GREETING} />
                    </motion.div>

                    <motion.h1 className="hero__title" variants={fadeUp}>
                        Cloud <span className="hero__title-accent">&amp;</span> Junior DevOps Engineer
                    </motion.h1>

                    <motion.p className="hero__tagline" variants={fadeIn}>
                        Building scalable cloud infrastructure, automating deployments, and
                        delivering reliable applications on AWS.
                    </motion.p>

                    <motion.div className="hero__actions" variants={container}>
                        {BUTTONS.map((btn) => (
                            <motion.a
                                key={btn.label}
                                href={btn.href}
                                {...(btn.extra || {})}
                                className={`hero__btn hero__btn--${btn.variant}`}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95 },
                                    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: EASE } },
                                }}
                            >
                                {btn.label}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <TerminalCard />
            </div>
        </section>
    );
}