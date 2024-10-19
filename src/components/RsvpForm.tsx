import axios from "axios"
import React from "react"
import { useState } from "react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import IMAGES from "../Images/images"

interface selectedGuest {
	name: string
	group: [string, number][]
	rsvpStatus: boolean
}

interface formInput {
	name: string
	index: string
	ceremony: boolean
	reception: boolean
	dietary: string
}

function RsvpForm() {
	const [searchInput, setSearchInput] = useState("")
	const [loading, setLoading] = useState(false)
	const [searchResults, setSearchResults] = useState([])
	const [selectedGuest, setSelectedGuest] = useState<selectedGuest | null>(
		null
	)
	const [formInput, setFormInput] = useState<formInput[]>([])
	const [formPart, setFormPart] = useState(false)
	const [submitted, setSubmitted] = useState(false)

	function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
		setSearchInput(event.target.value)
	}

	function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === "Enter") {
			handleSearch()
		}
	}

	function handleSearch() {
		if (searchInput !== "") {
			setLoading(true)
			axios
				.get(
					"https://script.google.com/macros/s/AKfycbyM-9QSmfJV5fq7D2f39B7ZAC6qGz8MpbY4YzElXK9aWMPjmqsR8r3Esh-aD6ly5ZawuQ/exec",
					{
						maxRedirects: 0,
						params: {
							actionType: "lookup",
							query: searchInput,
						},
					}
				)
				.then((output) => {
					setSearchResults(output.data)
				})
				.then(() => {
					setLoading(false)
				})
		}
	}

	function fetchGuest(event: React.MouseEvent<HTMLButtonElement>) {
		setLoading(true)
		const button = event.target as HTMLButtonElement
		axios
			.get(
				"https://script.google.com/macros/s/AKfycbyM-9QSmfJV5fq7D2f39B7ZAC6qGz8MpbY4YzElXK9aWMPjmqsR8r3Esh-aD6ly5ZawuQ/exec",
				{
					maxRedirects: 0,
					params: {
						actionType: "getDetails",
						query: button.value,
					},
				}
			)
			.then((output) => {
				setSelectedGuest(output.data)
				let generatedObj = []
				generatedObj.push({
					name: output.data.name,
					index: button.value,
					ceremony: false,
					reception: false,
					dietary: "",
				})
				output.data.group.forEach((element: string[]) => {
					generatedObj.push({
						name: element[0],
						index: element[1].toString(),
						ceremony: false,
						reception: false,
						dietary: "",
					})
				})
				setFormInput(generatedObj)
			})
			.then(() => {
				setLoading(false)
			})
	}

	const handleDietary =
		(index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
			setFormInput(
				formInput.map((obj, i) => {
					if (i === index) {
						obj.dietary = event.target.value
					}
					return obj
				})
			)
		}

	const handleCheckbox =
		(index: number, eventName: string) =>
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setFormInput(
				formInput.map((obj, i) => {
					if (i === index) {
						if (eventName === "reception") {
							obj.reception = event.target.checked
						} else if (eventName === "ceremony") {
							obj.ceremony = event.target.checked
						}
					}
					return obj
				})
			)
		}

	function handleFormButton() {
		setFormPart(!formPart)
	}

	function handleSubmission() {
		setLoading(true)
		axios
			.get(
				"https://script.google.com/macros/s/AKfycbyM-9QSmfJV5fq7D2f39B7ZAC6qGz8MpbY4YzElXK9aWMPjmqsR8r3Esh-aD6ly5ZawuQ/exec",
				{
					maxRedirects: 0,
					params: {
						actionType: "rsvp",
						query: JSON.stringify(formInput),
					},
				}
			)
			.then(() => {
				console.log("submission complete")
			})
			.then(() => {
				setSubmitted(true)
				setLoading(false)
			})
	}

	return (
		<div className="flex items-center h-screen w-full bg-base-200 snap-end">
			<div className="flex items-center justify-center h-full w-1/2">
				<div className="flex flex-col h-5/6 w-4/5 justify-center">
					{loading ? (
						<DotLottieReact
							src="https://lottie.host/276f08dd-d141-4a03-b68f-a26978d35281/322k4GRMWc.json"
							loop
							autoplay
						/>
					) : submitted ? (
						<div className="flex flex-col h-1/5 justify-center items-center text-xl bg-white rounded">
							<article className="text-black font-semibold mb-2">
								Thank you for completing the form
							</article>
							<article className="text-black">
								We have sent off your response to the bride and
								groom
							</article>
						</div>
					) : selectedGuest !== null ? (
						<div className="flex flex-col h-full w-full">
							<article className="text-3xl h-[8%] font-semibold w-full text-center">
								RSVP Form
							</article>
							<div className="flex flex-col h-[92%] bg-white rounded-md p-4 text-black">
								{selectedGuest.rsvpStatus === true ? (
									<div className="flex h-4/5 items-center">
										<article className="font-semibold text-lg">
											{selectedGuest.name} has already
											RSVP'd
										</article>
									</div>
								) : formPart ? (
									<React.Fragment>
										<div className="flex flex-col overflow-y-auto h-full w-full gap-y-4">
											<article className="my-2 font-semibold text-xl">
												Dietary requirements
											</article>
											{formInput.map((obj, i) => {
												if (obj.reception) {
													return (
														<div
															key={obj.name}
															className="flex flex-col gap-y-4"
														>
															<article>
																{obj.name}
															</article>
															<input
																type="text"
																onChange={handleDietary(
																	i
																)}
																placeholder="Dietary Requirements (optional)"
																className="ml-2 input input-success w-full text-black bg-white max-w-xs"
															/>
															<div className="divider divider-success px-2"></div>
														</div>
													)
												} else {
													return null
												}
											})}
										</div>
										<div className="flex justify-between">
											<button
												onClick={handleFormButton}
												className="btn btn-outline btn-success mt-4"
											>
												Go Back
											</button>
											<button
												onClick={handleSubmission}
												className="btn btn-outline btn-success mt-4"
											>
												Confirm Choices
												<div className="flex gap-x-2">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width={16}
														height={16}
														viewBox="0 0 24 24"
														fill="none"
														stroke="black"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<path d="M20 6L9 17l-5-5" />
													</svg>
												</div>
											</button>
										</div>
									</React.Fragment>
								) : (
									<React.Fragment>
										<div className="flex flex-col overflow-y-auto h-full w-full gap-y-4">
											<article className="my-2 font-semibold text-xl">
												Which events will you be
												attending
											</article>
											<article className="font-semibold text-lg">
												{selectedGuest.name}
											</article>
											<div className="flex gap-x-4">
												<input
													type="checkbox"
													className="checkbox checkbox-success"
													onChange={handleCheckbox(
														0,
														"ceremony"
													)}
												/>
												<article>
													Ceremony, 4:30pm
												</article>
											</div>
											<div className="flex gap-x-4">
												<input
													type="checkbox"
													className="checkbox checkbox-success"
													onChange={handleCheckbox(
														0,
														"reception"
													)}
												/>
												<article>
													Reception, 6:00pm
												</article>
											</div>
											<div className="mt-4 gap-y-4">
												<article className="text-xl font-semibold mb-4">
													Group Attendees
												</article>
												<div className="flex flex-col">
													{selectedGuest.group.map(
														(guest, i) => (
															<div
																key={guest[1]}
																className="flex flex-col gap-y-4"
															>
																<article className="font-semibold text-lg">
																	{guest[0]}
																</article>
																<div className="flex gap-x-4">
																	<input
																		type="checkbox"
																		className="checkbox checkbox-success"
																		onChange={handleCheckbox(
																			i +
																				1,
																			"ceremony"
																		)}
																	/>
																	<article>
																		Ceremony,
																		4:30pm
																	</article>
																</div>
																<div className="flex gap-x-4">
																	<input
																		type="checkbox"
																		className="checkbox checkbox-success"
																		onChange={handleCheckbox(
																			i +
																				1,
																			"reception"
																		)}
																	/>
																	<article>
																		Reception,
																		6:00pm
																	</article>
																</div>
																<div className="divider divider-success px-2"></div>
															</div>
														)
													)}
												</div>
											</div>
										</div>
										<div className="flex justify-between">
											<button
												onClick={() => {
													setSelectedGuest(null)
												}}
												className="btn btn-outline btn-success mt-4"
											>
												Go Back
											</button>
											<button
												onClick={handleFormButton}
												className="btn btn-outline btn-success mt-4"
											>
												Confirm Choices
												<div className="flex gap-x-2">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width={16}
														height={16}
														viewBox="0 0 24 24"
														fill="none"
														stroke="black"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<path d="M20 6L9 17l-5-5" />
													</svg>
												</div>
											</button>
										</div>
									</React.Fragment>
								)}
							</div>
						</div>
					) : (
						<React.Fragment>
							<div className="flex flex-col h-1/5">
								<article className="text-3xl font-semibold mb-2">
									RSVP Form
								</article>
								<label className="input input-bordered bg-white text-black h-12 flex items-center gap-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 16 16"
										fill="black"
										className="h-4 w-4 opacity-70"
									>
										<path
											fillRule="evenodd"
											d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
											clipRule="evenodd"
										/>
									</svg>
									<input
										type="text"
										className="h-12 grow"
										placeholder="Search name here..."
										onKeyDown={handleKeyDown}
										onChange={handleSearchInput}
									/>
								</label>
								<div className="flex gap-x-4 items-center">
									<button
										onClick={handleSearch}
										className="flex w-20 btn bg-error mt-2"
									>
										<div className="flex gap-x-2 text-black">
											Done
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width={16}
												height={16}
												viewBox="0 0 24 24"
												fill="none"
												stroke="black"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												<path d="M20 6L9 17l-5-5" />
											</svg>
										</div>
									</button>
									<article>
										press <b>enter</b>
									</article>
								</div>
							</div>
							<div className="flex flex-col h-4/5 w-full overflow-y-auto mt-4 gap-y-3">
								<article className="font-semibold text-lg mt-4">
									Results:
								</article>
								{searchResults.map((result) => (
									<button
										key={result[1]}
										value={result[1]}
										onClick={fetchGuest}
										className="btn btn-error w-fit btn-sm px-4"
									>
										{result[0]}
									</button>
								))}
							</div>
						</React.Fragment>
					)}
				</div>
			</div>
			<img
				className="h-full w-1/2 object-cover overflow-hidden"
				src={IMAGES.image1}
				alt="Photo collage of Rebekah and Nicholas."
			/>
		</div>
	)
}

export default RsvpForm
