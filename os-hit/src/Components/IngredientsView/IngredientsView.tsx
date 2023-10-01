import { Grid, Container, Typography, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { MultiSelect } from "react-multi-select-component";
import IngredientCard from '../IngredientCard/IngredientCard';

interface Props{
    changeIngredient: (e: any) => void
    ingredientList: Array<any>
    handleSwitch: (e:any) => void; 
}


function IngredientsView(props: Props) {
    const [ingredientAdd, setIngredientAdd] = useState<any | null>();
    
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const input =  ingredientAdd;
        const build = {
            value: input,
            toggled: true,
            id: props.ingredientList.length
        }
        const temp = props.ingredientList.concat(build);
        props.changeIngredient(temp);
        setIngredientAdd("");
    };

    const handleDelete = (toDel: string) => {
        console.log(toDel);
        let tempArr = [...props.ingredientList];
        const tempIndex = tempArr.indexOf(tempArr.find((o: any) => o.value === toDel));
        console.log(tempIndex, tempArr);
        tempArr.splice(tempIndex, 1);
        props.changeIngredient(tempArr);
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
                    {props.ingredientList.map((ingredient: any) => {
                        return (
                            <IngredientCard key={ingredient.id} name={ingredient.value} toggled={ingredient.toggled} handleDelete={handleDelete} handleSwitch={props.handleSwitch}/>
                        )
                    })}
                </Grid>
            </Grid>
        </Container >
    )
}

export default IngredientsView