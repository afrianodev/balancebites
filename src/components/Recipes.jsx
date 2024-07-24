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
                <h3>Ingredients</h3>
                <ul>
                  <li>{healthyRecipes[0].ingredients[0]}</li>
                  <li>{healthyRecipes[0].ingredients[1]}</li>
                  <li>{healthyRecipes[0].ingredients[2]}</li>
                  <li>{healthyRecipes[0].ingredients[3]}</li>
                </ul>
              </div>
            </div>
            <h3>Preparation</h3>
            <ul>
              <li>{healthyRecipes[0].preparation[0]}</li>
              <li>{healthyRecipes[0].preparation[1]}</li>
              <li>{healthyRecipes[0].preparation[2]}</li>
              <li>{healthyRecipes[0].preparation[3]}</li>
            </ul>
          </div>
        </section>
    )
}