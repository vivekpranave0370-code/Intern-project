import { useEffect, useState } from "react";
import { fetchJobs } from "../services/JobService";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadJobs = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchJobs();
      setJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();

    const interval = setInterval(loadJobs, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Job List</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading &&
        !error &&
        jobs.map((job) => (
          <div key={job.id}>
            <h4>{job.name}</h4>
            <p>{job.email}</p>
          </div>
        ))}
    </div>
  );
};

export default JobList;