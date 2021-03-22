import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { InputBase, Button, Container, Box } from '@material-ui/core';
import WeatherContent from './WeatherContent';
import Spinner from './Spinner';
import WeatherFiveDays from './WeatherFiveDays';


const About = () => {

    const [input, setInput] = useState('Chisinau');
    const [changeOn, setChangeOn] = useState('');
    const [response, setResponse] = useState(null)
    const [fiveDays, setfiveDays] = useState(null)



    const handleInputClick = (e) => {
        e.preventDefault();
        setChangeOn(input);
    }

    const params = {
        q: input,
        appid: process.env.REACT_APP_WETHER_KEY,
        units: 'metric',
        lang: 'en'
    }


    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                ...params
            }
        })
            .then(function (response) {
                setResponse(response);
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('https://api.openweathermap.org/data/2.5/forecast', {
            params: {
                ...params,
                cnt: 35
            }
        }).then((response) => {
            setfiveDays(response)
        }).catch((err) => {
            console.log(err)
        })

    }, [changeOn])

    if (!response) {
        return (
            <Spinner />
        )
    }


    return (
        <Container >
            <Box pt={8} textAlign='center' >
                <InputBase className='input' placeholder='Search...' onChange={(e) => setInput(e.target.value)} />
                <Button className='input' variant='contained' disableElevation size="large" color='primary' onClick={handleInputClick} >click</Button>
            </Box>
            <WeatherContent response={response.data} />
            <WeatherFiveDays list={fiveDays?.data} />
        </Container>
    );
}

export default About;