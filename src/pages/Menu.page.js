import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CurrencyImage from '../assets/images/currency.jpg';
import LenghtsImage from '../assets/images/lenghts.jpg';
import SurfacesImage from '../assets/images/surfaces.png';
import AnglesImage from '../assets/images/angles.jpg';
import WeightImage from '../assets/images/weights.jpg';
import VolumesImage from '../assets/images/volumes.png';
import TemperaturesImage from '../assets/images/temperatures.jpg';
import MemoryImage from '../assets/images/memory.jpg';
import Typography from '@material-ui/core/Typography';
import ConverterCard from '../components/ConverterCard.component';

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
    },
  },
  mainTitle: {
    marginBottom: 12,
  },
}));

export default function Menu(props) {
  const classes = useStyle();

  return (
    <main className={classes.root}>
      <Typography variant="h5" component="h1" className={classes.mainTitle}>
        What do you want to convert?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <ConverterCard text="CURRENCY" image={CurrencyImage} to="/currency" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <ConverterCard text="ANGLES" image={AnglesImage} to="/angles" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <ConverterCard text="LENGTHS" image={LenghtsImage} to="/lenghts" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <ConverterCard text="AREAS" image={SurfacesImage} to="/areas" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <ConverterCard text="VOLUMES" image={VolumesImage} to="/volumes" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <ConverterCard text="WEIGHTS" image={WeightImage} to="/weights" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <ConverterCard text="TEMPERATURES" image={TemperaturesImage} to="/temperatures" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <ConverterCard text="DIGITAL MEMORY" image={MemoryImage} to="/memory" />
        </Grid>
      </Grid>
    </main>
  );
}
