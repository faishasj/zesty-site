import RsvpForm from "./components/RsvpForm"

function App() {
	return (
		<div className="w-screen h-fit flex flex-col items-center bg-b">
			{/* page 1 */}
			<RsvpForm />
			{/* page 2 */}
			<div className="flex flex-col items-center p-4 h-screen w-full bg-primary">
				<article className="text-xl font-bold text-white">
					The Wedding
				</article>
				<article className="text-lg font-bold text-white">of</article>
				<article className="text-3xl font-bold text-white">
					Nicholas and Rebekah
				</article>
			</div>
		</div>
	)
}

export default App
