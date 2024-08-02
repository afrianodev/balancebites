import CountMacros from "./components/CountMacros.jsx";
import Header from "./components/Header.jsx";
import Recipes from "./components/Recipes.jsx";
import { delay, motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 1,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: -50 },
  show: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut",
      delay: 0.5,
    }
  }
};

const childVariants2 = {
  hidden: { opacity: 0, x: -50 },
  show: { 
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut",
      delay: 0.6,
    }
  }
};

const childVariants3 = {
  hidden: { opacity: 0, x: 50 },
  show: { 
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut",
      delay: 0.7,
    }
  }
};

function App() {

  return (
    <motion.div variants={containerVariants} initial='hidden' animate='show' id="full-container" className="overflow-hidden">
      <motion.div variants={childVariants}>
        <Header />
      </motion.div>
      <motion.div variants={childVariants2}>
        <Recipes /> 
      </motion.div>
      <motion.div variants={childVariants3}>
        <CountMacros />
      </motion.div>
    </motion.div>
  );
}

export default App;

//create random recipes of healthy foods, later I can add smothies random, custom healthy food recipes, where people can 
//choose the protein and complements, by choosing them or getting any element random. later add a calories per day count
// and on base with that, how many carbs, protein and fat consume per day. a macro calculator