import { healthyRecipes } from "./recipesData"
import avocadoToast from '../assets/recipesImages/avocado-egg-toast.png'

export default function Recipes() {
    return (
        <section id='random-recipes'>
          <p className="click-for-random">Click for another random recipe.</p>
          <div className="recipes-container">
            <div className="top-recipes">
              <img src={avocadoToast} alt={healthyRecipes[0].title}/>
              <div className="top-right">
                <h2>{healthyRecipes[0].title}</h2>
                <div className="ingredients">
                  <h3>Ingredients</h3>
                  <p>{healthyRecipes[0].ingredients}</p>  
                </div>
                <div className="preparation">
                  <h3>Preparation</h3>
                  <p>{healthyRecipes[0].preparation}</p>
                </div>
              </div>
            </div>
            
          </div>
        </section>
    )
}