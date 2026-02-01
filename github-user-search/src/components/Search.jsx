import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setResults(data.items || []);
    } catch { // 'err' removed to fix ESLint no-unused-vars
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Min Repos"
            onChange={(e) => setMinRepos(e.target.value)}
            className="border p-2 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">Looks like we cant find the user</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {results.map((user) => (
          <div key={user.id} className="border p-4 rounded flex items-center gap-4 shadow-sm">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="font-bold text-blue-600">{user.login}</h3>
              <a href={user.html_url} target="_blank" rel="noreferrer" className="text-sm underline">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;