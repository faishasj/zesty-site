import IMAGES from "./Images/images"
import FaqComp from "./components/FaqComp"
import RsvpForm from "./components/RsvpForm"

function App() {
	return (
		<div className="w-screen h-screen items-center bg-b overflow-y-auto snap-y snap-mandatory">
			{/* page 1 */}
			<RsvpForm />
			{/* page 2 */}
			<div className="flex flex-col items-center p-4 h-screen w-full bg-primary snap-start snap-always">
				<article className="text-xl font-bold text-white">
					The Wedding
				</article>
				<article className="text-lg font-bold text-white">of</article>
				<article className="text-3xl font-bold text-white">
					Nicholas and Rebekah
				</article>
			</div>
			{/* page 3 */}
			<div className="h-screen w-full snap-start snap-always">
				<img
					className="h-full w-full object-cover overflow-hidden"
					src={IMAGES.image1}
					alt="first image"
				/>
			</div>
			{/* page 4 */}
			<FaqComp />
		</div>
	)
}

export default App
