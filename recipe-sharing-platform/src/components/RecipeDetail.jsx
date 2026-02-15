import { useParams } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();

  // derive recipe synchronously to avoid setting state inside an effect
  const recipe = recipeData.find(r => r.id === Number(id));

  if (!recipe) return <div className="text-center mt-10">Recipe not found.</div>;

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-md mb-6" />
        <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-lg text-gray-700 mb-6">{recipe.summary}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-gray-50 p-4 rounded shadow-inner">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              <li>Ingredient 3</li>
            </ul>
          </section>
          <section className="bg-gray-50 p-4 rounded shadow-inner">
            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            <p className="leading-relaxed">Step-by-step cooking steps would go here...</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;