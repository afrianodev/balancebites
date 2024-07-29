import { healthyRecipes } from "./recipesData"
import { useState } from "react";

export default function Recipes() {
  const getRandomIndex = () => Math.floor(Math.random() * healthyRecipes.length);
  
  const [recipeIndex, setRecipeIndex] = useState(getRandomIndex());

  return (
      <section id='random-recipes'>
        <p className="click-for-random" onClick={() => setRecipeIndex(getRandomIndex())} >Click for another random recipe.</p>
        <div className="recipes-container">
          <div className="top-recipes">
            <img src={healthyRecipes[recipeIndex].image} alt={healthyRecipes[recipeIndex].title}/>
            <div className="top-right">
              <h2>{healthyRecipes[recipeIndex].title}</h2>
              <div className="ingredients">
                <h3>Ingredients</h3>
                <p>{healthyRecipes[recipeIndex].ingredients}</p>  
              </div>
              <div className="preparation">
                <h3>Preparation</h3>
                <p>{healthyRecipes[recipeIndex].preparation}</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
  )
}