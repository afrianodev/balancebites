import avocadoToast from '../assets/recipesImages/avocado-egg-toast.png'
import lentilsSoup from '../assets/recipesImages/lentil-soup.png'
import tacosBeans from '../assets/recipesImages/beans-taco.png'
import veggieQuinoa from '../assets/recipesImages/veggie-quinoa.png'
import tunaSalad from '../assets/recipesImages/tuna-salad.png'


export const healthyRecipes = [
    {
        title: 'Avocado toast with Eggs',
        ingredients: 'Bread, ripe avocado, eggs, olive oil, salt, pepper, lemon juice, optional toppings (e.g., cherry tomatoes, red pepper flakes).',
        preparation: "Toast the bread and mash avocado with lemon juice, salt, and pepper. Spread on toast, top with a fried or poached egg, and season with additional toppings if desired.",
        image: avocadoToast,
    },
    {
        title: 'Tuna salad',
        ingredients: 'Canned tuna, mayonnaise, celery, red onion, Dijon mustard, lemon juice, salt, pepper, fresh herbs (e.g., parsley).',
        preparation: "Mix drained tuna with mayonnaise, chopped celery, red onion, mustard, lemon juice, and season with salt and pepper. Add fresh herbs if desired.",
        image: tunaSalad,
    },
    {
        title: 'Beans tacos',
        ingredients: 'Cooked black beans, olive oil, onion, garlic, ground cumin, smoked paprika, chili powder, salt, pepper, tortillas, shredded lettuce, diced tomatoes, shredded cheese, sour cream, fresh cilantro, lime wedges.',
        preparation: "Sauté onion and garlic, then add spices and beans with broth. Heat through. Serve in warmed tortillas with toppings and lime.",
        image: tacosBeans,
    },
    {
        title: 'Lentils soup',
        ingredients: 'Lentils, olive oil, onion, garlic, carrots, celery, vegetable or chicken broth, diced tomatoes, ground cumin, paprika, bay leaf, salt, pepper.',
        preparation: "Sauté onion, garlic, carrots, and celery in olive oil. Add lentils, broth, tomatoes, spices, and bay leaf. Simmer until lentils are tender.",
        image: lentilsSoup,
    },
    {
        title: 'Veggie quinoa',
        ingredients: 'Quinoa, olive oil, bell peppers, zucchini, cherry tomatoes, onion, garlic, vegetable broth, lemon juice, salt, pepper, fresh herbs (e.g., parsley).',
        preparation: "Sauté onion and garlic in olive oil, add chopped vegetables and cook until tender. Stir in cooked quinoa, broth, lemon juice, and season with salt, pepper, and herbs.",
        image: veggieQuinoa,
    }
]