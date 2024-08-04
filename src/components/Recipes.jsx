import { healthyRecipes } from "./recipesData";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Recipes() {
  const getRandomIndex = () => Math.floor(Math.random() * healthyRecipes.length);

  const [recipeIndex, setRecipeIndex] = useState(getRandomIndex());
  const [rotateKey, setRotateKey] = useState(0);

  const handleClick = () => {
    setRotateKey(prevKey => prevKey); 
    setRecipeIndex(getRandomIndex());
  };

  return (
    <motion.section id='random-recipes' className="mx-auto w-[92vw] sm:w-[60vw] sm:h-[45vh] overflow-hidden">
      <p className="text-xs sm:text-base select-none cursor-pointer mt-1" onClick={handleClick}>
        Click for another random recipe.
      </p>
      <div className="recipes-container flex sm:flex-col">
        <motion.div
          key={recipeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-around">
            <div className="top-right">
              <h2 className="text-xl sm:text-2xl font-semibold">{healthyRecipes[recipeIndex].title}</h2>
              <div className="ingredients">
                <h3 className="font-semibold text-sm sm:text-base">Ingredients</h3>
                <p className="w-[98%] sm:w-[85%] text-xs sm:text-base">{healthyRecipes[recipeIndex].ingredients}</p>
              </div>
              <div className="preparation mt-1 sm:mt-0">
                <h3 className="font-semibold text-sm sm:text-base">Preparation</h3>
                <p className="w-[98%] sm:w-[85%] text-xs sm:text-base">{healthyRecipes[recipeIndex].preparation}</p>
              </div>
            </div>
            <motion.img
              src={healthyRecipes[recipeIndex].image}
              alt={healthyRecipes[recipeIndex].title}
              className="mr-[1%] w-[15%]"
              key={rotateKey}
              initial={{ opacity: 0, x: 250 }}
              animate={{ rotate: -90, opacity: 1, x: 0  }}
              exit={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
