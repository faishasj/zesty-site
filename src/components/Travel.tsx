import IMAGES from "../Images/images"

function Travel() {
	return (
		<div className="flex h-screen w-full snap-start bg-primary">
			<img
				className="h-full w-1/2 object-cover overflow-hidden"
				src={IMAGES.image1}
				alt="Photo collage of Rebekah and Nicholas."
			/>
			<div className="h-full w-1/2 bg-base-300">
				<article>Travel</article>
			</div>
		</div>
	)
}
export default Travel
