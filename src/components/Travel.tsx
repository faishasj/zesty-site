import IMAGES from "../Images/images"

function Travel() {
	return (
		<div className="flex h-screen w-full snap-start bg-primary">
			<img
				className="h-full w-1/2 object-cover overflow-hidden"
				src={IMAGES.image1}
				alt="Photo collage of Rebekah and Nicholas."
			/>
			<div className="flex items-center justify-center h-full w-1/2 bg-base-300">
				<div className="flex flex-col w-2/3 gap-y-6">
					<article className="text-4xl font-semibold">Travel</article>
					<article className="text-xl">
						Should you wish to honour us with a gift, a contribution
						towards our future together would be sincerely
						appreciated.
					</article>
					<article className="text-xl">
						See attached PDF{" "}
						<a className="cursor-pointer" href="">
							<u>here</u>
						</a>
						.
					</article>
				</div>
			</div>
		</div>
	)
}
export default Travel
