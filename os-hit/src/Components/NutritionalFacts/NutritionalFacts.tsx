import React from "react";

interface NutritionTableProps {
  data: {
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
  }[];
}

const NutritionTable = ({ data }: NutritionTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Calories</th>
          <th>Fat</th>
          <th>Carbs</th>
          <th>Protein</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.calories}</td>
            <td>{item.fat}</td>
            <td>{item.carbs}</td>
            <td>{item.protein}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NutritionTable;
