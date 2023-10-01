import { Button, Container, Grid, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/system';
import { useLocation } from 'react-router';

const TopFix = styled('div')({
    position: 'fixed',
    top: 0,
    width: '100%',
    height: 60,
    textAlign: 'center',
});
const GenRecipeButton = () => {
    return (
        <Link href={'/recipe'}>
            <Button>
                Generate Recipe
            </Button>
        </Link>)
}
const EditIngButton = () => {
    return (
        <Link href={'/'}>
            <Button>
                Edit Ingredients
            </Button>
        </Link>)
}


function TopNav() {
    const location = useLocation()
    const [displayButton, setDisplayButton] = useState<any>(<GenRecipeButton />)
    useEffect(() => {
        const page = location.pathname;
        if (page === '/') setDisplayButton(<GenRecipeButton />);
        else if (page === '/recipe') setDisplayButton(<EditIngButton />);
    }, [])
    return (
        <TopFix >
            <Grid container flexDirection={'row'} justifyContent={'space-around'}>
                <Grid item>
                    <Typography>
                        Zest Quest
                    </Typography>
                </Grid>
                <Grid item>
                    {displayButton}
                </Grid>
                {/* <Grid item>
                    <Link href={'/myrecipes'}>
                        <Button>
                            <Typography>
                                My Recipes
                            </Typography>
                        </Button>
                    </Link>
                </Grid> */}
            </Grid>
        </TopFix>
    )
}

export default TopNav