import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MemoryIcon from '@material-ui/icons/Memory';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import TextRotationAngleupIcon from '@material-ui/icons/TextRotationAngleup';
import Crop32Icon from '@material-ui/icons/Crop32';
import AlbumIcon from '@material-ui/icons/Album';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import HeightIcon from '@material-ui/icons/Height';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.mixins.toolbar,
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
  },
}));

function SideSrawer(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" className={classes.title}>
        All In One Converter
      </Typography>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <MonetizationOnIcon />
          </ListItemIcon>
          <ListItemText>Currency</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TextRotationAngleupIcon />
          </ListItemIcon>
          <ListItemText>Angles</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HeightIcon />
          </ListItemIcon>
          <ListItemText>Lenghts</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Crop32Icon />
          </ListItemIcon>
          <ListItemText>Area</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AspectRatioIcon />
          </ListItemIcon>
          <ListItemText>Volumes</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AlbumIcon />
          </ListItemIcon>
          <ListItemText>Weights</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AcUnitIcon />
          </ListItemIcon>
          <ListItemText>Temperature</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MemoryIcon />
          </ListItemIcon>
          <ListItemText>Digital Memory</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText>About Me</ListItemText>
        </ListItem>
      </List>
    </React.Fragment>
  );
}

export default SideSrawer;
