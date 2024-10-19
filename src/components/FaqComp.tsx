function FaqComp() {
	return (
		<div className="flex h-screen w-full items-center justify-center snap-start bg-primary">
			<div className="flex flex-col items-center w-3/5">
				<article className="text-5xl mb-12">
					Frequently asked questions
				</article>
				<article className="text-2xl">
					Will the ceremony be outside?
				</article>
				<article>
					Yes! Please bring a light jacket just in case there is rainy
					weather on the day.
				</article>
				<article>The reception will be indoors.</article>
				<div className="divider divider-secondary"></div>
				<article className="text-2xl">What is the dress code?</article>
				<article>
					Formal dress code, autumnal pinks, greens, red, oranges.
				</article>
				<div className="flex mt-2 h-8 gap-x-2">
					<div className="w-8 rounded-md bg-base-100" />
					<div className="w-8 rounded-md bg-neutral" />
					<div className="w-8 rounded-md bg-secondary" />
					<div className="w-8 rounded-md bg-info" />
				</div>
				<div className="divider divider-secondary"></div>
				<article className="text-2xl">
					Will children be allowed?
				</article>
				<article>Yes</article>
				<div className="divider divider-secondary"></div>
				<article className="text-2xl">
					Looking into accomodation options?
				</article>
				<article>Rydges Hotel</article>
				<div className="divider divider-secondary"></div>
				<article className="text-2xl">
					Just attending the ceremony?
				</article>
				<article>
					Yes? Please bring a light jacket in case there is weather on
					the day?
				</article>
				<div className="divider divider-secondary"></div>
			</div>
		</div>
	)
}
export default FaqComp
