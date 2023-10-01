import { Button, Grid, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, {  } from 'react'
import { styled } from '@mui/system';

const BottomFix = styled('div')({
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 60,
});

interface Props {
    showGenerate: boolean;
}


function BottomNav(props: Props) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <BottomFix>
            <Grid container flexDirection={'row'} justifyContent={'space-around'}>
                <Grid item>
                    <Button
                        id="positioned-button"
                        aria-controls={open ? 'positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </Button>
                    <Menu
                        id="positioned-menu"
                        aria-labelledby="positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Taste Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Restrictions</MenuItem>
                        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                    </Menu>
                </Grid>
            </Grid>
        </BottomFix>
    )
}

export default BottomNav