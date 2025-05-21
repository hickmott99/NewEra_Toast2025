import { useState, useRef } from "react"

function Thermometer({ goal=0, progress=0, updateProgress, isMonetary = false, title = "" }) {
  const [amount, setAmount] = useState("")
  const containerRef = useRef(null)
  const hasCelebrated = useRef(false)

  const progressRatio = goal > 0 ? progress / goal : 0
  const percentage = Math.floor(progressRatio * 100)
  const formatValue = (value) => isMonetary ? `$${value.toLocaleString()}` : `${value}`

  const handleSubmit = (e) => {
    e.preventDefault()
    const numericAmount = Number.parseFloat(amount)
    if (!isNaN(numericAmount)) {
      updateProgress(numericAmount)
      setAmount("")

      const newProgress = progress + numericAmount
      if (newProgress >= goal && !hasCelebrated.current) {
        bigCelebration()
        hasCelebrated.current = true
      } else createConfetti()

      if (newProgress < goal) hasCelebrated.current = false
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

  const bigCelebration = () => {
    const celebrationTime = 10*1000
    flashBackground(celebrationTime)
    createBigConfetti(celebrationTime)
    showGIFs(celebrationTime)
  }

  const createBigConfetti = (celebrationTime) => {
    const handleConfettiiUI = () => {
      const screenWidth = window.innerWidth
      for (let i = 0; i < 150; i++) {
        const confetti = document.createElement("div")
        confetti.className = "big-confetti"

        // Random position and animation
        confetti.style.left = `${Math.random() * screenWidth}px`
        confetti.style.top = `-${Math.random() * 100}px`
        confetti.style.backgroundColor = getRandomColor()
        confetti.style.animationDelay = `${Math.random() * 1}s`
        confetti.style.width = `${Math.random() * 12 + 8}px`
        confetti.style.height = `${Math.random() * 12 + 8}px`
        confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0"
        confetti.style.position = "fixed"

        document.body.appendChild(confetti)

        setTimeout(() => {
          if (document.body.contains(confetti)) {
            document.body.removeChild(confetti)
          }
        }, 4000)
      }
    }

    handleConfettiiUI()
    const confettiInterval = setInterval(() => handleConfettiiUI(), 1000)
    setTimeout(() => {
      clearInterval(confettiInterval)
    }, celebrationTime-2000)
  }

  const flashBackground = (celebrationTime) => {
    const container = document.querySelector('#thermometer-row')
    const originalBg = container.style.backgroundColor
    const flashInterval = setInterval(() => container.style.backgroundColor = getRandomBGColor(), 200)

    setTimeout(() => {
      clearInterval(flashInterval)
      container.style.backgroundColor = originalBg
    }, celebrationTime)
  }

  const showGIFs = (celebrationTime) => {
    const gifURLs = [
      "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
      "https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif",
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb24zdHNxMGkwb2wweDF6M2pyYnc0ZGxvZ3dhN3d2Zjh2enoybWd1byZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XTjnKcrZlOlaC6sY2d/giphy.gif", // fast and furios
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb24zdHNxMGkwb2wweDF6M2pyYnc0ZGxvZ3dhN3d2Zjh2enoybWd1byZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OJ1csu37BS3eg/giphy.gif", // dom torretto
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzd4eWEydm1yNHoyOWNvdmNkcGt6eW5ja292OG1rajAxeGFuMGd6MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/t3sZxY5zS5B0z5zMIz/giphy.gif", // kid hockey celebration
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzd4eWEydm1yNHoyOWNvdmNkcGt6eW5ja292OG1rajAxeGFuMGd6MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kyLYXonQYYfwYDIeZl/giphy.gif", // elmo
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzd4eWEydm1yNHoyOWNvdmNkcGt6eW5ja292OG1rajAxeGFuMGd6MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MTclfCr4tVgis/giphy.gif", // patrick and spongebob
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzd4eWEydm1yNHoyOWNvdmNkcGt6eW5ja292OG1rajAxeGFuMGd6MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1ofR3QioNy264/giphy.gif", // supa hot fire
      "https://media.giphy.com/media/Hd3GXtH7xs1CU/giphy.gif?cid=ecf05e47bolzn8uvv6hfu6nokn2ih0w8f0agctoeke3cqxtn&ep=v1_gifs_search&rid=giphy.gif&ct=g", // 80s dancer
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWY5cmcyanN4Mm13ajVjMHE4MHdqb2c0cmhsaW4zMmFwMXl5MTg2MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sQjajILgG31GRqgoMa/giphy.gif" // monkey
    ];

    const gifs = [];

    // calculate initial positions of gifs
    const totalGIFs = gifURLs.length;
    const padding = 50;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const gridCols = Math.ceil(Math.sqrt(totalGIFs));
    const gridRows = Math.ceil(totalGIFs / gridCols);
    const cellWidth = (screenWidth - 2 * padding) / gridCols;
    const cellHeight = (screenHeight - 2 * padding) / gridRows;
    let positions = [];
    for (let i = 0; i < totalGIFs; i++) {
      const col = i % gridCols;
      const row = Math.floor(i / gridCols);
      const jitterX = Math.random() * 40 - 20;
      const jitterY = Math.random() * 40 - 20;
      const x = padding + col * cellWidth + jitterX;
      const y = padding + row * cellHeight + jitterY;
      positions.push({ x, y });
    }
    positions = positions.sort(() => Math.random() - 0.5);

    // create dom objects
    for (let i = 0; i < gifURLs.length; i++) {
      const gif = document.createElement("img");
      gif.src = gifURLs[i % gifURLs.length];
      gif.style.position = "fixed";
      gif.style.maxWidth = "300px";
      gif.style.zIndex = 9999;
      gif.style.pointerEvents = "none";

      document.body.appendChild(gif);

      const pos = positions[i % positions.length];
      let x = pos.x;
      let y = pos.y;
      let dx = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 6 + 1);
      let dy = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 6 + 1);

      gif.style.left = `${x}px`;
      gif.style.top = `${y}px`;

      gifs.push({ gif, x, y, dx, dy });
    }

    // animate gifs
    const interval = setInterval(() => {
      gifs.forEach(obj => {
        obj.x += obj.dx;
        obj.y += obj.dy;

        if (obj.x <= 0 || obj.x + 100 >= window.innerWidth) obj.dx *= -1;
        if (obj.y <= 0 || obj.y + 100 >= window.innerHeight) obj.dy *= -1;

        obj.gif.style.left = `${obj.x}px`;
        obj.gif.style.top = `${obj.y}px`;
      });
    }, 16);

    // stop animation
    setTimeout(() => {
      clearInterval(interval);
      gifs.forEach(obj => obj.gif.remove());
    }, celebrationTime);
  };


  const getRandomColor = () => {
    const colors = ["#ff9533", "#e85d04", "#ffbf69", "#ff7b00", "#ffd166"]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  const getRandomBGColor = () => {
    const colors = ["#ff00ff", "#00ffff", "#39ff14", "#ff3131", "#ffff00", "#ff6ec7", "#7f00ff", "#00ffcc", "#ff1493", "#00ff00"];
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
