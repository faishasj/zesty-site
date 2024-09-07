import axios from "axios";
import { useEffect } from "react";

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
    <div className="w-screen h-fit flex flex-col items-center bg-primary">
      <div className="flex flex-col items-center p-4 h-screen">
        <article className="text-xl font-bold text-white">The Wedding</article>
        <article className="text-lg font-bold text-white">of</article>
        <article className="text-3xl font-bold text-white">
          Nicholas and Rebekah
        </article>
        <article className="text-3xl font-bold text-white">Somewhere</article>
      </div>

      <div className="bg-[#F0DFD0] flex flex-col p-16 w-full">
        <div className="flex flex-col items-center relative">
          <div className="flex flex-col items-center mb-16">
            <div className="w-5 h-px bg-[#44050D] mb-1"></div>
            <div className="w-5 h-px bg-[#44050D] mb-1"></div>
            <div className="w-5 h-px bg-[#44050D]"></div>
          </div>

          <h1 className="text-6xl font-normal text-[#44050D] transform -rotate-1 mb-24 text-center">
            Nicholas and Rebekah <br /> are getting married!
          </h1>

          <div className="bg-[url('assets/images/Img05391.jpeg')] bg-cover bg-center w-full h-[544px] mb-24"></div>

          <h2 className="text-4xl font-normal text-black mb-8">Schedule</h2>
          <p className="text-2xl font-normal text-black mb-24">12.04.25</p>

          <div className="flex space-x-8 mb-16">
            <div className="w-4 h-4 bg-[#721311] rounded"></div>
            <p className="text-2xl font-normal text-black">4:00pm</p>

            <div>
              <p className="text-2xl font-normal text-black">Guests arrive</p>
              <p className="text-lg text-black">Rydges Melbourne</p>
              <p className="text-lg text-black">186 Exhibition St, Melbourne VIC</p>
              <span className="underline text-[#721311]">Get directions</span>
            </div>
          </div>

          <div className="flex justify-between w-[683.7px] mb-24">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-[#721311] rounded"></div>
              <p className="text-2xl font-normal text-black">4:30pm</p>
            </div>
            <p className="text-2xl font-normal text-black">Ceremony</p>
            <p className="text-lg text-black">
              Rydges Melbourne, level 2, Rooftop Terrace
            </p>
          </div>

          <div className="flex justify-between w-[661px] mb-24">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-[#721311] rounded"></div>
              <p className="text-2xl font-normal text-black">6:00pm</p>
            </div>
            <p className="text-2xl font-normal text-black">Reception</p>
            <p className="text-lg text-black">
              Rydges Melbourne, Floor 1, Centre Stage
            </p>
          </div>

          <div className="flex flex-col items-start bg-[#404024] p-24 mb-48">
            <h3 className="text-4xl text-[#F0DFD0] mb-8">Gifts</h3>
            <p className="text-lg text-[#F0DFD0] mb-8">
              Should you wish to honor us with a gift, a contribution towards our
              future together would be sincerely appreciated.
            </p>
            <div>
              <h4 className="text-2xl text-[#F0DFD0] mb-4">Bank transfer</h4>
              <p className="text-lg text-[#F0DFD0]">
                BSB: 201234, Account: 0264855878
              </p>
            </div>
            <div className="mt-8">
              <h4 className="text-2xl text-[#F0DFD0] mb-4">Alternative payments</h4>
              <p className="text-lg text-[#F0DFD0]">PayID: 0481290817</p>
            </div>
          </div>

          <div className="flex justify-center bg-[#A67A89] p-24 mb-48">
            <h2 className="text-6xl text-[#44050D] transform -rotate-6">
              See you there!
            </h2>
          </div>
        </div>

        <button className="absolute top-[536px] right-[642px] bg-[#44050D] text-[#F0DFD0] rounded-lg px-4 py-3">
          RSVP
        </button>
      </div>
    </div>
  )
}

export default App;
