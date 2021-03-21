import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { InputBase, Button, Container, Box } from '@material-ui/core';
import WeatherContent from './WeatherContent';
import Spinner from './Spinner';


const About = () => {

    const [input, setInput] = useState('Chisinau');
    const [changeOn, setChangeOn] = useState('');
    const [response, setResponse] = useState(null)



    const handleInputClick = (e) => {
        e.preventDefault();
        setChangeOn(input);
    }

    useEffect(() => {
        axios.get('http://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: input,
                appid: process.env.REACT_APP_WETHER_KEY,
                units: 'metric',
                lang: 'en'
            }
        })
            .then(function (response) {
                setResponse(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }, [changeOn])

    if (!response) {
        return (
            <Spinner/>
        )
    }


    return (
        <Container >
            <Box pt={8} textAlign='center' >
                <InputBase className='input' placeholder='Search...' onChange={(e) => setInput(e.target.value)} />
                <Button className='input' variant='contained' disableElevation size="large" color='primary' onClick={handleInputClick} >click</Button>
            </Box>
            <WeatherContent response={response.data} />
        </Container>
    );
}

export default About;