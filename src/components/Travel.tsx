import IMAGES from "../Images/images"

function Travel() {
	return (
		<div className="flex h-screen w-full snap-start bg-primary">
			<img
				className="h-full w-1/2 object-cover overflow-hidden"
				src={IMAGES.image3}
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
						See attached PDF {""} 
						<a className="cursor-pointer" href="https://l.messenger.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F16W0rI5EQIaICAF05px3NlDtTANDgXDu1%2Fview%3Fusp%3Ddrive_link&h=AT2HPBvWIegw1MocUDrmiMW1j40LY6aex-jNrK4ss72eE46KOSIEf6hu47wGTUwnbg-txjvALBWkoBmnkLAGxJ7OV1MYtGlnVfNMiy_CPSjXstN6v9b95Prmq2YMWo4QdxBtqAgrXiEcgttsCIeRihxVdtg">
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
