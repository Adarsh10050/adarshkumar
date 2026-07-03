import { ExternalLink, PlayCircle } from 'lucide-react';

export default function ProjectCard({
    image,
    title,
    date,
    description,
    tech = [],
    icon: Icon,
    liveUrl,
    demoUrl,
}) {
    return (
        <div className="project-card">
            <div className="project-card__visual">
                {image ? (
                    <img src={image} alt={title} className="project-card__image" />
                ) : (
                    Icon && (
                        <span className="project-card__icon">
                            <Icon strokeWidth={1.5} />
                        </span>
                    )
                )}
            </div>

            <div className="project-card__body">
                <div className="project-card__header">
                    <h3 className="project-card__title">{title}</h3>
                    {date && <span className="project-card__date">{date}</span>}
                </div>

                <p className="project-card__description">{description}</p>

                <div className="project-card__tech">
                    {tech.map((t) => (
                        <span key={t} className="project-card__badge">{t}</span>
                    ))}
                </div>

                {(liveUrl || demoUrl) && (
                    <div className="project-card__links">
                        {liveUrl && (
                            <a href={liveUrl} target="_blank" rel="noreferrer" className="project-card__link">
                                Live site <ExternalLink size={14} strokeWidth={2} />
                            </a>
                        )}
                        {demoUrl && (
                            <a href={demoUrl} target="_blank" rel="noreferrer" className="project-card__link">
                                Watch demo <PlayCircle size={14} strokeWidth={2} />
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}