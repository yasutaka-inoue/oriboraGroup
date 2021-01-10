import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';

// style
const useStyles = makeStyles((theme) => ({
    title: {
        bottom: 'auto',
        top: 0,
        boxShadow: "none",
      },
  }));

const Title = ({title}) => {
    const classes = useStyles();
    return (
        <>
        <AppBar position="fixed" color="primary" className={classes.title}>
        <Toolbar>
            <Typography variant="h6">
                 {title}
            </Typography>
        </Toolbar>
        </AppBar>
        </>
    )
}

export default Title
