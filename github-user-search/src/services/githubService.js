import axios from 'axios';

// The search endpoint is more powerful for a "Search App"
const GITHUB_SEARCH_URL = "https://api.github.com/search/users";

export const fetchUserData = async (query) => {
    // This will search for users matching the query
    const response = await axios.get(`${GITHUB_SEARCH_URL}?q=${query}`);
    return response.data; // This returns an object containing an 'items' array
};