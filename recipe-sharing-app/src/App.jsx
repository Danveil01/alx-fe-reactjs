import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetailsWrapper from './components/RecipeDetailsWrapper'; // Helper to get ID from URL

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <hr />
              <RecipeList />
            </>
          } />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;