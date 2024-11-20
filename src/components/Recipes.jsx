import { healthyRecipes } from "./recipesData";
import { useState } from "react";
import { delay, motion } from "framer-motion";

export default function Recipes() {
  const getRandomIndex = () => Math.floor(Math.random() * healthyRecipes.length);
  const [recipeIndex, setRecipeIndex] = useState(getRandomIndex());
  const [isChanging, setIsChanging] = useState(false);

  const imgVariants = {
    enter: {
      x: 280,
      rotate: 120,
      transition: { duration: 0.3, ease: 'linear'},
    },
    exit: {
      x: 0,
      rotate: 0,
      transition: {duration: 0.5, ease: 'linear'},
    },
  };

  const leftOut = {
    collapsed: {
      height: 0, // Collapse the height
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    expanded: {
      height: 'auto', // Expand to the full content height
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const handleClick = () => {
    setIsChanging(true);
    console.log("Just clicked...");
    
    setTimeout(() => {
      console.log("Timeout finished. Changing recipe...");
      setRecipeIndex(getRandomIndex());
      setIsChanging(false);
    }, 1500)
  };


  return (
    <motion.section id='random-recipes' className="mx-auto w-[92vw] sm:w-[60vw] sm:h-[45vh] overflow-hidden cursor-pointer select-none shadow-md mt-6 sm:mt-10" onClick={handleClick}>
      <p className="text-xs sm:text-base mt-1">
        Click for another inspiration recipe.
      </p>
      <div className="recipes-container flex sm:flex-col relative">
        <motion.div
          key={recipeIndex}
        >
          <div className="flex flex-col sm:flex-row items-center justify-around">
            <motion.div 
              initial={isChanging? {opacity: 1} : {opacity: 0}}
              animate={isChanging? {opacity: 0} : {opacity: 1}}
              transition={{duration: 1}}
              className="top-right">
              <h2 className="text-xl sm:text-2xl font-semibold">{healthyRecipes[recipeIndex].title}</h2>
              <div className="ingredients">
                <h3 className="font-semibold text-sm sm:text-base">Ingredients</h3>
                <p className="w-[98%] sm:w-[85%] text-xs sm:text-base">{healthyRecipes[recipeIndex].ingredients}</p>
              </div>
              <div className="preparation mt-1 sm:mt-0">
                <h3 className="font-semibold text-sm sm:text-base">Preparation</h3>
                <p className="w-[98%] sm:w-[85%] text-xs sm:text-base">{healthyRecipes[recipeIndex].preparation}</p>
              </div>
            </motion.div>
            <motion.img
              src={healthyRecipes[recipeIndex].image}
              alt={healthyRecipes[recipeIndex].title}
              className="mr-[1%] w-[15%]"
              key={recipeIndex}
              variants={imgVariants}
              initial={isChanging?'exit':'enter'}
              animate={isChanging?'enter':'exit'}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
