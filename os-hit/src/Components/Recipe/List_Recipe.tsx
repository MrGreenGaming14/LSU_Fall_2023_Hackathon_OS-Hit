import React from "react";

interface Step {
  id: number;
  description: string;
}

interface Props {
  steps: Step[];
}

export const MealSteps: React.FC<Props> = ({ steps }) => {
  return (
    <ol>
      {steps.map((step) => (
        <li key={step.id}>{step.description}</li>
      ))}
    </ol>
  );
};

export default MealSteps;
