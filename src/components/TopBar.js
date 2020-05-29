import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
import GitHubIcon from '@material-ui/icons/GitHub';
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SideDrawer from './SideDrawer';
import { ThemeContext } from '../index';

const useStyles = makeStyles(() => ({
  spacer: {
    flexGrow: 1,
  },
  drawerPaper: {
    width: 260,
  },
}));

export default function TopBar() {
  const classes = useStyles();
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const themeStyle = React.useContext(ThemeContext);

  const toggleDrawer = function () {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <div className={classes.spacer} />
          <Button color="inherit" startIcon={<TranslateIcon />} endIcon={<ExpandMoreIcon />}>
            English
          </Button>
          <IconButton color="inherit" onClick={themeStyle.toggleTheme}>
            {themeStyle.name === 'light' ? <BrightnessLowIcon /> : <BrightnessHighIcon />}
          </IconButton>
          <IconButton color="inherit">
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav aria-label="Converters types">
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer}
          classes={{ paper: classes.drawerPaper }}
        >
          <SideDrawer />
        </Drawer>
      </nav>
    </React.Fragment>
  );
}
