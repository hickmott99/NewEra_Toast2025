"use client"

import { useState } from "react"
import Thermometer from "./Thermometer.js"
import AdminPage from "./AdminPage.js"
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState("main")

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

  const navigateTo = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="App">
      <div id="header">
        <div onClick={() => navigateTo("admin")} style={{ zIndex: 10, cursor: "pointer" }}>
          <img
            id="new-era-logo"
            alt="new-era-logo"
            src={process.env.PUBLIC_URL + "/new_era_logo_white.png" || "/placeholder.svg"}
          />
        </div>
        <div onClick={() => navigateTo("main")} style={{ zIndex: 10, cursor: "pointer" }} className="header-1">
          Toast To Democracy 2025
        </div>
      </div>

      {currentPage === "main" && (
        <div id="thermometer-row">
          <Thermometer
            goal={goals.dollars}
            progress={progress.dollars}
            updateProgress={(amount) => updateProgress("dollars", amount)}
            isMonetary={true}
            title="Dollars Raised"
          />
          <Thermometer
            goal={goals.volunteers}
            progress={progress.volunteers}
            updateProgress={(amount) => updateProgress("volunteers", amount)}
            title="Volunteers"
          />
        </div>
      )}

      {currentPage === "admin" && <AdminPage goals={goals} setGoals={setGoals} />}
    </div>
  )
}

export default App