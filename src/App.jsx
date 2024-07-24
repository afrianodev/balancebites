import Header from "./components/Header.jsx";
import Recipes from "./components/Recipes.jsx";

function App() {

  return (
    <div id="full-container">
      <Header />
      <Recipes />
    </div>
  );
}

export default App;

//create random recipes of healthy foods, later I can add smothies random, custom healthy food recipes, where people can 
//choose the protein and complements, by choosing them or getting any element random. later add a calories per day count
// and on base with that, how many carbs, protein and fat consume per day. a macro calculator