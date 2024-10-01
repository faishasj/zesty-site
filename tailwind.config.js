/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				b: "oklch(var(--b) / <alpha-value>)",
			},
		},
	},
	daisyui: {
		themes: [
			{
				main: {
					...require("daisyui/src/theming/themes")["main"],
					primary: "#DC975B",
					"--b": "61.35% 0.132 51.88",
					c: "#6F1211",
					d: "#43050B",
					e: "#A57986",
					f: "#764656",
					g: "#80775A",
					h: "#403E23",
				},
				// template: {
				// 	primary: "#4b6bfb",
				// 	"primary-focus": "#284FFB",
				// 	"primary-content": "#E2E0FF",
				// 	secondary: "#7b92b2",
				// 	"secondary-focus": "#657FA4",
				// 	"secondary-content": "#1D2025",
				// 	accent: "#67cba0",
				// 	"accent-focus": "#4CC28F",
				// 	"accent-content": "#1A2821",
				// 	neutral: "#181a2a",
				// 	"neutral-focus": "#EDEDED",
				// 	"neutral-content": "#EDF2F7",
				// 	"base-100": "#ffffff",
				// 	"base-200": "#EDEDED",
				// 	"base-300": "#DBDBDB",
				// 	"base-content": "#181A2A",
				// 	info: "#3abff8",
				// 	"info-content": "#002B3D",
				// 	success: "#36d372",
				// 	"success-content": "#003320",
				// 	warning: "#fbbd23",
				// 	"warning-content": "#382800",
				// 	error: "#f87272",
				// 	"error-content": "#470000",
				// },
			},
		],
	},
	plugins: [require("daisyui")],
}
