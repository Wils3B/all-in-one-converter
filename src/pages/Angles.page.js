import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Typography, OutlinedInput } from '@material-ui/core';

const converter = require('../converters/all.json').angles;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  fullWidth: {
    width: '100%',
  },
  spacedBottom: {
    marginBottom: theme.spacing(2),
  },
  offsetLeft: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

export default function AnglesPage() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    inputUnit: converter.units[0],
    outputUnit: converter.units[1],
    inputValue: 0,
    outputValue: 0,
  });

  function handleValueChange(prop) {
    return (event, newValue) => {
      const newValues = { ...values, [prop]: event.target.value || newValue };
      newValues.outputValue = /^\d*(\.?)\d*$/.test(newValues.inputValue)
        ? Number(newValues.inputValue) * (newValues.outputUnit.value / newValues.inputUnit.value)
        : 0;
      setValues(newValues);
    };
  }

  return (
    <main className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={2} lg={3} className={classes.offsetLeft} />
        <Grid item xs={12} md={8} lg={6}>
          <Typography variant="h6" component="h1">
            Angles Converter
          </Typography>
          <Autocomplete
            options={converter.units}
            getOptionLabel={(option) => option.name}
            disableClearable
            blurOnSelect
            value={values.inputUnit}
            onChange={handleValueChange('inputUnit')}
            renderInput={(params) => (
              <TextField {...params} label="Input Unit" variant="filled" margin="dense" />
            )}
          />
          <FormControl
            variant="outlined"
            margin="dense"
            className={`${classes.fullWidth} ${classes.spacedBottom}`}
          >
            <OutlinedInput
              id="input-value"
              value={values.inputValue}
              onChange={handleValueChange('inputValue')}
              endAdornment={
                <InputAdornment position="end">{values.inputUnit.shortName}</InputAdornment>
              }
              aria-describedby="filled-value-to-convert"
              inputProps={{
                'aria-label': 'input value',
              }}
            />
          </FormControl>
          <Autocomplete
            options={converter.units}
            getOptionLabel={(option) => option.name}
            disableClearable
            blurOnSelect
            value={values.outputUnit}
            onChange={handleValueChange('outputUnit')}
            renderInput={(params) => (
              <TextField {...params} label="Output Unit" variant="filled" margin="dense" />
            )}
          />
          <FormControl variant="outlined" margin="dense" className={classes.fullWidth}>
            <OutlinedInput
              id="output-value"
              value={values.outputValue}
              readOnly
              endAdornment={
                <InputAdornment position="end">{values.outputUnit.shortName}</InputAdornment>
              }
              aria-describedby="result-of-conversion"
              inputProps={{
                'aria-label': 'output value',
              }}
            />
          </FormControl>
        </Grid>
      </Grid>
    </main>
  );
}
