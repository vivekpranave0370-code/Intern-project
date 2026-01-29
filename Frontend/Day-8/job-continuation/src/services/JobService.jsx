import { BASE_URL } from "../constants/api";

export const fetchJobs = async () => {
  const response = await fetch(`${BASE_URL}/users`);

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return response.json();
};