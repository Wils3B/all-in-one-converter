import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  OutlinedInput,
  InputAdornment,
  FormControl,
  TextField,
  Button,
  Grid,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  fullWidth: {
    width: '100%',
  },
  spacedBottom: {
    marginBottom: theme.spacing(2),
  },
}));

export default function ConverterForm(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    inputUnit: props.units[0],
    outputUnit: props.units[1],
    inputValue: props.units[0].value,
    outputValue: props.units[1].value,
  });

  function handleValueChange(prop) {
    return (event, newValue) => {
      const newValues = { ...values, [prop]: newValue || event.target.value };
      convert(newValues);
    };
  }

  function swap() {
    const newValues = { ...values, inputUnit: values.outputUnit, outputUnit: values.inputUnit };
    convert(newValues);
  }

  function reset() {
    const newValues = { ...values, inputValue: 1 };
    convert(newValues);
  }

  function convert(newValues) {
    newValues.outputValue = /^\d*(\.?)\d*$/.test(newValues.inputValue)
      ? Number(newValues.inputValue) * (newValues.outputUnit.value / newValues.inputUnit.value)
      : 0;
    setValues(newValues);
  }

  return (
    <React.Fragment>
      <Autocomplete
        options={props.units}
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
          autoFocus
          aria-describedby="filled-value-to-convert"
          inputProps={{
            'aria-label': 'input value',
          }}
        />
      </FormControl>
      <Autocomplete
        options={props.units}
        getOptionLabel={(option) => option.name}
        disableClearable
        blurOnSelect
        value={values.outputUnit}
        onChange={handleValueChange('outputUnit')}
        renderInput={(params) => (
          <TextField {...params} label="Output Unit" variant="filled" margin="dense" />
        )}
      />
      <FormControl
        variant="outlined"
        margin="dense"
        className={`${classes.fullWidth} ${classes.spacedBottom}`}
      >
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
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Button variant="outlined" fullWidth onClick={swap}>
            Swap
          </Button>
        </Grid>
        <Grid item xs={6} md={4}>
          <Button variant="outlined" fullWidth onClick={reset}>
            Reset
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

ConverterForm.propTypes = {
  units: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      shortName: PropTypes.string,
      value: PropTypes.number,
    })
  ),
};
