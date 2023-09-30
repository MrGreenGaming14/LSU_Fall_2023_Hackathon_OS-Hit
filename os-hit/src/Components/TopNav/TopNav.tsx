import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/system';
    
const TopFix = styled('div')({
    position: 'fixed',
    top: 0,
    width: '100%',
    height: 60,
    textAlign: 'center',
});


function TopNav() {
  return (
    <TopFix >
        <Grid container flexDirection={'row'} justifyContent={'space-around'}>
            <Grid item>
                <Typography>
                    Zest Quest
                </Typography>
            </Grid>
            <Grid item>
                <Button>
                    <Typography>
                        My Recipes
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    </TopFix>
  )
}

export default TopNav