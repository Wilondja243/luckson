import { Helmet } from 'react-helmet-async';
import {
    skills,
    education,
    experiences,
    atouts,
    languages,
    interests,
} from '../../data/cv-data';
import {
    Mail,
    MapPin,
    Phone,
    Calendar,
    Download
} from 'lucide-react';
import NavBar from '../../lib/header/nav-bar';
import Footer from '../../lib/header/footer'


export default function CVPage() {
    return (
        <>
            <Helmet>
                <title>Luckson | CV</title>
            </Helmet>

            <NavBar />

            <div className="min-h-screen bg-background py-10 px-4 font-sans leading-relaxed">
                <div className="max-w-5xl mx-auto bg-card shadow-2xl flex flex-col md:flex-row border border-slate-800">
                    <aside className="md:w-72 bg-[#0a101f] p-8 border-r border-border">
                        <div className="flex flex-col items-center mb-8">
                            <img
                                src="/images/luckson.jpg"
                                alt="Luckson"
                                className="w-40 h-40 rounded-full border-2 border-blue-500 mb-6 object-cover"
                            />
                            <div className="space-y-3 text-[13px] w-full pt-4 text-slate-400">
                                <div className="flex items-center gap-3">
                                    <Mail size={14} /> lucksonpremier@example.com
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin size={14} /> Bujumbura, Burundi
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={14} /> +257 62 10 95 22
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar size={14} /> 24 ans
                                </div>
                            </div>
                        </div>

                        <section className="mb-8">
                            <h2 className="text-text font-bold text-sm uppercase tracking-widest mb-4 border-b border-border pb-1">
                                Atouts
                            </h2>
                            <ul className="text-[13px] space-y-2">
                                {atouts.map((a, i) => (
                                    <li key={i}>• {a}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-text font-bold text-sm uppercase tracking-widest mb-4 border-b border-border pb-1">
                                Compétences
                            </h2>
                            <ul className="text-[15px] space-y-2 pascase">
                                {skills.map((s, i) => (
                                    <li key={i}>{s.name}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-text font-bold text-sm uppercase tracking-widest mb-4 border-b border-border pb-1">
                                Langues
                            </h2>
                            <div className="text-[13px] space-y-2">
                                {languages.map((l, i) => (
                                    <p key={i}>
                                        <span className="text-slate-100 font-bold">
                                            {l.name}
                                        </span>{' '}
                                        : {l.level}
                                    </p>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-white font-bold text-sm uppercase tracking-widest mb-4 border-b border-border pb-1">
                                Centres d'intérêt
                            </h2>
                            <div className="text-[12px] space-y-3">
                                {interests.map((int, i) => (
                                    <p key={i}>
                                        <span className="text-slate-100 font-bold underline">
                                            {int.name}
                                        </span>{' '}
                                        : {int.description}
                                    </p>
                                ))}
                            </div>
                        </section>
                    </aside>

                    <main className="flex-1 p-8 bg-[#161d29]">
                        <header className="mb-12 bg-none">
                            <h1 className="text-3xl font-extrabold text-text">
                                Wilondja Ebuela
                            </h1>
                            <h2 className="text-md font-bold text-tint mt-2 pascase">
                                Développeur FullStack | Django | React | AI &
                                Sécurité
                            </h2>
                            <p className="mt-4 text-sm text-slate-400 max-w-2xl leading-relaxed">
                                Développeur FullStack orienté vers l'écosystème Django et React. 
                                Mon parcours s'articule autour du développement d'applications web, 
                                de l'encadrement technique et d'un intérêt marqué pour les solutions 
                                mêlant Intelligence Artificielle et Cybersécurité.
                            </p>
                        </header>

                        <section className="mb-14">
                            <h2 className="text-lg font-black text-white uppercase tracking-wider mb-6">
                                Expériences professionnelles
                            </h2>
                            <div className="space-y-10">
                                {experiences.map((exp, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col md:flex-row gap-y-4 border-l border-slate-700 pl-6 relative"
                                    >
                                        <div className="absolute -left-[5px] top-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <div className="md:w-32 text-[11px] font-bold text-slate-500 pascase">
                                            {exp.duree}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-blue-400 uppercase text-sm">
                                                {exp.poste}
                                            </h3>
                                            <p className="font-bold text-slate-200 text-sm">
                                                {exp.entreprise} —{' '}
                                                <span className="text-slate-500 font-normal">
                                                    {exp.lieu}
                                                </span>
                                            </p>
                                            <p className="mt-2 text-[13px] text-gray-400 leading-relaxed">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-lg font-black text-text uppercase tracking-wider mb-6">
                                Diplômes et Formations
                            </h2>
                            <div className="space-y-6">
                                {education.map((edu, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col md:flex-row gap-y-4 border-l border-slate-700 pl-6 relative"
                                    >
                                        <div className="absolute -left-[5px] top-1 w-2 h-2 bg-slate-500 rounded-full"></div>
                                        <div className="md:w-32 text-[11px] font-bold text-slate-500 uppercase">
                                            {edu.duree}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-tint uppercase text-sm">
                                                {edu.diplome}
                                            </h3>
                                            <p className="text-text text-sm font-bold pascase">
                                                {edu.ecole}{' '}
                                                <span className="text-muted font-normal">
                                                    — {edu.lieu}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </main>
                </div>

                <div className="fixed bottom-6 right-6">
                    <a href='/files/wilondja_cv.pdf' download="Wilodja_Ebuela_CV.pdf" className="bg-tint_soft hover:bg-tint text-text px-4 py-2 rounded-full shadow-xl transition-all hover:scale-110 flex items-center gap-2 font-bold">
                        <Download size={20} />{' '}
                        <span className="text-xs uppercase tracking-tighter">
                            Télécharger PDF
                        </span>
                    </a>
                </div>
            </div>

            <Footer />
        </>
    );
}
