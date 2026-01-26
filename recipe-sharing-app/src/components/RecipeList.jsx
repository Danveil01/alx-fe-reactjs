import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  // Pull both the original and filtered lists
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);

  // If there is a search term, use filtered; otherwise, use all
  const displayRecipes = searchTerm.trim() ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipes</h2>
      {displayRecipes.length === 0 ? <p>No recipes found.</p> : null}
      {displayRecipes.map(recipe => (
        <div key={recipe.id} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;