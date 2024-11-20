import { healthyRecipes } from "./recipesData";
import { useState } from "react";
import { delay, motion } from "framer-motion";
import axios from 'axios';

export default function Calories() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    if (!query) {
      alert("Please type something!");
      return;
    }
    axios.get('https://api.calorieninjas.com/v1/nutrition', {
      params: { query }, // Passing the query as a parameter
      headers: {
          'X-Api-Key': '+zw0Mia8661TS01cS6CYzA==sx0W6Gx65FhlulYt'
      }
  })
  .then(response => {
      setResult(response.data)
      console.log(response.data); // Log the API response data
  })
  .catch(error => {
      console.error('Error:', error.response ? error.response.data : error.message);
  });

  setQuery('')

  }

const handleInputChange = (e) => {
  setQuery(e.target.value); // Update the query data
  console.log(e.target.value);
};

const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    handleSearch(); // Llama a la función de búsqueda si se presiona Enter
  }
};

  return (
    <section id='random-recipes' className="mx-auto w-[92vw] sm:w-[60vw] h-[45vh] sm:h-[auto] pt-2 overflow-hidden select-none shadow-md count-macros">
      <h2 className="text-xl sm:text-2xl font-semibold">Search <span>macros and calories</span> of any food</h2>
      <div className="flex justify-center relative mx-auto w-[80%] mt-4 mb-2">
        <input type="text" onChange={handleInputChange} onKeyDown={handleKeyDown} value={query} placeholder="Type the food name" className="w-[300px] border border-gray-400 rounded-[10px] pl-2" />
        <button onClick={handleSearch} className="px-2 py-1 rounded-[10px] ml-2 w-[150px]">Search food</button>
      </div>
      <div>
        {result && result.items.map((item, index) => (
          <p key={index}>Every {item.serving_size_g}g of {item.name} has {item.calories} calories. <br></br>{item.protein_g}g of protein, {item.fat_total_g}g of total fat and {item.carbohydrates_total_g}g of carbs.</p>
        ))}
      </div>
    </section>
  );
}
