/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			clipPath: {
				"angled-section": "polygon(100% 80%, 50% 100%, 0 80%, 0 0, 100% 0)",
			},
			colors: {
				secondary: "#ffd012",
			},
		},
	},
	plugins: [],
};
