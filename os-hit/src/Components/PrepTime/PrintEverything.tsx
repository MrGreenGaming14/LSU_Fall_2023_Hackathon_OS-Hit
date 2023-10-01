import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NutritionTable from "./practice";
import { createIngredientTable } from "./ingredients";
import MealSteps from "./mealSteps";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

const nutritionData = [
  { name: "Apple", calories: 95, fat: 0.3, carbs: 25, protein: 0.5 },
  { name: "Banana", calories: 105, fat: 0.4, carbs: 27, protein: 1.3 },
  { name: "Orange", calories: 62, fat: 0.2, carbs: 15, protein: 1.2 }
];

const ingredients = [
  { name: "Flour", quantity: 2, unit: "cups" },
  { name: "Sugar", quantity: 1, unit: "cup" },
  { name: "Eggs", quantity: 2, unit: "" },
  { name: "Milk", quantity: 1, unit: "cup" }
];

const steps = [
  { id: 1, description: "Preheat the oven to 350°F." },
  { id: 2, description: "Mix the dry ingredients in a bowl." },
  { id: 3, description: "Add the wet ingredients and stir until combined." },
  { id: 4, description: "Pour the batter into a greased baking dish." },
  { id: 5, description: "Bake for 30-35 minutes or until golden brown." }
];

const table = createIngredientTable(ingredients);

root.render(
  <React.StrictMode>
    <h3>Time to Make: 30 mins</h3>
    <NutritionTable data={nutritionData} />
    <h1>How to Make a Cake</h1>
    <MealSteps steps={steps} />
  </React.StrictMode>
);

document.body.appendChild(table);
