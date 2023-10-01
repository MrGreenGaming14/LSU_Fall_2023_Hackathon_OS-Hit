import {Container, Grid, Switch, Typography, Paper } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import React, { useState } from 'react'

interface Props {
    name: string;
    calories: number;
    protein: number;
    moreInfo: [];
    toggled: boolean;
    handleDelete: (e: string) => void;
  }
  
  function IngredientCard(props: Props) {
    const [moreInfo, setMoreInfo] = useState<boolean>(false);
    const handleSwitch = () => {}; // TODO: handle toggle on and off state
  
    // Define a custom background color for each card
    const cardBackgroundColor = moreInfo ? '#B7B7B7' : '#fff';
  
    return (
      <Paper elevation={3} style={{ backgroundColor: cardBackgroundColor, padding: '16px', margin: '8px' }}>
        <Container>
          <Grid container alignItems="center">
            <Grid item>
              <Switch defaultChecked={props.toggled} onChange={handleSwitch} />
            </Grid>
            <Grid item>
              <Typography>{props.name}</Typography>
            </Grid>
            <Grid item>
              <HighlightOffIcon onClick={() => props.handleDelete(props.name)} />
            </Grid>
          </Grid>
        </Container>
      </Paper>
    );
  }
  
  export default IngredientCard;
