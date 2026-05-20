/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				starpod: {
					background: '#020617',
					surface: '#111827',
					surface2: '#0f172a',
					border: '#334155',
					text: '#e2e8f0',
					muted: '#94a3b8',
					accent: '#8b5cf6',
					accent2: '#38bdf8',
				},
			},
			fontFamily: {
				mono: ['Fira Code', 'Courier New', 'monospace'],
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
}