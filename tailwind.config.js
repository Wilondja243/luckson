/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                text: 'var(--bs-text)',
                muted: 'var(--bs-muted)',
                background: 'var(--bs-background)',
                card: 'var(--bs-card)',
                tint: 'var(--bs-tint)',
                tint_soft: 'var(--bs-tint-soft)',
                icon: 'var(--bs-icon)',
                border: 'var(--bs-border)',
            },
        },
    },
    plugins: [],
};
