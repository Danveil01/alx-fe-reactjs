import { create } from 'zustand';

 const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  favorites: [],
  recommendations: [],

  // Add a recipe to favorites
  addFavorite: (recipeId) => set((state) => ({ 
    favorites: [...state.favorites, recipeId] 
  })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId)
  })),

  // Mock implementation for recommendations
  generateRecommendations: () => set((state) => {
    // Logic: Suggest recipes that are NOT in favorites but match a simple random filter
    const recommended = state.recipes.filter(recipe =>
      !state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    // Trigger filtering every time the search term is updated
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    }));
  },
  filteredRecipes: [],
  addRecipe: (newRecipe) => set((state) => {
    const updatedRecipes = [...state.recipes, newRecipe];
    return { 
      recipes: updatedRecipes,
      // Ensure the search also applies to the newly added recipe
      filteredRecipes: updatedRecipes.filter(recipe => 
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),
  deleteRecipe: (recipeId) => set((state) => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== recipeId);
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe => 
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),
  updateRecipe: (updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe => 
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),
  // This helps re-trigger filtering if needed manually
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
}));

export default useRecipeStore;