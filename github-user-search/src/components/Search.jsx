import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setResults(data.items || []); // Search API stores users in 'items'
    } catch {
      setError(true);
    }finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="appearance-none block w-full bg-gray-100 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="appearance-none block w-full bg-gray-100 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full md:w-1/3 px-3">
            <input
              type="number"
              placeholder="Min Repositories"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              className="appearance-none block w-full bg-gray-100 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
          Search
        </button>
      </form>

      {/* Status Messages */}
      {loading && <p className="text-center text-blue-500">Loading...</p>}
      {error && <p className="text-center text-red-500">Looks like we cant find the user</p>}

      {/* Results Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((user) => (
          <div key={user.id} className="bg-white p-4 shadow rounded flex flex-col items-center">
            <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mb-3" />
            <h3 className="font-bold text-lg">{user.login}</h3>
            {/* Note: The Search API doesn't return full details (location, repo count) 
                directly in 'items'. Users usually link to the profile for this. */}
            <a 
              href={user.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 text-blue-500 hover:underline"
            >
              View Full Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;