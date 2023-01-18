import React from "react";
import RecipeView from "./RecipeView.js";

// RecipeList component that renders the list of recipes
function RecipeList({ recipes, deleteRecipe }) {
  
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Rating</th>
            <th>Ingredients</th>
            <th>Preperation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
           {recipes.map((recipe, index) => (
        <RecipeView
          /* pass the deleteRecipe function and
          the current recipe index as props */
          deleteRecipe={() => deleteRecipe(index)}
          index={index}
          key={index}
          recipe={recipe}/>
      ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
