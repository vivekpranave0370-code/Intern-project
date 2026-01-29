


 const detail=[{
    JobTitle:"Mern",
    Experience:2,
    Salary:25000,
    TotalApplicants:10

},
{
    JobTitle:"React",
    Experience:1,
    Salary:20000,
    TotalApplicants:10

},
{
    JobTitle:"Python",
    Experience:3,
    Salary:50000,
    TotalApplicants:5
}
]

const Job= detail.filter((Job)=> Job.Salary>20000) 

console.log(Job)

const experience= detail.sort((a, b) => a.Experience - b.Experience);
console.log(experience);

const title= detail.map((title) => title.JobTitle );
console.log(title);

const salary=detail.reduce((total,money)=> total + money.Salary,0);
console.log(salary)


const count=detail.reduce(( total,applied)=> total + applied.TotalApplicants,0)
console.log(count)