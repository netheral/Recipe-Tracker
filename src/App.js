import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

// App component that renders the main UI
function App() {
  // local state to hold the list of recipes
  const [recipes, setRecipes] = useState(RecipeData);  
  
  // function to create a new recipe
  const createNewRecipes = (newRecipes) => {
    // spread the new recipe into the existing list of recipes
    setRecipes([
      ...recipes, newRecipes
    ])
  }
  
  // function to delete a recipe
  const deleteRecipe = (del) => {
     const filter = 
           recipes.filter((recipe, index) => {
             return del !== index})
                 setRecipes(filter)    
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList  recipes={recipes}
        deleteRecipe={deleteRecipe}/>
        <td></td>
      <RecipeCreate 
        createNewRecipes={createNewRecipes}/>
      
    </div>
  );
}

export default App;
