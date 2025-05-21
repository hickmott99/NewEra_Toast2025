import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


function AdminPage({ goals, setGoals }) {
  const handleDollarsChange = (e) => {
    const newDollars = Number(e.target.value)
    setGoals((prevGoals) => ({
      ...prevGoals,
      dollars: newDollars,
    }))
  }

  const handleVolunteersChange = (e) => {
    const newVolunteers = Number(e.target.value)
    setGoals((prevGoals) => ({
      ...prevGoals,
      volunteers: newVolunteers,
    }))
  }

  return (
    <>
        {/* <nav>
            <Link to="/">Home</Link> | <Link to="/admin">Admin</Link>
        </nav> */}
        <div className="admin-page">
            <h2>Admin Panel: Set Thermometer Goals</h2>
            <form>
                <div>
                    <label>Dollars Raised Goal: </label>
                    <input
                        type="number"
                        value={goals.dollars}
                        onChange={handleDollarsChange}
                    />
                </div>
                <div>
                    <label>Number of Volunteers Goal: </label>
                    <input
                        type="number"
                        value={goals.volunteers}
                        onChange={handleVolunteersChange}
                    />
                </div>
            </form>
        </div>
    
    </>
  )
}

export default AdminPage
