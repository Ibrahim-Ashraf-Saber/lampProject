import { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false);

  const bgClasses = isOn ? "bg-[radial-gradient(#555,#111)]" : "bg-[#1e1e1e]";

  const lampClass = isOn
    ? "bg-white shadow-[0_0_50px_#fff,0_0_100px_#fff,0_0_150px_#fff,0_0_200px_#fff,0_0_250px_#fff,0_0_300px_#fff,0_0_350px_#fff]"
    : "bg-[#3b3b3b]";

  const lampHeadClass = isOn ? "bg-white" : "bg-[#3b3b3b]";

  const btnClass = isOn ? "top-[10%]" : "top-[0]";

  return (
    <div className={`light ${bgClasses}`}>
      <div className={`lamp ${lampClass}`}>
        <div className={`lamp-head ${lampHeadClass}`}></div>
      </div>
      <div className="wire"></div>
      <div className="switch">
        <div className="switch-1">
          <div
            className={`switch-2 ${btnClass}`}
            onClick={() => setIsOn(!isOn)}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
