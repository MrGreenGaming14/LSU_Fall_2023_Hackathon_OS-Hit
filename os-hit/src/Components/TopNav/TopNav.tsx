import {
  Button, Container, Grid, Link, Typography, AppBar, Box, Toolbar, IconButton,
  Menu, Avatar, Tooltip, MenuItem, List, ListItem, ListItemButton, ListItemText,
  Divider, CssBaseline, Drawer
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react'
import logo from "./zestquest.png";
import { styled } from '@mui/system';
import { useLocation } from 'react-router';

const GenRecipeButton = () => {
  return (
    <Link href={'/recipe'}>
      <Button>
        <Typography sx={{ color: "#fff" }}>
          Generate Recipe
        </Typography>
      </Button>
    </Link>)
}
const EditIngButton = () => {
  return (
    <Link href={'/'}>
      <Button>
        <Typography sx={{ color: "#fff" }}>
          Edit Ingredients
        </Typography>
      </Button>
    </Link>)
}

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}


const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const location = useLocation()
  const [displayButton, setDisplayButton] = useState<any>(<GenRecipeButton />)
  useEffect(() => {
    const page = location.pathname;
    if (page === '/') setDisplayButton(<GenRecipeButton />);
    else if (page === '/recipe') setDisplayButton(<EditIngButton />);
  }, [])

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

      <Divider />

      {displayButton}

    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="Logo" />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            ZestQuest
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {displayButton}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>

        </Typography>
      </Box>
    </Box>
  );
}