import axios from 'axios';

/**
 * Fetches users using GitHub's Search API with multiple parameters
 */
export const fetchUserData = async (username, location, minRepos) => {
  // Construct the query string
  let query = '';
  if (username) query += `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data; // Note: Search API returns an object with an 'items' array
};