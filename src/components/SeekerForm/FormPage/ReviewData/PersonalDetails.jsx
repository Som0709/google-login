import React from 'react';
import moment from 'moment';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
function PersonalDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const {     

   } = formValues;
  return (
    <Grid item container direction="column" xs={12} sm={12}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Educational Data
      </Typography>
      <Grid container>
    
      </Grid>
    </Grid>
  );
}

export default PersonalDetails;
