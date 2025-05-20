import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useState } from "react"

import Thermometer from "./Thermometer.js"
import AdminPage from "./AdminPage"

import "./App.css"

function App() {
  const [goals, setGoals] = useState({
    dollars: 5000,
    volunteers: 10,
  })

  const [progress, setProgress] = useState({
    dollars: 0,
    volunteers: 0,
  })

  const updateProgress = (type, amount) => {
    setProgress((prev) => ({
      ...prev,
      [type]: prev[type] + amount,
    }))
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="header">
                  <img
                    id="new-era-logo"
                    alt="new-era-logo"
                    src="https://neweracolorado.org/wp-content/uploads/2022/07/NEC_Logo_Primary_Color.png"
                  />
                  <div className="header-1">Toast To Democracy 2025</div>
                </div>
                <div id="thermometer-row">
                  <Thermometer
                    goal={goals.dollars}
                    progress={progress.dollars}
                    setProgress={(amount) => updateProgress("dollars", amount)}
                    isMonetary={true}
                    title="Dollars Raised"
                  />
                  <Thermometer
                    goal={goals.volunteers}
                    progress={progress.volunteers}
                    setProgress={(amount) => updateProgress("volunteers", amount)}
                    title="Volunteers"
                  />
                </div>
              </>
            }
          />
          <Route
            path="/admin"
            element={<AdminPage goals={goals} setGoals={setGoals} />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App