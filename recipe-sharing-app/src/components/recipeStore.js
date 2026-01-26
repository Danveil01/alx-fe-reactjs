import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  // Action to add a new recipe to the list
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),

  // Step 1: Add Delete Action
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),
  // Step 1: Add Update Action
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),

  // Action to initialize or update the entire recipes list
  setRecipes: (recipes) => set({ recipes }),
}));



export { useRecipeStore };