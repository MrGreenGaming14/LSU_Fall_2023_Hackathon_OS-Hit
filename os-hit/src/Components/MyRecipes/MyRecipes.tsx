import { Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const savedRecipes = [
    {
        name: 'test 1',
        img: 'imge.png',
        recipeID: "1"
    },
    {
        name: 'test 2',
        img: 'imge.png',
        recipeID: "2"
    },
    {
        name: 'test 3',
        img: 'imge.png',
        recipeID: "3"
    }

]

function MyRecipes() {

    return (
        <div>
            {savedRecipes.map((recipes) => {
                return(

                    <RecipeCard key={recipes.recipeID} name={recipes.name} image={recipes.img} recipeID={recipes.recipeID}/>
                )
            })}
            </div>
    )
}

export default MyRecipes

interface RecipeCardProps{
    name: string;
    image: string;
    recipeID: string;
}
export const RecipeCard = (props: RecipeCardProps) => {
    return(
        <Container>
            <Link href={`/recipes/${props.recipeID}`}>
            <Grid container>
                <Grid item>
                    <img src={props.image}/>
                </Grid>
                <Grid item>
                    <Typography>{props.name}</Typography>
                </Grid>
            </Grid>
            </Link>
        </Container>
    )
}