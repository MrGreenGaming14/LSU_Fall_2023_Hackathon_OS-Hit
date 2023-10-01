import React, { useState, FormEvent } from 'react';
import { Grid, Container, Typography, Button, TextField } from '@mui/material';
import IngredientCard from '../IngredientCard/IngredientCard';

interface Ingredient {
  name: string;
  calories?: number;
  protein?: number;
  info?: string;
}

function IngredientsView() {
  const [ingredientInput, setIngredientInput] = useState<string>('');
  const [ingredientList, setIngredientList] = useState<Ingredient[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredientInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // Prevent the form from submitting and reloading the page

    if (ingredientInput.trim() !== '') {
      const newIngredient: Ingredient = {
        name: ingredientInput,
        // Add more properties for custom ingredients here if needed
      };

      setIngredientList([...ingredientList, newIngredient]);
      setIngredientInput('');
    }
  };

  const handleDelete = (toDel: string) => {
    const updatedIngredients = ingredientList.filter((ingredient) => ingredient.name !== toDel);
    setIngredientList(updatedIngredients);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Grid container flexDirection={'column'}>
          <Grid container flexDirection={'row'}>
            <Grid item>
              <TextField
                label="Ingredient Name"
                variant="outlined"
                value={ingredientInput}
                onChange={handleInputChange}
              />
            </Grid>
            <Button type="submit">Add</Button>
          </Grid>
        </Grid>
      </form>

      <Grid item>
        {ingredientList.map((ingredient) => {
          return (
            <IngredientCard
                  key={ingredient.name}
                  name={ingredient.name}
                  handleDelete={handleDelete} calories={0} protein={0} moreInfo={[]} toggled={false}            />
          );
        })}
      </Grid>
    </Container>
  );
}

export default IngredientsView;