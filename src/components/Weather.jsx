import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { InputBase, Button, Container, Box } from "@material-ui/core";
import WeatherContent from "./WeatherContent";
import Spinner from "./Spinner";
import WeatherFiveDays from "./WeatherFiveDays";
import { getWeather, clientCity } from "./redux/actions";
import { store } from "../App";

const About = () => {
  const [input, setInput] = useState("");
  const [changeOn, setChangeOn] = useState("");
  const [response, setResponse] = useState(null);
  const [fiveDays, setfiveDays] = useState(null);
  const [loading, setLoading] = useState(false);
  let form = useRef(null);

  const handleInputClick = (e) => {
    e.preventDefault();
    if (!input) {
      alert("input is empty");
    } else {
      store.dispatch(clientCity(input));
      setChangeOn(input);
      form.current.reset();
      setLoading(true);
    }
  };

  useEffect(() => {
    const params = {
      q: store.getState().city,
      appid: process.env.REACT_APP_WETHER_KEY,
      units: "metric",
      lang: "en",
    };

    axios
      .get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          ...params,
        },
      })
      .then((response) => {
        setResponse(response);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("https://api.openweathermap.org/data/2.5/forecast", {
        params: {
          ...params,
          cnt: 40,
        },
      })
      .then((response) => {
        setfiveDays(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [changeOn]);

  const Resp = () => {
    if (response && fiveDays && !loading) {
      return (
        <>
          <WeatherContent response={response.data} />
          <WeatherFiveDays list={fiveDays?.data} />
        </>
      );
    } else {
      return <Spinner />;
    }
  };

  return (
    <Container>
      <Box pt={8} textAlign="center">
        <form ref={form}>
          <InputBase
            className="input"
            placeholder="Search..."
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            className="input"
            variant="contained"
            disableElevation
            size="large"
            color="primary"
            onClick={handleInputClick}
          >
            click
          </Button>
        </form>
      </Box>

      <Resp />
    </Container>
  );
};

export default About;
