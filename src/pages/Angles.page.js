import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ConverterForm from '../components/ConverterForm.component';
import { Typography } from '@material-ui/core';

const angleUnits = require('../converters/all.json').angles;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  offsetLeft: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export default function AnglesPage() {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={2} lg={3} className={classes.offsetLeft} />
        <Grid item xs={12} md={8} lg={6}>
          <Typography variant="h6" component="h1">
            Angles Converter
          </Typography>
          <ConverterForm units={angleUnits} />
        </Grid>
      </Grid>
    </main>
  );
}
