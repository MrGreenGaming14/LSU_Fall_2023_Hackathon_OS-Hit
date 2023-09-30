import { Container, Grid, Switch, Typography } from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react'
import { boolean } from 'yargs';
interface Props {
    name: string;
    calories: number;
    protein: number;
    moreInfo: [];
    toggled: boolean;
}
function IngredientCard(props: Props) {
    const [moreInfo, setMoreInfo] = useState<boolean>(false);
    const handleSwitch = () => {  };
    return (
        <Container>
            <Grid container>
                <Grid item>
                    <Switch defaultChecked={props.toggled} onChange={handleSwitch} />
                </Grid>
                <Grid item>
                    <Typography>
                        {props.name}
                    </Typography>
                </Grid>
                <Grid item>
                    {moreInfo ?
                        <div>
                            <div onClick={() => setMoreInfo(!moreInfo)}>
                                <ExpandLessIcon />
                            </div>
                            <div>more info here</div>
                        </div>
                        :
                        <div onClick={() => setMoreInfo(!moreInfo)}>
                            <ExpandMoreIcon />
                        </div>
                    }
                </Grid>
            </Grid>
            <Grid container>
                <Grid item>
                    <Typography>Calories: {props.calories}</Typography>
                </Grid>
                <Grid item>
                    <Typography>Protein: {props.protein}</Typography>
                </Grid>

            </Grid>
        </Container>
    )
}

export default IngredientCard