import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  block: {
    display: 'block',
  },
  cardPaper: {
    height: 150,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: (props) => `url('${props.image}')`,
  },
  cardButton: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: 'white',
    borderRadius: theme.spacing(1) / 2,

    '& .buttonText': {
      borderBottom: '3px solid transparent',
    },

    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.25)',

      '& .buttonText': {
        borderBottom: '3px solid white',
      },
    },
  },
}));

export default function ConverterCard(props) {
  const classes = useStyles(props);
  return (
    <Link to={props.to} className={classes.block}>
      <Paper className={`${classes.cardPaper}`}>
        <ButtonBase className={classes.cardButton}>
          <Typography variant="h5" component="span" color="white" className="buttonText">
            {props.text}
          </Typography>
        </ButtonBase>
      </Paper>
    </Link>
  );
}

ConverterCard.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.object,
};
