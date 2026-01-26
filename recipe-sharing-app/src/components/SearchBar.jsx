import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <div style={{ margin: '20px 0' }}>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
    </div>
  );
};

export default SearchBar;