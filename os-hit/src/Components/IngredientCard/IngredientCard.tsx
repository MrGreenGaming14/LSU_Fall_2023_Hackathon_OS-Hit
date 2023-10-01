import { Container, Grid, Switch, Typography } from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
    // Initialize moreInfo state to true for the Switch to be toggled on by default
    const [moreInfo, setMoreInfo] = useState<boolean>(true);

    const handleSwitch = () => {
        setMoreInfo(!moreInfo);
    };

    return (
        <Container>
            <Grid container>
                <Grid item>
                    <Switch checked={moreInfo} onChange={handleSwitch} />
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
                <Grid item>
                    <HighlightOffIcon onClick={() => props.handleDelete(props.name)} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default IngredientCard;