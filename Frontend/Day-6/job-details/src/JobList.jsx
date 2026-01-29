import React from 'react'
import JobCard from './JobCard'


const job=[{
  id:1,
    title:"Frontend developer",
    company:"Ibis",
    experience:"2 years",
    salary:"5 lpa"
},
{
    id:2,
    title:"Backend developer",
    company:"Zecpath",
    experience:"3 years",
    salary:"4 lpa"
}

]

function JobList() {
  return (
    <div className="job-list">
        <h2>Job Openings</h2>
        {job.map((job)=> (
            
      

   <JobCard
   key={job.id}
     title={job.title}
        company={job.company}
        experience={job.experience}
        salary={job.salary}
   
   />
           ))}

    </div>
  )
}

export default JobList