import { useEffect, useState } from "react";
import "./JobList.css";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }

      const data = await response.json();
      setJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();

    const interval = setInterval(() => {
      fetchJobs(); // auto refresh
    }, 10000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="job-list-container">
      <h2 className="job-heading">Job List</h2>

      {loading && <p>Loading jobs...</p>}

      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="jobs-container">
          {jobs.map((job) => (
            <div key={job.id} className="job-item">
              <h3>{job.name}</h3>
              <p>Email: {job.email}</p>
              <p>Company: {job.company.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;