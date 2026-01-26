import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../../data/data';
import useRevealOnScroll from '../../hooks/use-reveal';

export default function Project() {
    const ref = useRevealOnScroll();

    return (
        <section id="project" className="">
            <div ref={ref} className="reveal max-w-7xl mx-auto">
                <div className="max-w-xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-text">
                        Projets <strong className="text-tint">réalisés</strong>
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-muted">
                        Une sélection de projets sur lesquels j’ai conçu et
                        développé des solutions digitales modernes, sécurisées
                        et pensées pour des besoins réels.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="
                                child
                                group
                                rounded-2xl
                                border border-border
                                p-6
                                bg-background
                                transition-all duration-300
                                hover:border-tint
                                hover:shadow-xl
                            "
                        >
                            <h3 className="text-lg font-semibold text-text group-hover:text-tint transition">
                                {project.title}
                            </h3>

                            <span
                                className={`
                                    text-xs px-3 py-1 rounded-full font-medium
                                    ${
                                        project.status === 'done' &&
                                        'bg-green-500/10 text-green-500'
                                    }
                                    ${
                                        project.status === 'in-progress' &&
                                        'bg-yellow-500/10 text-yellow-500'
                                    }
                                    ${
                                        project.status === 'paused' &&
                                        'bg-gray-500/10 text-gray-400'
                                    }
                                `}
                            >
                                {project.status === 'done' && 'Terminé'}
                                {project.status === 'in-progress' &&
                                    'En évolution'}
                                {project.status === 'paused' && 'En pause'}
                            </span>

                            <p className="mt-3 text-sm text-muted leading-relaxed">
                                {project.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="
                                            text-xs
                                            px-3 py-1
                                            rounded-full
                                            bg-border
                                            text-muted
                                            group-hover:bg-tint/10
                                            group-hover:text-tint
                                            transition
                                        "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
                                <span className="text-xs text-muted">
                                    <strong className="text-text">
                                        Rôle :
                                    </strong>{' '}
                                    {project.role}
                                </span>

                                <div className="flex gap-4 text-sm">
                                    {project.github &&
                                        project.github !== '#' && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="
                                                    group/icon
                                                    p-2
                                                    rounded-full
                                                    border border-border
                                                    text-muted
                                                    hover:text-tint
                                                    hover:border-tint
                                                    transition
                                                "
                                                aria-label="Voir le code sur GitHub"
                                            >
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}

                                    {project.demo && project.demo !== '#' && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="
                                                group/icon
                                                p-2
                                                rounded-full
                                                border border-border
                                                text-muted
                                                hover:text-tint
                                                hover:border-tint
                                                transition
                                            "
                                            aria-label="Voir la démo"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
