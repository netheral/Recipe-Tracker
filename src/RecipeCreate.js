import React, { useState } from "react";



// RecipeCreate component that receives createNewRecipes function as a prop
function RecipeCreate({createNewRecipes}) {
 
  // local state to hold the recipe data
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  // function to handle form submission
  const handleSubmit = (e) =>{
    e.preventDefault();
    
   // create new recipe object from the local state 
  const newRecipe = {name, cuisine, photo, rating, ingredients, preparation};
    // invoke the createNewRecipes function and pass the new recipe object
    createNewRecipes(newRecipe);
    // clear the local state
    setName('');
    setCuisine('');
    setPhoto('');
    setRating('');
    setIngredients('');
    setPreparation('');
    };
    

 return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input type="text" name="name"
                value={name}
                onChange={e => setName(e.target.value)} 
                placeholder="Name" />
            </td>
            <td>  
            <input type="text" name="cuisine"
              value={cuisine}
              onChange={e => setCuisine(e.target.value)} 
              placeholder="Cuisine" />
            </td>
            <td>
              <input type="text" name="photo"
                value={photo}
                onChange={e => setPhoto(e.target.value)} 
                placeholder="Photo URL"/>
            </td>
            <td>
              <select value={rating} name='rating'
                onChange={e => setRating(e.target.value)}
                >
                <option value='N/A'>Select a Rating</option>
                <option value="☆">☆</option>
                <option value="☆☆">☆☆</option>
                <option value="☆☆☆">☆☆☆</option>
                <option value="☆☆☆☆">☆☆☆☆</option>
                <option value="☆☆☆☆☆">☆☆☆☆☆</option>
              </select>
            </td>
            <td>
              <textarea name="ingredients"
                value={ingredients}
                onChange={e => setIngredients(e.target.value)}
                placeholder="Ingredients" />
            </td>
            <td>
              <textarea name="preparation"
                value={preparation}
                onChange={e => setPreparation(e.target.value)}
                placeholder="Preparation" />
            </td>
           <td>
             <button type="submit">Create</button> 
            </td>
          </tr>
        </tbody>        
      </table>
    </form>
  );
}

export default RecipeCreate;
