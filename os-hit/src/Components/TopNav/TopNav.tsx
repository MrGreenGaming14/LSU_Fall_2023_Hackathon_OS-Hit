import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'


function TopNav() {
  return (
    <Container fixed >
        <Grid container flexDirection={'row'}>
            <Grid item>
                <Typography>\
                    App name
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
    </Container>
  )
}

export default TopNav