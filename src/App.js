import './App.css';
import React, { useState } from "react";
import DietForm from './components/DietForm';

export default function BMICalculator() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [heightFeet, setHeightFeet] = useState(5);
  const [heightInches, setHeightInches] = useState(7);
  const [heightUnit, setHeightUnit] = useState("metric");
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState(1.2);
  const [bmi, setBmi] = useState(null);
  const [tdee, setTdee] = useState(null);
  const [idealWeight, setIdealWeight] = useState(null);
  const [bmiCategory, setBmiCategory] = useState(null);
  const [minWeight, setMinWeight] = useState(null);
  const [maxWeight, setMaxWeight] = useState(null);
  const [bmiColor, setBmiColor] = useState("primary");
  const [protein, setProtein] = useState(null);
  const [fats, setFats] = useState(null);
  const [carbs, setCarbs] = useState(null);
  const [text, setText] = useState(null);

  const calculateAll = () => {
    let heightInCM = heightUnit === "metric" ? height : (heightFeet * 30.48) + (heightInches * 2.54);
    const heightInMeters = heightInCM / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));

    let category = "";
    let color = "dark";
    if (bmiValue < 18.5) {
      category = "Underweight";
      color = "warning";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      category = "Normal Weight";
      color = "success";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      category = "Overweight";
      color = "warning";
    } else {
      category = "Obese";
      color = "danger";
    }
    setBmiCategory(category);
    setBmiColor(color);

    let bmr;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * heightInCM - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * heightInCM - 5 * age - 161;
    }
    let tdeeValue = Math.ceil(bmr * activityLevel);
    setTdee(Math.ceil(tdeeValue));

    if (category === "Underweight") {
      setText(`These macronutrient values reflect your bulking calories of ${tdeeValue + 500} calories per day.`);
      tdeeValue += 500;
    } else if (category === "Overweight" || category === "Obese") {
      setText(`These macronutrient values reflect your cutting calories of ${tdeeValue - 500} calories per day.`);
      tdeeValue -= 500;
    } else {
      setText(`These macronutrient values reflect your maintenance calories of ${tdeeValue} calories per day.`);
    }

    setProtein(Math.ceil((0.3 * tdeeValue) / 4));
    setFats(Math.ceil((0.35 * tdeeValue) / 9));
    setCarbs(Math.ceil((0.35 * tdeeValue) / 4));

    let ideal;
    if (gender === "male") {
      ideal = 50 + 0.91 * (heightInCM - 152.4);
    } else {
      ideal = 45.5 + 0.91 * (heightInCM - 152.4);
    }
    setIdealWeight(ideal.toFixed(2));

    const minW = (Math.ceil(22.2 * heightInMeters * heightInMeters));
    const maxW = (Math.ceil(23 * heightInMeters * heightInMeters));
    setMinWeight(minW);
    setMaxWeight(maxW);
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">BMI, TDEE & Macronutrient Calculator</h2>
        <div className='d-flex justify-content-center'>
          <div className="mb-3 d-flex" >
            <label className="form-label" style={{ fontSize: "25px" }} >Weight(kg):</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="form-control" style={{ width: "100px", marginLeft: "10px", height: "47px" }} />
          </div>

          <div className="mb-3 d-flex" >
            <label className="form-label" style={{ marginLeft: "20px", fontSize: "25px" }}>Height:</label>
            <select value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)} className="form-select mb-2" style={{ width: "200px", marginLeft: "10px" }}>
              <option value="metric">Metric (cm)</option>
              <option value="imperial">Imperial (ft, in)</option>
            </select>

            {heightUnit === "metric" ? (
              <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="form-control" style={{ width: "100px", marginLeft: "10px", height: "47px" }} />
            ) : (
              <div className="d-flex">
                <input type="number" value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)} className="form-control me-2" placeholder="Feet" style={{ width: "57px", marginLeft: "10px", height: "47px" }} />
                <input type="number" value={heightInches} onChange={(e) => setHeightInches(e.target.value)} className="form-control" placeholder="Inches" style={{ width: "57px", marginLeft: "0px", height: "47px" }} />
              </div>
            )}
          </div>

          <div className="mb-3 d-flex">
            <label className="form-label" style={{ marginLeft: "20px", fontSize: "25px" }}>Age:</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="form-control" style={{ width: "70px", marginLeft: "10px", height: "47px" }} />
          </div>

          <div className="mb-3 d-flex">
            <label className="form-label" style={{ marginLeft: "20px", fontSize: "25px" }}>Gender:</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)} className="form-select" style={{ width: "125px", marginLeft: "10px", height: "47px" }}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div className="mb-3 d-flex justify-content-center">
          <label className="form-label" style={{ fontSize: "25px" }}>Activity Level:</label>
          <select value={activityLevel} onChange={(e) => setActivityLevel(parseFloat(e.target.value))} className="form-select" style={{ width: "450px", marginLeft: "10px" }}>
            <option value="1.2">Sedentary (Little to no exercise)</option>
            <option value="1.375">Lightly Active (1-3 days/week)</option>
            <option value="1.55">Moderately Active (3-5 days/week)</option>
            <option value="1.725">Very Active (6-7 days/week)</option>
            <option value="1.9">Super Active (Twice per day, heavy exercise)</option>
          </select>
        </div>


        <div className="d-flex justify-content-center">
          <button onClick={calculateAll} className="cal btn btn-primary"> Calculate</button>
        </div>
        <div className="d-flex justify-content-between my-4">
          {bmi && tdee && minWeight && maxWeight && (
            <div>
              <p className="mt-4">Your BMI: <strong >{bmi}</strong>
                <button disabled={true} className={`btn-${bmiColor}`} style={{ marginLeft: "10px" }}>{bmiCategory}</button></p>
              <p className="mt-2">Your TDEE: <strong>{tdee} kcal per day</strong></p>
              <p className="mt-2">Your Ideal Weight: <strong>{minWeight} kg - {maxWeight} kg</strong></p>
            </div>
          )}

          {protein && fats && carbs && (
            <div className='justify-content-end'>
              <h6>Macronutrient</h6>
              <p>{text}</p>
              <p>Protein: <strong>{protein} g</strong></p>
              <p>Fats: <strong>{fats} g</strong></p>
              <p>Carbs: <strong>{carbs} g</strong></p>
            </div>
          )}
        </div>
      </div>

      <DietForm tdee={tdee} protein={protein} fats={fats} carbs={carbs} />
    </div >
  );
}
