import axios from "axios"
import { useEffect } from "react"

function App() {
	useEffect(() => {
		axios
			.post(
				"https://script.google.com/macros/s/AKfycbxRyBIHoFmybe_xCHm6yGEI5PXA-1Ls8tGnfXY9QsFMRGPKNA1qQi6SRQNbBSfMPtKyAw/exec",
				{
					maxRedirects: 0,
					params: {
						actionType: "lookup",
						query: "John",
					},
				}
			)
			.then((output) => {
				console.log(output)
			})
	}, [])

	return (
		<div className="h-fit w-screen flex flex-col items-center bg-primary">
			<div className="p-4 h-screen flex flex-col items-center">
				<article className="text-xl font-bold text-white">
					The Wedding
				</article>
				<article className="text-lg font-bold text-white">of</article>
				<article className="text-3xl font-bold text-white">
					Nicholas and Rebekah
				</article>
				<article className="text-3xl font-bold text-white">
					Somewhere
				</article>
			</div>
			<div></div>
		</div>
	)
}

export default App
