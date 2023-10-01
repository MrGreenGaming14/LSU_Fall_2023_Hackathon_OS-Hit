import { Grid, Container, Typography, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { MultiSelect } from "react-multi-select-component";
import IngredientCard from '../IngredientCard/IngredientCard';


//temp options
const options = [
    { label: "Grapes 🍇", value: "Grapes" },
    { label: "Mango 🥭", value: "Mango" },
    { label: "Strawberry 🍓", value: "Strawberry" },
];

function IngredientsView() {
    const [ingredientAdd, setIngredientAdd] = useState<any | null>();
    const [ingredientList, setIngredientList] = useState<any>([]);



    const handleSubmit = (e: any) => {
        e.preventDefault();
        const input =  ingredientAdd;
        const build = {
            value: input,
            toggled: true,
        }
        const temp = ingredientList.concat(build);
        setIngredientList(temp);
        setIngredientAdd("");
    };

    const handleDelete = (toDel: string) => {
        console.log(toDel);
        let tempArr = [...ingredientList];
        const tempIndex = tempArr.indexOf(tempArr.find((o: any) => o.value === toDel));
        console.log(tempIndex, tempArr);
        tempArr.splice(tempIndex, 1);
        setIngredientList(tempArr);
    }

    return (
        <Container>
            <Grid container flexDirection={"column"}>

                <form>
                    <Grid container flexDirection={"row"}>
                        <Grid item>
                            <TextField id="input" name="input" label="Select Ingredients To Use" variant="outlined" value={ingredientAdd} onChange={(e)=> setIngredientAdd(e.target?.form?.input?.value)} />
                        </Grid>
                        <Button type="submit" onClick={handleSubmit}>
                            Add
                        </Button>
                    </Grid>
                </form>


                <Grid item>
                    {ingredientList.map((ingredient: any) => {
                        return (
                            <IngredientCard key={ingredient.name} name={ingredient.value} toggled={ingredient.toggled} handleDelete={handleDelete} />
                        )
                    })}
                </Grid>
            </Grid>
        </Container >
    )
}

export default IngredientsView