import "./App.css"
import Thermometer from "./Thermometer.js"

function App() {
  return (
    <div className="App">
      <div id="header">
        <img
          id="new-era-logo"
          alt="new-era-logo"
          src="https://neweracolorado.org/wp-content/uploads/2022/07/NEC_Logo_Primary_Color.png"
        ></img>
        <div className="header-1">Toast To Democracy 2025</div>
      </div>
      <div id="thermometer-row">
        <Thermometer goal={5000} initialProgress={0} isMonetary={true} title="Dollars Raised" />
        <Thermometer goal={10} initialProgress={0} title="Volunteers" />
      </div>
    </div>
  )
}

export default App
