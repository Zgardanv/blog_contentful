import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#fff',
    '&:hover':{
        color: '#fff',
        textDecoration: 'unset'
    }
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <Typography component={Link} to='/' variant="h6" color="inherit" className={classes.title}>
            Home
          </Typography>
          <Typography component={Link} to='/weather' variant="h6" className={classes.title}>
            Weather
          </Typography>
          <Button color="inherit"  >Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}