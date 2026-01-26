import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import RecipeDetailsWrapper from './components/RecipeDetailsWrapper';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ flex: 1 }}>
                <AddRecipeForm />
                <SearchBar />
                <RecipeList />
              </div>
              <div style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '10px' }}>
                <FavoritesList />
                <RecommendationsList />
              </div>
            </div>
          } />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;