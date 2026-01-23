import Button from '../../components/ui/button';
import { Code, Shield, Cpu } from 'lucide-react';

export default function About() {
    return (
        <section className="min-h-screen flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                {/* Texte */}
                <div className="about-intro">
                    <span className="text-sm text-tint uppercase font-medium tracking-wide">
                        À propos de moi
                    </span>

                    <h1 className="text-[clamp(20px,5vw,43px)] font-bold text-text mt-3 leading-tight max-w-[700px]">
                        Je suis{' '}
                        <span className="text-tint">Wilonjda Ebuela</span>,
                        développeur FullStack & passionné de cybersécurité
                    </h1>

                    <p className="mt-5 text-[15px] text-muted leading-relaxed max-w-[550px]">
                        Je conçois des applications performantes, sécurisées et
                        orientées utilisateur. J’allie développement, sécurité
                        et intelligence artificielle pour créer des solutions
                        qui font vraiment la différence.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-muted">
                            <Code className="text-tint" /> Développement Web
                        </div>
                        <div className="flex items-center gap-2 text-muted">
                            <Shield className="text-tint" /> Cybersécurité
                        </div>
                        <div className="flex items-center gap-2 text-muted">
                            <Cpu className="text-tint" /> Intelligence
                            Artificielle
                        </div>
                    </div>

                    <p className="mt-4 text-[15px] text-muted leading-relaxed max-w-[550px]">
                        Quand je ne code pas, je m’intéresse à la veille tech et
                        à la découverte de nouvelles technologies qui
                        transforment notre manière de travailler.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-6">
                        <a href='#contact' className="py-3 px-[clamp(20px,5vw,35px)] text-md text-muted relative border border-border rounded-3xl bg-border hover:bg-transparent">
                            Me contacter
                        </a>
                        <a
                            href="#projects"
                            className="py-3 px-[clamp(20px,5vw,35px)] text-md text-muted border border-border rounded-3xl hover:bg-border transition"
                        >
                            Voir mes projets →
                        </a>
                    </div>
                </div>

                <div className="about-visual relative flex justify-center md:justify-end">
                    <img
                        src="images/luckson.jpg"
                        alt="Luckson"
                        className="rounded-3xl shadow-xl w-full max-w-[400px] object-cover"
                    />

                    {/* <div className="absolute -top-3 left-8 w-24 h-24 border-2 border-tint rounded-full animate-pulse opacity-40"></div>
          <div className="absolute -bottom-5 -right-5 w-16 h-16 border-2 border-tint rounded-full animate-pulse opacity-30"></div> */}
                </div>
            </div>
        </section>
    );
}
