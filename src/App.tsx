import IMAGES from "./Images/images";
import FaqComp from "./components/FaqComp";
import Gifts from "./components/Gifts";
import RsvpForm from "./components/RsvpForm";
import Schedule from "./components/Schedule";
import Travel from "./components/Travel";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="w-screen h-screen items-center bg-white overflow-y-auto snap-y snap-mandatory">
			{/* Page 1 - Welcome */}
			<Welcome />
			{/* Page 2 - Image */}
			<div className="h-screen w-full snap-start snap-always">
				<img
					className="h-full w-full object-cover overflow-hidden"
					src={IMAGES.image1}
					alt="first image"
				/>
			</div>
			{/* Page 3 - Schedule */}
			<Schedule />
			{/* Page 4 - Gifts */}
			<Gifts />
			{/* Page 5 - Travel */}
			<Travel />
			{/* Page 6 - FAQ */}
			<FaqComp />
			{/* Page 7 - RSVP */}
			<RsvpForm />
			{/* Page 8 - Collage */}
			<div className="h-screen w-full snap-start snap-always">
				<img
					className="h-full w-full object-cover overflow-hidden"
					src={IMAGES.collage}
					alt="Photo collage of Rebekah and Nicholas."
				/>
			</div>
			{/* Page 9 - Footer */}
			<Footer />
		</div>
	)
}

export default App
