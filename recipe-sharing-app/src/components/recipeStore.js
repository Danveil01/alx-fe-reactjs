import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  // Action to add a new recipe to the list
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  // Action to initialize or update the entire recipes list
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };