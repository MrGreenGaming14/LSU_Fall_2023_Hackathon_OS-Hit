import { Grid, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { MultiSelect } from "react-multi-select-component";
import IngredientCard from '../IngredientCard/IngredientCard';


//temp options
const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry" },
];

function IngredientsView() {
    const [ingredient, setIngredient] = useState([]);
    return (
        <Container>
            <Grid container flexDirection={"column"}>
                <Grid item>
                    <Typography>Select Ingredients To Use</Typography>
                    <MultiSelect
                        options={options}
                        value={ingredient}
                        onChange={setIngredient}
                        labelledBy="Select"
                        hasSelectAll={false}
                    />
                </Grid>
                <Grid item>
                    {ingredient.map((ingredient: any) => {
                        return (
                            <IngredientCard name={ingredient.value} calories={ingredient.calories} protein={ingredient.protein} moreInfo={ingredient.info} toggled={ingredient.toggled} />
                        )
                    })}
                </Grid>
            </Grid>
        </Container>
    )
}

export default IngredientsView
