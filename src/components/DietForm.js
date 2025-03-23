import React, { useEffect, useState } from "react";

const DietForm = ({ tdee, protein, fats, carbs }) => {
    const [mealPlan, setMealPlan] = useState([]);

    const mealOptions = {
        low: [
            [
                { meal: "Bajari Upama + Tea/Coffee/Milk", proteinRatio: 0.25, fatRatio: 0.30, carbRatio: 0.45 },
                { meal: "Bhakari + Vegetables, Dal Rice + Salad", proteinRatio: 0.40, fatRatio: 0.30, carbRatio: 0.30 },
                { meal: "Chapati + Leafy Vegetables, Dal Rice + Salad", proteinRatio: 0.30, fatRatio: 0.25, carbRatio: 0.45 },
            ],
            [
                { meal: "Moong Dal Dosa + Tea/Coffee/Milk", proteinRatio: 0.35, fatRatio: 0.20, carbRatio: 0.45 },
                { meal: "Bhakari + Leafy Vegetables, Dal Rice + Salad", proteinRatio: 0.30, fatRatio: 0.20, carbRatio: 0.50 },
                { meal: "Chapati + Vegetables, Dal Rice + Salad", proteinRatio: 0.35, fatRatio: 0.25, carbRatio: 0.40 },
            ],
            [
                { meal: "Ragi Idli + Sambar + Tea/Coffee/Milk", proteinRatio: 0.30, fatRatio: 0.35, carbRatio: 0.35 },
                { meal: "Bhakari + Leafy Vegetables, Dal Rice + Salad", proteinRatio: 0.30, fatRatio: 0.25, carbRatio: 0.45 },
                { meal: "Chapati + Sprout Usal, Dal Rice + Salad", proteinRatio: 0.40, fatRatio: 0.25, carbRatio: 0.35 },
            ],
            [
                { meal: "Sprouts Bhel + Tea/Coffee/Milk", proteinRatio: 0.40, fatRatio: 0.20, carbRatio: 0.40 },
                { meal: "Bhakari + Vegetables, Dal Rice + Salad", proteinRatio: 0.30, fatRatio: 0.25, carbRatio: 0.45 },
                { meal: "Chapati + Leafy Vegetables, Dal Rice + Salad", proteinRatio: 0.35, fatRatio: 0.30, carbRatio: 0.35 },
            ],
            [
                { meal: "Dhirade + Tea/Coffee/Milk", proteinRatio: 0.30, fatRatio: 0.25, carbRatio: 0.45 },
                { meal: "Bhakari + Sprout Usal, Dal Rice + Salad", proteinRatio: 0.30, fatRatio: 0.20, carbRatio: 0.50 },
                { meal: "Chapati + Vegetables, Dal Rice + Salad", proteinRatio: 0.40, fatRatio: 0.30, carbRatio: 0.30 },
            ],
            [
                { meal: "Thalipith + Tea/Coffee/Milk", proteinRatio: 0.25, fatRatio: 0.30, carbRatio: 0.45 },
                { meal: "Bhakari + Vegetables, Dal Rice + Salad", proteinRatio: 0.30, fatRatio: 0.25, carbRatio: 0.45 },
                { meal: "Chapati + Leafy Vegetables, Dal Rice + Salad", proteinRatio: 0.40, fatRatio: 0.35, carbRatio: 0.25 },
            ],
            [
                { meal: "Jwari Utappa + Tea/Coffee/Milk", proteinRatio: 0.30, fatRatio: 0.25, carbRatio: 0.45 },
                { meal: "Bhakari + Sprout Usal, Dal Rice + Salad", proteinRatio: 0.35, fatRatio: 0.30, carbRatio: 0.35 },
                { meal: "Chapati + Leafy Vegetables, Dal Rice + Salad", proteinRatio: 0.40, fatRatio: 0.30, carbRatio: 0.30 },
            ]
        ],
        medium: [
            [
                { meal: "Bajari Upama + Tea/Coffee/Milk", proteinRatio: 0.30, fatRatio: 0.35, carbRatio: 0.35 },
                { meal: "Bhakari + Vegetables, Dal Rice + Salad", proteinRatio: 0.40, fatRatio: 0.30, carbRatio: 0.30 },
                { meal: "Chapati + Leafy Vegetables, Dal Rice + Salad", proteinRatio: 0.35, fatRatio: 0.35, carbRatio: 0.30 },
            ],
            [
                { meal: "Moong Dal Dosa + Tea/Coffee/Milk", proteinRatio: 0.35, fatRatio: 0.20, carbRatio: 0.45 },
                { meal: "Bhakari + Leafy Vegetables, Dal Rice + Salad", proteinRatio: 0.30, fatRatio: 0.20, carbRatio: 0.50 },
                { meal: "Chapati + Vegetables, Dal Rice + Salad", proteinRatio: 0.35, fatRatio: 0.25, carbRatio: 0.40 },
            ],
            [
                { meal: "Ragi Idli + Sambar + Tea/Coffee/Milk", proteinRatio: 0.25, fatRatio: 0.30, carbRatio: 0.45 },
                { meal: "Bhakari + Leafy Vegetables, Dal Rice + Salad", proteinRatio: 0.40, fatRatio: 0.30, carbRatio: 0.30 },
                { meal: "Chapati + Sprout Usal, Dal Rice + Salad", proteinRatio: 0.30, fatRatio: 0.25, carbRatio: 0.45 },
            ],
            [
                { meal: "Sprouts Bhel + Tea/Coffee/Milk", proteinRatio: 0.40, fatRatio: 0.20, carbRatio: 0.40 },
                { meal: "Bhakari + Vegetables, Dal Rice + Salad", proteinRatio: 0.30, fatRatio: 0.25, carbRatio: 0.45 },
                { meal: "Chapati + Leafy Vegetables, Dal Rice + Salad", proteinRatio: 0.35, fatRatio: 0.30, carbRatio: 0.35 },
            ],
            [
                { meal: "Dhirade + Tea/Coffee/Milk", proteinRatio: 0.30, fatRatio: 0.25, carbRatio: 0.45 },
                { meal: "Bhakari + Sprout Usal, Dal Rice + Salad", proteinRatio: 0.30, fatRatio: 0.20, carbRatio: 0.50 },
                { meal: "Chapati + Vegetables, Dal Rice + Salad", proteinRatio: 0.40, fatRatio: 0.30, carbRatio: 0.30 },
            ],
            [
                { meal: "Thalipith + Tea/Coffee/Milk", proteinRatio: 0.25, fatRatio: 0.30, carbRatio: 0.45 },
                { meal: "Bhakari + Vegetables, Dal Rice + Salad", proteinRatio: 0.30, fatRatio: 0.25, carbRatio: 0.45 },
                { meal: "Chapati + Leafy Vegetables, Dal Rice + Salad", proteinRatio: 0.40, fatRatio: 0.35, carbRatio: 0.25 },
            ],
            [
                { meal: "Jwari Utappa + Tea/Coffee/Milk", proteinRatio: 0.30, fatRatio: 0.25, carbRatio: 0.45 },
                { meal: "Bhakari + Sprout Usal, Dal Rice + Salad", proteinRatio: 0.35, fatRatio: 0.30, carbRatio: 0.35 },
                { meal: "Chapati + Leafy Vegetables, Dal Rice + Salad", proteinRatio: 0.40, fatRatio: 0.30, carbRatio: 0.30 },
            ],
        ],
        high: [
            [
                { meal: "Bajari Upama + Tea/Coffee/Milk", proteinRatio: 0.25, fatRatio: 0.35, carbRatio: 0.40 },
                { meal: "Bhakari + Vegetables, Dal Rice + Salad", proteinRatio: 0.35, fatRatio: 0.30, carbRatio: 0.35 },
                { meal: "Chapati + Leafy Vegetables, Dal Rice + Salad", proteinRatio: 0.40, fatRatio: 0.30, carbRatio: 0.30 },
            ],
            [
                { meal: "Moong Dal Dosa + Tea/Coffee/Milk", proteinRatio: 0.35, fatRatio: 0.20, carbRatio: 0.45 },
                { meal: "Bhakari + Leafy Vegetables, Dal Rice + Salad", proteinRatio: 0.30, fatRatio: 0.20, carbRatio: 0.50 },
                { meal: "Chapati + Vegetables, Dal Rice + Salad", proteinRatio: 0.35, fatRatio: 0.25, carbRatio: 0.40 },
            ],
            [
                { meal: "Ragi Idli + Sambar + Tea/Coffee/Milk", proteinRatio: 0.25, fatRatio: 0.30, carbRatio: 0.45 },
                { meal: "Bhakari + Leafy Vegetables, Dal Rice + Salad", proteinRatio: 0.40, fatRatio: 0.30, carbRatio: 0.30 },
                { meal: "Chapati + Sprout Usal, Dal Rice + Salad", proteinRatio: 0.30, fatRatio: 0.25, carbRatio: 0.45 },
            ],
            [
                { meal: "Sprouts Bhel + Tea/Coffee/Milk", proteinRatio: 0.40, fatRatio: 0.20, carbRatio: 0.40 },
                { meal: "Bhakari + Vegetables, Dal Rice + Salad", proteinRatio: 0.30, fatRatio: 0.25, carbRatio: 0.45 },
                { meal: "Chapati + Leafy Vegetables, Dal Rice + Salad", proteinRatio: 0.35, fatRatio: 0.30, carbRatio: 0.35 },
            ],
            [
                { meal: "Dhirade + Tea/Coffee/Milk", proteinRatio: 0.30, fatRatio: 0.25, carbRatio: 0.45 },
                { meal: "Bhakari + Sprout Usal, Dal Rice + Salad", proteinRatio: 0.30, fatRatio: 0.20, carbRatio: 0.50 },
                { meal: "Chapati + Vegetables, Dal Rice + Salad", proteinRatio: 0.40, fatRatio: 0.30, carbRatio: 0.30 },
            ],
            [
                { meal: "Thalipith + Tea/Coffee/Milk", proteinRatio: 0.25, fatRatio: 0.30, carbRatio: 0.45 },  // 25% protein, 30% fats, 45% carbs
                { meal: "Bhakari + Vegetables, Dal Rice + Salad", proteinRatio: 0.30, fatRatio: 0.25, carbRatio: 0.45 },
                { meal: "Chapati + Leafy Vegetables, Dal Rice + Salad", proteinRatio: 0.40, fatRatio: 0.35, carbRatio: 0.25 },
            ],
            [
                { meal: "Jwari Utappa + Tea/Coffee/Milk", proteinRatio: 0.30, fatRatio: 0.25, carbRatio: 0.45 },
                { meal: "Bhakari + Sprout Usal, Dal Rice + Salad", proteinRatio: 0.35, fatRatio: 0.30, carbRatio: 0.35 },
                { meal: "Chapati + Leafy Vegetables, Dal Rice + Salad", proteinRatio: 0.40, fatRatio: 0.30, carbRatio: 0.30 },
            ],
        ],
    };

    const generateMealPlan = () => {
        if (!tdee || !protein || !fats || !carbs) return; // No calculation possible

        let mealType = "low";
        if (tdee > 2000) mealType = "medium";
        if (tdee > 2500) mealType = "high";

        const plan = Array.from({ length: 7 }, (_, day) => ({
            day: `Day ${day + 1}`,
            breakfast: {
                ...mealOptions[mealType][day][0],
                protein: Math.round(protein * mealOptions[mealType][day][0].proteinRatio) + "g",
                fats: Math.round(fats * mealOptions[mealType][day][0].fatRatio) + "g",
                carbs: Math.round(carbs * mealOptions[mealType][day][0].carbRatio) + "g",
            },
            lunch: {
                ...mealOptions[mealType][day][1],
                protein: Math.round(protein * mealOptions[mealType][day][1].proteinRatio) + "g",
                fats: Math.round(fats * mealOptions[mealType][day][1].fatRatio) + "g",
                carbs: Math.round(carbs * mealOptions[mealType][day][1].carbRatio) + "g",
            },
            dinner: {
                ...mealOptions[mealType][day][2],
                protein: Math.round(protein * mealOptions[mealType][day][2].proteinRatio) + "g",
                fats: Math.round(fats * mealOptions[mealType][day][2].fatRatio) + "g",
                carbs: Math.round(carbs * mealOptions[mealType][day][2].carbRatio) + "g",
            },
        }));

        setMealPlan(plan);
    };

    useEffect(() => {
        generateMealPlan(); // Update meal plan when TDEE, protein, fats, or carbs change
    }, [tdee, protein, fats, carbs]);

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h3>7-Day Meal Plan</h3>

            {mealPlan.length === 0 ? (
                <p>Please calculate your TDEE first.</p>
            ) : (
                <div style={{ textAlign: "center", marginTop: "20px", width: "60%", margin: "auto" }}>
                    <table className="table table-striped table-hover table-bordered mt-4" style={{ borderColor: "white" }}>
                        <thead className="table-light">
                            <tr className="text-center dmpfc">
                                <th>Meal</th>
                                <th>Food</th>
                                <th>Protein</th>
                                <th>Fats</th>
                                <th>Carbs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mealPlan.map((dayPlan, index) => (
                                <React.Fragment key={index}>
                                    <tr className="table day " style={{ color: " #ffffff" }}>
                                        <td className="fw-bold " colSpan="5">{dayPlan.day}</td>
                                    </tr>
                                    <tr className="text-start">
                                        <td style={{ backgroundColor: "#9dda82" }}>Breakfast</td>
                                        <td style={{ backgroundColor: "#9dda82" }}>{dayPlan.breakfast.meal}</td>
                                        <td className="text-center" style={{ backgroundColor: "#9dda82" }}>{dayPlan.breakfast.protein}</td>
                                        <td className="text-center" style={{ backgroundColor: "#9dda82" }}>{dayPlan.breakfast.fats}</td>
                                        <td className="text-center" style={{ backgroundColor: "#9dda82" }}>{dayPlan.breakfast.carbs}</td>
                                    </tr>
                                    <tr className="text-start">
                                        <td style={{ backgroundColor: " #ffe599 " }}>Lunch</td>
                                        <td style={{ backgroundColor: " #ffe599 " }}>{dayPlan.lunch.meal}</td>
                                        <td className="text-center" style={{ backgroundColor: " #ffe599 " }}>{dayPlan.lunch.protein}</td>
                                        <td className="text-center" style={{ backgroundColor: " #ffe599 " }}>{dayPlan.lunch.fats}</td>
                                        <td className="text-center" style={{ backgroundColor: " #ffe599 " }}>{dayPlan.lunch.carbs}</td>
                                    </tr>
                                    <tr className="text-start">
                                        <td style={{ backgroundColor: "#9dda82" }}>Dinner</td>
                                        <td style={{ backgroundColor: "#9dda82" }}>{dayPlan.dinner.meal}</td>
                                        <td className="text-center" style={{ backgroundColor: "#9dda82" }}>{dayPlan.dinner.protein}</td>
                                        <td className="text-center" style={{ backgroundColor: "#9dda82" }}>{dayPlan.dinner.fats}</td>
                                        <td className="text-center" style={{ backgroundColor: "#9dda82" }}>{dayPlan.dinner.carbs}</td>
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                    <h5 style={{ textAlign: "center", marginTop: "10px" }}>You Searching for a precise plan?</h5>
                    <h5>WhatsApp on <strong className="whatnum"> +91 7972948428</strong></h5>
                </div>
            )}
        </div>
    );
};

export default DietForm;
