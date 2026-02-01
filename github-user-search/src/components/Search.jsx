import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch { 
      // Removed 'err' to satisfy ESLint since we only need to trigger the state
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>Search</button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}
      
      {error && <p>Looks like we cant find the user</p>}

      {userData && (
        <div style={{ marginTop: '20px', textAlign: 'center', border: '1px solid #ddd', padding: '20px' }}>
          <img 
            src={userData.avatar_url} 
            alt={userData.name || 'User Avatar'} 
            style={{ width: '150px', borderRadius: '50%' }} 
          />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;