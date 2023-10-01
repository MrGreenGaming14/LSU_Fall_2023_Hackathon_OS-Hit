import { Container, Grid, Switch, Typography } from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import React, { useState } from 'react'

interface Props {
    name: string;
    toggled: boolean;
    handleDelete: (e: string) => void;
}
function IngredientCard(props: Props) {
    const [moreInfo, setMoreInfo] = useState<boolean>(false);
    const handleSwitch = () => {}; //TODO: handle toggle on and off state

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
                {/* <Grid item>
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
                </Grid> */}
                <Grid item>
                    <HighlightOffIcon onClick={() => props.handleDelete(props.name)} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default IngredientCard