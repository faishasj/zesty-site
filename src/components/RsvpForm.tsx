import axios from "axios"
import React from "react"
import { useState } from "react"

interface selectedGuest {
	name: string
	group: [string, number][]
	rsvpStatus: string
}

interface formInput {
	name: string
	index: string
	attendance: boolean
	dietary: string
}

function RsvpForm() {
	const [searchInput, setSearchInput] = useState("")
	const [searchResults, setSearchResults] = useState([])
	const [selectedGuest, setSelectedGuest] = useState<selectedGuest | null>(
		null
	)
	const [formInput] = useState<formInput[]>([])

	function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
		setSearchInput(event.target.value)
	}

	function handleSearch() {
		if (searchInput !== "") {
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
					console.log(output.data)
					setSearchResults(output.data)
				})
		}
	}

	function fetchGuest(event: React.MouseEvent<HTMLButtonElement>) {
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
				console.log(output.data)
				setSelectedGuest(output.data)
				formInput.push({
					name: output.data.name,
					index: button.value,
					attendance: false,
					dietary: "",
				})
				output.data.group.forEach((element: string[]) => {
					formInput.push({
						name: element[0],
						index: element[1].toString(),
						attendance: false,
						dietary: "",
					})
				})
			})
	}

	const handleDietary =
		(index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
			formInput[index].dietary = event.target.value
		}

	const handleCheckbox =
		(index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
			formInput[index].attendance = event.target.checked
		}

	function handleSubmission() {
		axios.get(
			"https://script.google.com/macros/s/AKfycbyM-9QSmfJV5fq7D2f39B7ZAC6qGz8MpbY4YzElXK9aWMPjmqsR8r3Esh-aD6ly5ZawuQ/exec",
			{
				maxRedirects: 0,
				params: {
					actionType: "rsvp",
					query: JSON.stringify(formInput),
				},
			}
		)
	}

	return (
		<div className="flex flex-col items-center justify-center p-4 h-screen w-full bg-b">
			<div className="flex flex-col items-center rounded-3xl p-8 h-[80vh] w-[50vw] bg-slate-400">
				{selectedGuest !== null ? (
					<div className="flex flex-col items-center h-full w-4/5">
						<div className="flex justify-start items-center w-full h-12">
							<button
								onClick={() => {
									setSelectedGuest(null)
								}}
								className="btn btn-outline w-12"
							>
								Back
							</button>
							<article className="text-3xl font-semibold w-full text-center">
								RSVPing for {selectedGuest.name}
							</article>
						</div>
						<div className="overflow-y-auto h-4/5 px-2 mt-4 w-full">
							<article className="font-semibold">
								{selectedGuest.name}
							</article>
							<div className="flex gap-x-4">
								<article>Attending?</article>
								<input
									type="checkbox"
									onChange={handleCheckbox(0)}
								/>
							</div>
							<input
								type="text"
								placeholder="Dietary Requirements"
								onChange={handleDietary(0)}
								className="input input-bordered w-full max-w-xs"
							/>
							<div className="mt-4">
								<article className="text-xl font-semibold">
									Group Attendees
								</article>
								<div className="flex flex-col gap-x-6">
									{selectedGuest.group.map((guest, i) => (
										<div
											key={guest[1]}
											className="flex flex-col mt-2"
										>
											<article className="font-semibold">
												{guest[0]}
											</article>
											<div className="flex gap-x-2">
												<article>Attending?</article>
												<input
													type="checkbox"
													onChange={handleCheckbox(
														i + 1
													)}
												/>
											</div>
											<input
												type="text"
												placeholder="Dietary Requirements"
												onChange={handleDietary(i + 1)}
												className="input input-bordered w-full max-w-xs"
											/>
										</div>
									))}
								</div>
							</div>
							<button
								onClick={handleSubmission}
								className="btn btn-neutral mt-4"
							>
								Submit
							</button>
						</div>
					</div>
				) : (
					<React.Fragment>
						<div className="flex flex-col items-center h-1/6">
							<article className="text-3xl font-semibold mb-2">
								RSVP Here
							</article>
							<div className="flex gap-4">
								<input
									type="text"
									placeholder="Enter your name"
									onChange={handleSearchInput}
									className="input input-bordered w-full max-w-md"
								/>
								<button
									onClick={handleSearch}
									className="btn btn-neutral"
								>
									Search
								</button>
							</div>
						</div>
						<div className="flex flex-col h-5/6 w-3/5 items-center overflow-y-auto mt-4 gap-y-2">
							{searchResults.map((result) => (
								<button
									key={result[1]}
									value={result[1]}
									onClick={fetchGuest}
									className="btn btn-outline w-11/12"
								>
									{result[0]}
								</button>
							))}
						</div>
					</React.Fragment>
				)}
			</div>
		</div>
	)
}

export default RsvpForm
