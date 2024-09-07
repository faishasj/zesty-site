import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbyM-9QSmfJV5fq7D2f39B7ZAC6qGz8MpbY4YzElXK9aWMPjmqsR8r3Esh-aD6ly5ZawuQ/exec",
        {
          maxRedirects: 0,
          params: {
            actionType: "rsvp",
            query: '[{ "index": 1, "attendance": false, "dietary": "kosher" }]',
          },
        }
      )
      .then((output) => {
        console.log(output);
      });
  }, []);

  return (
    <div className="h-fit w-screen flex flex-col items-center bg-primary">
      <div className="p-4 h-screen flex flex-col items-center">
        <article className="text-xl font-bold text-white">The Wedding</article>
        <article className="text-lg font-bold text-white">of</article>
        <article className="text-3xl font-bold text-white">
          Nicholas and Rebekah
        </article>
        <article className="text-3xl font-bold text-white">Somewhere</article>
      </div>
      <div></div>
    </div>
  );
}

export default App;
