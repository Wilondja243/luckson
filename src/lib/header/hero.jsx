import Button from '../../components/ui/button';

export default function Hero() {
    return (
        <section className="min-h-screen flex justify-center items-center">
            <div className="text-center">
                <span className="inline-block mb-4 py-1 px-4 text-sm space-x-1 uppercase text-tint bg-[rgba(0,189,149,0.12)] rounded-3xl">
                    Digital Architect • Security • AI
                </span>

                <h1 className="hero-title text-[clamp(35px,5vw,55px)] font-semibold text-text leading-tight max-w-[800px]">
                    Je conçois des
                    <span className="text-tint"> systèmes digitaux </span>
                    performants & sécurisés
                </h1>

                <p className="text-[15px] text-center max-w-[520px] mx-auto mt-5 text-muted leading-tight">
                    Développeur FullStack & Pentester, je crée des applications
                    modernes, scalables et pensées pour le monde réel.
                </p>

                <div className="mt-10 flex items-center justify-center flex-wrap gap-8">
                    <a href='#contact' className="py-3 px-[clamp(20px,5vw,35px)] text-md text-muted relative border border-border rounded-3xl bg-border hover:bg-transparent">
                        Me contacter →
                    </a>
                    <a
                        href="#project"
                        className="py-3 px-[clamp(20px,5vw,35px)] text-md text-muted relative border border-border rounded-3xl hover:bg-border"
                    >
                        Voir mes projets →
                    </a>
                </div>
            </div>
            <div className="glow"></div>
        </section>
    );
}
