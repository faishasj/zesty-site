/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				main: {
					primary: "#DC975B",
					b: "#C16A2E",
					c: "#6F1211",
					d: "#43050B",
					e: "#A57986",
					f: "#764656",
					g: "#80775A",
					h: "#403E23",
				},
			},
		],
	},
	plugins: [require("daisyui")],
}
