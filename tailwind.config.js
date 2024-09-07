/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: ["dark", { test: { primary: "#ffffff" } }],
	},
	plugins: [require("daisyui")],
}
