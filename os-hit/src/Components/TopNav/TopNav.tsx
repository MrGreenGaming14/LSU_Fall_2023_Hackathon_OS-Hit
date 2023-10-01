import {
  Button, Link, Typography, AppBar, Box, Toolbar, CssBaseline} from '@mui/material'
import React, { useEffect, useState } from 'react'
import logo from "./zestquest.png";
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

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <img src={logo} alt="Logo" />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            ZestQuest
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            The Quest for the Zest
          </Typography>
          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {displayButton}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}