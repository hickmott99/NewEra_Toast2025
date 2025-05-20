import { useState, useRef } from "react"

function Thermometer({ goal=0, progress=0, setProgress, isMonetary = false, title = "" }) {
  const [amount, setAmount] = useState("")
  const containerRef = useRef(null)

  const progressRatio = goal > 0 ? progress / goal : 0
  const percentage = Math.floor(progressRatio * 100)
  const formatValue = (value) => isMonetary ? `$${value.toLocaleString()}` : `${value}`

  const handleSubmit = (e) => {
    e.preventDefault()
    const numericAmount = Number.parseFloat(amount)
    if (!isNaN(numericAmount)) {
      setProgress(numericAmount)
      setAmount("")
      createConfetti()
    }
  }

  const createConfetti = () => {
    if (!containerRef.current) return

    const container = containerRef.current
    const containerRect = container.getBoundingClientRect()

    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement("div")
      confetti.className = "confetti"

      // Random position, color, and delay
      confetti.style.left = `${Math.random() * containerRect.width}px`
      confetti.style.backgroundColor = getRandomColor()
      confetti.style.animationDelay = `${Math.random() * 0.5}s`
      confetti.style.width = `${Math.random() * 8 + 5}px`
      confetti.style.height = `${Math.random() * 8 + 5}px`
      confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0"

      container.appendChild(confetti)

      // Remove confetti after animation
      setTimeout(() => {
        if (container.contains(confetti)) {
          container.removeChild(confetti)
        }
      }, 3000)
    }
  }

  const getRandomColor = () => {
    const colors = ["#ff9533", "#e85d04", "#ffbf69", "#ff7b00", "#ffd166"]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <div className="thermometer-container" ref={containerRef}>
      <div className="header-2">{title}</div>
      <div className="main-thermo-content-container">
        <div className="progress-text target-text">Goal: {formatValue(goal)}</div>
        <div className="thermometer-track">
          <div
            className={`thermometer-progress thermometer-progress-${title.replace(/\s+/g, "-").toLowerCase()}`}
            style={{ height: `${Math.min(100, Math.max(0, percentage))}%` }}
          ></div>
          <div className="thermometer-bulb"></div>
        </div>
        <div className="progress-text">Current: {formatValue(progress)}</div>
        <div className="percentage-text">{percentage}%</div>
      </div>
      <form onSubmit={handleSubmit} className="thermo-form">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder={`Add ${isMonetary ? "amount" : "number"}`}
          className="thermo-input"
          step={isMonetary ? "0.01" : "1"}
        />
        <button type="submit" className="submit-button">
          Add
        </button>
      </form>
    </div>
  )
}

export default Thermometer
