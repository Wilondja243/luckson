import useRevealOnScroll from '../../hooks/use-reveal';

export default function Experience() {
    const skillsRef = useRevealOnScroll();
    const statsRef = useRevealOnScroll();
    const expRef = useRevealOnScroll();

    return (
        <main className="mx-auto px-6 py-20 space-y-32">
            <section ref={skillsRef} className="reveal">
                <h2 className="child text-4xl font-black text-white mb-12">
                    Compétences
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                    {[
                        ['Python / Django', 70],
                        ['JavaScript / React', 70],
                        ['Nextjs', 55],
                        ['React Native', 65],
                        ['AI (ML / DL)', 50],
                        ['CyberSécurité', 60],
                    ].map(([label, value]) => (
                        <div key={label} className="group">
                            <div className="child flex justify-between mb-2">
                                <span className="text-gray-300 font-medium">
                                    {label}
                                </span>
                                <span className="text-gray-500">{value}%</span>
                            </div>
                            <div className="child h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-cyan-500 transition-all duration-1000"
                                    style={{ width: `${value}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section
                ref={statsRef}
                className="reveal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
                <div
                    className="child p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 text-center hover:border-cyan-900 cursor-default shadow-lg hover:shadow-cyan-900/10">
                    <strong className="block text-5xl font-bold text-white mb-2">
                        8+
                    </strong>
                    <span className="text-gray-400 uppercase tracking-widest text-sm">
                        Projets réalisés
                    </span>
                </div>
                <div className="child p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 text-center hover:border-cyan-900 cursor-default shadow-lg hover:shadow-cyan-900/10">
                    <strong className="block text-5xl font-bold text-white mb-2">
                        3+
                    </strong>
                    <span className="text-gray-400 uppercase tracking-widest text-sm">
                        Années d'expérience
                    </span>
                </div>
                <div className="child p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 text-center hover:border-cyan-900 cursor-default shadow-lg hover:shadow-cyan-900/10">
                    <strong className="block text-5xl font-bold text-white mb-2">
                        6+
                    </strong>
                    <span className="text-gray-400 uppercase tracking-widest text-sm">
                        Technologies maîtrisées
                    </span>
                </div>
            </section>

            <section ref={expRef} className="reveal mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-4xl font-black text-white tracking-tighter uppercase">
                        Expériences
                    </h2>
                    <div className="h-[2px] flex-grow bg-gradient-to-r from-cyan-500 to-transparent"></div>
                </div>

                <div className="relative border-l border-white/10 ml-4 md:ml-0 md:grid md:grid-cols-2 md:border-none gap-x-12 gap-y-12">
                    {/* Ligne centrale pour desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500 via-white/10 to-transparent -translate-x-1/2"></div>

                    {[
                        {
                            title: 'IA & Sécurité',
                            location: 'Projets personnels et recherches',
                            date: '2026 - Présent',
                            desc: "Exploration et développement de projets liés à l'IA et la cybersécurité.",
                            side: 'left',
                        },
                        {
                            title: 'Encadreur Python & Django',
                            location: 'SOFT AVOLIK | sept 2025 - oct 2025',
                            date: '2025',
                            desc: "Supervision technique et encadrement d'étudiants en stage académique sur des projets pratiques utilisant Python et le framework Django.",
                            side: 'right',
                        },
                        {
                            title: 'Formateur HTML/CSS & JavaScript',
                            location: 'Omega Technology | Bujumbura, Burundi',
                            date: 'avr 2025 - dec 2025',
                            desc: "J'ai formé des étudiants en HTML, CSS et JavaScript, les aidant à développer des projets concrets et à maîtriser les bases du développement web.",
                            side: 'left',
                        },
                        {
                            title: 'Développeur Backend (Django)',
                            location: 'chez Magis Fintech | Mwaro, Burundi',
                            date: 'nov 2024 - fev 2025',
                            desc: "J'ai développé et maintenu des applications web avec Django. Mon travail s'est concentré sur les API, la gestion de bases de données et la mise en place de systèmes back-end rapides et sécurisés.",
                            side: 'right',
                        },
                        {
                            title: 'Développeur Backend (Django) - Stage Académique',
                            location: 'chez Magis Fintech | Mwaro, Burundi',
                            date: 'sept 2024 - nov 2024',
                            desc: "Apprentissage des bases de l'architecture backend et initiation aux flux de travail de l'entreprise sur Django.",
                            side: 'left',
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`relative mb-12 md:mb-0 ${item.side === 'left' ? 'md:text-right' : 'md:translate-y-24'}`}
                        >
                            {/* Point d'ancrage lumineux */}
                            <div className="absolute -left-[21px] md:left-1/2 top-6 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_15px_#06b6d4] z-10 md:-translate-x-1/2"></div>

                            <div
                                className={`group relative p-[1px] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${item.side === 'left' ? 'md:mr-8' : 'md:ml-8'}`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-cyan-500/20 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                                <div className="relative bg-gradient-to-br from-[#07070759] via-card to-[#05050571] p-6 rounded-2xl h-full shadow-2xl">
                                    <div
                                        className={`flex flex-col ${item.side === 'left' ? 'md:items-end' : 'items-start'} mb-4`}
                                    >
                                        <span className="text-cyan-500 font-mono text-xs font-bold tracking-widest mb-1">
                                            {item.date}
                                        </span>
                                        <h3 className="text-xl font-extrabold text-white leading-tight">
                                            {item.title}
                                        </h3>
                                        <small className="text-gray-500 font-medium mt-1 uppercase text-[10px]">
                                            {item.location}
                                        </small>
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
