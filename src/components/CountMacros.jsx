import { useState } from "react"
import { motion } from "framer-motion";

export default function CountMacros() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [age, setAge] = useState('');
    const [activityLevel, setActivityLevel] = useState('1')
    const [gender, setGender] = useState('1')
    const [result, setResult] = useState(null);

    const handleNum1Change = (e) => {
        setNum1(e.target.value);
      };
    
    const handleNum2Change = (e) => {
        setNum2(e.target.value);
    };

    const handleAge = (e) => {
        setAge(e.target.value)
    }

    const handleGender = (e) => {
        setGender(e.target.value)
    }

    const handleActivityLevel = (e) => {
        setActivityLevel(e.target.value)
    }

    const handleResult = () => {

        if (num1 === '' || num2 === '' || age === '' || num1 <= 0 || num2 <= 0 || age <= 0) {
            setResult(
                <div className="flex my-9">
                    <p>Please set valid numbers.</p>
                </div>
            );
            return;
        }

        let bmr;

        if(num1 === '' || num2 === '' || num1 < 0 || num2 < 0 || age < 0 || age === '') {
            bmr = 'Please enter a valid number.'
        } else if(gender === '1') {
            bmr = 88.362+(13.397*num1)+(4.799*num2)-(5.677*age)
        } else if(gender==='2') {
            bmr = 447.593+(9.247*num1)+(3.098*num2)-(4.330*age)
        }

        let totalCalories;

        if(activityLevel==='1') {
            totalCalories = bmr * 1.2;
        } else if(activityLevel==='2') {
            totalCalories = bmr * 1.375;
        } else if(activityLevel==='3') {
            totalCalories = bmr * 1.55;
        } else if(activityLevel==='4') {
            totalCalories = bmr * 1.725;
        } else {
            totalCalories = bmr * 1.9;
        }

        let proteins = ((totalCalories*30)/100)/4;
        let carbs = ((totalCalories*40)/100)/4;
        let fats = ((totalCalories*30)/100)/9;

        //Put here an extra feature, with 3 buttons, that show you, a normal diet, a fat loss diet and a gain diet.
        setResult(<div className='flex flex-col gap-2'>
            <h3 className="text-lg sm:text-base font-semibold mt-2">Your results:</h3>
            <p>Your estimated caloric needs are approximately {totalCalories.toFixed(2)} calories per day</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
                <div className="flex">
                <h4>Protein: </h4>
                <p>{proteins.toFixed(1)} grams.</p>
                </div>
                <div className="flex">
                <h4>Carbohydrates: </h4>
                <p>{carbs.toFixed(1)} grams.</p>
                </div>
                <div className="flex">
                <h4>Fats: </h4>
                <p>{fats.toFixed(1)} grams.</p>
                </div>
            </div>
        </div>
        );
        setNum1('');
        setNum2('');
        setAge('');
        setGender('1');
        setActivityLevel('1');
    }

    const handleBack = () => {
        setResult(null)
    }

    return (
        <motion.div className="count-macros w-[85vw] sm:w-[60vw] mt-4 sm:mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold">Count your <span>Macros</span></h2>

            {result===null ? <div className="mt-2 flex flex-col">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
                    <div className="flex gap-2">
                    <label htmlFor="option" className="text-sm sm:text-base">Your gender: </label>
                    <select id="option" value={gender} onChange={handleGender} className="border border-black h-6 rounded-sm text-sm sm:text-base">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                    </div>
                    <div className="flex gap-2">
                    <label className="text-sm sm:text-base">Your age: </label>
                    <input type="number"
                    value={age}
                    onChange={handleAge}
                    placeholder="Enter your age" className="border border-black p-2 h-6 rounded-sm w-28 text-sm sm:text-base" required></input>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-0 sm:gap-2 mt-1 sm:mt-2">
                <label htmlFor="option" className="text-sm sm:text-base">Your activity level: </label>
                <select id="option" value={activityLevel} onChange={handleActivityLevel} className="border border-black h-6 rounded-sm text-sm sm:text-base">
                    <option value="1">Sedentary (little or no exercise)</option>
                    <option value="2">Lightly active (light exercise 1-3 days/week)</option>
                    <option value="3">Moderately active (moderate exercise 3-5 days/week)</option>
                    <option value="4">Very active (hard exercise 6-7 days a week)</option>
                    <option value="5">Super active (very hard exercise 2x/day)</option>
                </select>
                </div>

                <div className="mt-2 flex flex-col sm:flex-row gap-2 sm:gap-6">
                    <div>
                    <label className="text-sm sm:text-base">Your weight in Kg: </label>
                    <input type="number"
                    value={num1}
                    onChange={handleNum1Change}
                    placeholder="Enter your weight" className="border border-black p-2 h-6 rounded-sm w-32 text-sm sm:text-base" required></input>
                    </div>

                    <div>
                    <label className="text-sm sm:text-base">Your Height in cm: </label>
                    <input type="number"
                    value={num2}
                    onChange={handleNum2Change}
                    placeholder="Enter your height" className="border border-black p-2 h-6 rounded-sm w-32 text-sm sm:text-base" required></input>
                    </div>
                </div>

                <button onClick={handleResult} className="w-32 h-8 mt-2 rounded-md">Calculate</button>
            </div> : <div>{result}<button onClick={handleBack} className="w-32 h-8 mt-2 rounded-md">Calculate Again</button></div>}

            {/* <h3>Your results:</h3>
            <p>Your estimated caloric needs are approximately 2550 calories per day</p>
            <h4>Protein:</h4>
            <p>150 grams.</p>
            <h4>Carbohydrates:</h4>
            <p>350 grams.</p>
            <h4>Fats:</h4>
            <p>50 grams.</p> */}

        </motion.div>
    )
}