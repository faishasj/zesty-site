import axios from "axios"
import { useEffect } from "react"

function App() {
	useEffect(() => {
		axios
			.get(
				"https://script.google.com/macros/s/AKfycbxK1fkBOqEto5kRs5EmVOnaCfQfgIvkH_BaRpwMo_rt-r6DkaIogeKqlq5H-O01AMJp8g/exec"
			)
			.then((output) => {
				console.log(output)
			})
	}, [])

	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-700">
			<article className="text-3xl font-bold text-white">
				HERE WE GO
			</article>
			<button className="btn btn-primary">Primary</button>
		</div>
	)
}

export default App
