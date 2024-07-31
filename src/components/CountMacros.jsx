import { useState } from "react"

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

        let bmr;

        if(num1 === '' || num2 === '' || num1 < 0 || num2 < 0 || age < 0 || age === '') {
            bmr = 'Por favor, escribe un numero valido.'
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

        
        setResult(<>
            <h3>Your results:</h3>
            <p>Your estimated caloric needs are approximately {totalCalories} calories per day</p>
            <h4>Protein:</h4>
            <p>{proteins} grams.</p>
            <h4>Carbohydrates:</h4>
            <p>{carbs} grams.</p>
            <h4>Fats:</h4>
            <p>{fats} grams.</p>
        </>
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
        <div className="count-macros">
            <h2>Count your <span>Macros</span></h2>

            {result===null ? <div className="inputs-container">
                <label htmlFor="option">Your gender: </label>
                <select id="option" value={gender} onChange={handleGender}>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                </select>
                
                <label>Your age: </label>
                <input type="number"
                value={age}
                onChange={handleAge}
                placeholder="Enter your age"></input>

                <label htmlFor="option">Your activity level: </label>
                <select id="option" value={activityLevel} onChange={handleActivityLevel}>
                    <option value="1">Sedentary (little or no exercise)</option>
                    <option value="2">Lightly active (light exercise 1-3 days/week)</option>
                    <option value="3">Moderately active (moderate exercise 3-5 days/week)</option>
                    <option value="4">Very active (hard exercise 6-7 days a week)</option>
                    <option value="5">Super active (very hard exercise 2x/day)</option>
                </select>

                <label>Your weight in Kg: </label>
                <input type="number"
                value={num1}
                onChange={handleNum1Change}
                placeholder="Enter your weight"></input>

                <label>Your Height in cm: </label>
                <input type="number"
                value={num2}
                onChange={handleNum2Change}
                placeholder="Enter your height"></input>

                <button onClick={handleResult}>Calculate</button>
            </div> : <div>{result}<button onClick={handleBack}>Calculate Again</button></div>}

            {/* <h3>Your results:</h3>
            <p>Your estimated caloric needs are approximately 2550 calories per day</p>
            <h4>Protein:</h4>
            <p>150 grams.</p>
            <h4>Carbohydrates:</h4>
            <p>350 grams.</p>
            <h4>Fats:</h4>
            <p>50 grams.</p> */}

        </div>
    )
}