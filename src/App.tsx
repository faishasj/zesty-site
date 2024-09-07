import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbxRyBIHoFmybe_xCHm6yGEI5PXA-1Ls8tGnfXY9QsFMRGPKNA1qQi6SRQNbBSfMPtKyAw/exec",
        {
          maxRedirects: 0,
        }
      )
      .then((output) => {
        console.log(output);
      });
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-700">
      <article className="text-3xl font-bold text-white">HERE WE GO</article>
      <button className="btn btn-primary">Primary</button>
    </div>
  );
}

export default App;
