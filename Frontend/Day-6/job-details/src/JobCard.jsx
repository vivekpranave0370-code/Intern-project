import React from 'react'
import './JobCard.css'

function JobCard({title,company,experience,salary}) {
  return (
    <div className="job-card">
  <h3> {title}</h3>
 <p>Comapny : {company}</p>
 <p>Experience :{experience}</p>
 <p>Salary :{salary}</p>
 <button>Apply</button>





    </div>
  )
}

export default JobCard