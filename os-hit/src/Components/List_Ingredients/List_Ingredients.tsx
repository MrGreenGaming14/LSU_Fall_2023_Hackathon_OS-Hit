interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}

const ingredients: Ingredient[] = [
  { name: "Flour", quantity: 2, unit: "cups" },
  { name: "Sugar", quantity: 1, unit: "cup" },
  { name: "Eggs", quantity: 2, unit: "" },
  { name: "Milk", quantity: 1, unit: "cup" }
];

export function createIngredientTable(ingredients: Ingredient[]) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Create table header
  const headerRow = document.createElement("tr");
  const headers = ["Ingredient", " Quantity ", "Unit"];
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  // Create table rows
  ingredients.map((ingredient) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = ingredient.name;
    row.appendChild(nameCell);
    const quantityCell = document.createElement("td");
    quantityCell.textContent = ingredient.quantity.toString();
    row.appendChild(quantityCell);
    const unitCell = document.createElement("td");
    unitCell.textContent = ingredient.unit;
    row.appendChild(unitCell);
    tbody.appendChild(row);
  });

  table.appendChild(thead);
  table.appendChild(tbody);

  return table;
}
