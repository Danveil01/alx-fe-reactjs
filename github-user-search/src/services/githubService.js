import axios from 'axios';

/**
 * Fetches specific user data from GitHub API
 * @param {string} username - The GitHub username to search for
 */
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};