import { healthyRecipes } from "./recipesData"
import { useState } from "react";
import { motion } from "framer-motion";

export default function Recipes() {
  const getRandomIndex = () => Math.floor(Math.random() * healthyRecipes.length);
  
  const [recipeIndex, setRecipeIndex] = useState(getRandomIndex());

  return (
      <motion.section id='random-recipes' className="mx-auto w-[60vw] h-[45vh]">
        <p className="select-none cursor-pointer mt-1" onClick={() => setRecipeIndex(getRandomIndex())} >Click for another random recipe.</p>
        <div className="recipes-container">
          <div className="top-recipes">
            <img src={healthyRecipes[recipeIndex].image} alt={healthyRecipes[recipeIndex].title}/>
            <div className="top-right">
              <h2 className="text-2xl font-semibold">{healthyRecipes[recipeIndex].title}</h2>
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
      </motion.section>
  )
}