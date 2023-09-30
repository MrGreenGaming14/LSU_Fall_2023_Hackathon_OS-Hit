import { Grid, Container, Typography, Button } from '@mui/material'
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
    const [ingredientAdd, setIngredientAdd] = useState<any>([]);
    const [ingredientList, setIngredientList] = useState<any>([]);


    
    const handleSubmit = () => {
        console.log(ingredientAdd);
        const temp = ingredientList.concat(ingredientAdd)
        setIngredientList(temp);
        setIngredientAdd([]);
    };

    const handleDelete = (toDel: string) => {
        console.log(toDel);
        let tempArr = [...ingredientList];
        const tempIndex = tempArr.indexOf(tempArr.find((o:any) => o.value === toDel));
        console.log(tempIndex, tempArr);
        tempArr.splice(tempIndex, 1);
        setIngredientList(tempArr);
    }

    return (
        <Container>
            <Grid container flexDirection={"column"}>
                <Grid container flexDirection={"row"}>
                <Grid item>
                    <Typography>Select Ingredients To Use</Typography>
                    <MultiSelect
                        options={options}
                        value={ingredientAdd}
                        onChange={setIngredientAdd}
                        labelledBy="Select"
                        hasSelectAll={false}
                    />
                </Grid>
                <Button onClick={handleSubmit}>
                        Add
                    </Button>
                </Grid>
                
                <Grid item>
                    {ingredientList.map((ingredient: any) => {
                        return (
                            <IngredientCard key={ingredient.name} name={ingredient.value} calories={ingredient.calories} protein={ingredient.protein} moreInfo={ingredient.info} toggled={ingredient.toggled} handleDelete={handleDelete}/>
                        )
                    })}
                </Grid>
            </Grid>
        </Container>
    )
}

export default IngredientsView