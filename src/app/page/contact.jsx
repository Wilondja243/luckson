import React from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import useLoginValidation from '../../hooks/use-contact-validation';

export default function Contact() {
    const { handleSubmit, errors } = useLoginValidation();
    const [username, setUsername] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [isSending, setIsSending] = React.useState(false);

    const onFormSubmit = e => {
        e.preventDefault();
        const isValid = handleSubmit({ username, subject, description });
        if (isValid) {
            setIsSending(true);
            emailjs
                .send(
                    process.env.REACT_APP_EMAILJS_SERVICE_ID,
                    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                    {
                        from_name: username,
                        subject,
                        message: description,
                        reply_to: 'monalinacampany@gmail.com',
                    },
                    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
                )
                .then(() => {
                    toast.success('Message envoyé');
                    setIsSending(false);
                    setUsername('');
                    setSubject('');
                    setDescription('');
                })
                .catch(() => setIsSending(false));
        }
    };

    return (
        <section id="contact" className=" text-white py-24 px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
                <div className="space-y-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
                            Contact
                        </h2>
                        <p className="text-muted text-lg leading-relaxed max-w-md">
                            Une question ou un projet ? Parlons-en ensemble.
                            Réponse garantie sous 24 heures.
                        </p>
                    </div>

                    <div className="space-y-8 pt-8 border-t border-white/10">
                        {[
                            {
                                label: 'Email',
                                value: 'monalinacampany@gmail.com',
                                href: 'mailto:monalinacampany@gmail.com',
                            },
                            {
                                label: 'LinkedIn',
                                value: 'Wilondja Ebuela',
                                href: 'https://www.linkedin.com/in/wilondja',
                            },
                            {
                                label: 'WhatsApp',
                                value: 'Direct Chat',
                                href: 'https://wa.me/message/3BLU6AZOQCOCN1',
                            },
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="block group"
                            >
                                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-1 block group-hover:text-cyan-500 transition-colors">
                                    {item.label}
                                </span>
                                <span className="text-xl font-medium tracking-tight border-b border-transparent group-hover:border-white transition-all">
                                    {item.value}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* --- RIGHT: MINIMAL FORM --- */}
                <form onSubmit={onFormSubmit} className="space-y-10">
                    {Object.values(errors).length > 0 && (
                        <div className="p-4 bg-red-500/10 border-l-4 border-red-500 text-red-400 text-sm">
                            Veuillez remplir correctement tous les champs.
                        </div>
                    )}

                    <div className="space-y-8">
                        <div className="relative group">
                            <input
                                type="text"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-white transition-colors placeholder:text-gray-600"
                                placeholder="Votre nom"
                            />
                        </div>

                        <div className="relative group">
                            <input
                                type="text"
                                value={subject}
                                onChange={e => setSubject(e.target.value)}
                                className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-white transition-colors placeholder:text-gray-600"
                                placeholder="Sujet de discussion"
                            />
                        </div>

                        <div className="relative group">
                            <textarea
                                rows="4"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-white transition-colors placeholder:text-gray-600 resize-none"
                                placeholder="Votre message"
                            />
                        </div>
                    </div>

                    <div className="pt-6">
                        <button
                            disabled={isSending}
                            className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.4em] disabled:opacity-30"
                        >
                            <span className="group-hover:mr-4 transition-all duration-300">
                                {isSending ? 'Envoi...' : 'Envoyer'}
                            </span>
                            <div className="w-12 h-[1px] bg-white group-hover:w-20 transition-all duration-300"></div>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
