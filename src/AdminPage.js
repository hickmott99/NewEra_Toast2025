"use client"

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
      <div className="admin-page">
        <h2>Admin Panel: Set Thermometer Goals</h2>
        <form>
          <div>
            <label>Dollars Raised Goal: </label>
            <input type="number" value={goals.dollars} onChange={handleDollarsChange} />
          </div>
          <div>
            <label>Number of Volunteers Goal: </label>
            <input type="number" value={goals.volunteers} onChange={handleVolunteersChange} />
          </div>
        </form>
      </div>
    </>
  )
}

export default AdminPage


// function AdminPage({ goals, setGoals }) {
//   const handleDollarsChange = (e) => {
//     const newDollars = Number(e.target.value)
//     setGoals((prevGoals) => ({
//       ...prevGoals,
//       dollars: newDollars,
//     }))
//   }

//   const handleVolunteersChange = (e) => {
//     const newVolunteers = Number(e.target.value)
//     setGoals((prevGoals) => ({
//       ...prevGoals,
//       volunteers: newVolunteers,
//     }))
//   }

//   return (
//     <>
//         <div className="admin-page">
//             <h2>Admin Panel: Set Thermometer Goals</h2>
//             <form>
//                 <div>
//                     <label>Dollars Raised Goal: </label>
//                     <input
//                         type="number"
//                         value={goals.dollars}
//                         onChange={handleDollarsChange}
//                     />
//                 </div>
//                 <div>
//                     <label>Number of Volunteers Goal: </label>
//                     <input
//                         type="number"
//                         value={goals.volunteers}
//                         onChange={handleVolunteersChange}
//                     />
//                 </div>
//             </form>
//         </div>
    
//     </>
//   )
// }

// export default AdminPage
