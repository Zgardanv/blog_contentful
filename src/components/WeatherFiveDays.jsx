import React from "react";
import {
  Box,
  GridList,
  GridListTile,
  Grid,
  makeStyles,
  Typography,
  Avatar,
} from "@material-ui/core";
import Spinner from "./Spinner";
import WindFormater from "./WindFormater";

const useStyles = makeStyles((theme) => ({
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  gridListTile: {
    height: "auto !important",
    backgroundColor: "white",
    padding: "5px",
    borderRadius: "5px",
    textAlign: "center",
    margin: "10px 5px",
    minWidth: "130px",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: "auto",
  },
}));

const WeatherFiveDays = ({ list }) => {
  const classes = useStyles();

  const dateConv = (date) => {
    // return date = date.substring(0, date.length - 3)
    const newDate = new Date(date * 1000).toDateString();
    return newDate.slice(0, newDate.length - 4);
  };
  const timeConv = (date) => {
    return date.slice(11, date.length - 3);
  };

  if (!list) {
    return <Spinner />;
  }

  return (
    <Box className="weatherContent" py={5}>
      <Grid container>
        <GridList cols={6} className={classes.gridList} spacing={5}>
          {list.list.map((item) => (
            <GridListTile key={item.dt} className={classes.gridListTile}>
              <Typography variant="h6">{timeConv(item.dt_txt)}</Typography>
              <Typography variant="body1">{dateConv(item.dt)}</Typography>
              <Avatar
                className={classes.avatar}
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt={item.weather[0].main}
              />
              <Typography gutterBottom variant="h6">
                {item.weather[0].main}
              </Typography>
              <Typography gutterBottom variant="h5">
                {Math.round(item.main.temp)}&#8451;
              </Typography>
              <Typography variant="body1">
                {WindFormater(item.wind.deg)}
              </Typography>
              <Typography variant="body1">{item.wind.speed}m/s</Typography>
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    </Box>
  );
};

export default WeatherFiveDays;
