import { Helmet } from 'react-helmet-async';
import useRevealOnScroll from '../../hooks/use-reveal';
import { services } from '../../data/data';

export default function Service() {
    const ref = useRevealOnScroll();

    return (
        <>
            <Helmet>
                <title>Luckson | Portfolio</title>
                <meta
                    name="description"
                    content="Portfolio de Luckson, développeur web et mobile."
                />
            </Helmet>

            <section id="services" className="py-24">
                <div ref={ref} className="reveal services max-w-7xl mx-auto">

                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-semibold text-text">
                            Mes Services
                        </h2>
                        <p className="mt-4 text-sm md:text-base text-muted">
                            Je conçois des solutions numériques modernes, sécurisées et performantes, adaptées aux besoins réels des entreprises et des particuliers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <div
                                key={i}
                                className="
                                    child
                                    group
                                    p-6
                                    bg-background
                                    border border-border
                                    rounded-2xl
                                    text-center
                                    transition-all duration-300
                                    hover:shadow-xl hover:border-tint
                                "
                            >
                                <div className="text-tint text-4xl mb-4">
                                    <i className={service.icon_name}></i>
                                </div>

                                <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-tint transition">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-muted leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}
