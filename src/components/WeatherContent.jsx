import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Typography, Grid, Box } from '@material-ui/core';

const WeatherContent = ({ response }) => {
    let formatedWind = response.wind.deg;
    switch (true) {
        case (10 < formatedWind && formatedWind < 80):
            formatedWind = 'NE';
            break;
        case (80 <= formatedWind && formatedWind <= 100):
            formatedWind = 'E';
            break;
        case (100 < formatedWind && formatedWind < 170):
            formatedWind = 'ES';
            break;
        case (170 <= formatedWind && formatedWind <= 190):
            formatedWind = 'E';
            break;
        case (190 < formatedWind && formatedWind < 260):
            formatedWind = 'SW';
            break;
        case (260 <= formatedWind && formatedWind <= 350):
            formatedWind = 'W';
            break;
        default: formatedWind = 'NW';
            break;
    }

    return (
        <Box className='weatherContent' py={5}>
            <Grid container justify="center"  >
                <Grid xs={12} sm={6}>
                    <Box py={4}>
                        <Typography align="center" variant='h2' >{response.name} </Typography>
                    </Box>
                </Grid>
                <Grid xs={12} sm={6}>

                    <Box py={4}>
                        <Typography align="center" variant='h2'  >{Math.round(response.main.temp)}&#8451; </Typography>

                    </Box>
                </Grid>
            </Grid>
            <TableContainer component={Paper} >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant='h5'>Temperature</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant='h5'>Sky</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'> Now: {Math.round(response.main.temp)}&#8451;<br /> </Typography>
                                <Typography variant='subtitle1'>Feels Like: {Math.round(response.main.feels_like)}&#8451;<br /></Typography>
                                <Typography variant='subtitle1'>Max: {Math.round(response.main.temp_max)}&#8451;<br /></Typography>
                                <Typography variant='subtitle1'>Min: {Math.round(response.main.temp_min)}&#8451;<br /></Typography>
                            </TableCell>
                            <TableCell>
                                <img src={`http://openweathermap.org/img/wn/${response.weather[0].icon}.png`} alt={response.weather[0].main} /><br />
                                <Typography variant='subtitle1'> {response.weather[0].main}<br /></Typography>
                                <Typography variant='subtitle1'> {response.weather[0].description}<br /></Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant='h5'>Measurments</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant='h5'>Wind</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle1'> Humidity: {response.main.humidity} %<br /></Typography>
                                <Typography variant='subtitle1'> Pressure: {response.main.pressure} hPa<br /></Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant='subtitle1'> Speed: {response.wind.speed} meter/sec<br /></Typography>
                                <Typography variant='subtitle1'> Direction: {formatedWind}<br /></Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            {/* {response.name} <br /> */}
            {/* {response.main.feels_like}<br/> */}
            {/* {response.main.humidity} %<br/>
            {response.main.pressure} hPa<br/> */}
            {/* {response.main.temp}<br/>
            {response.main.temp_max}<br/>
            {response.main.temp_min}<br/> */}
            {/* {response.sys.country}<br /> */}
            {/* {response.weather[0].description}<br/>
            <img src={`http://openweathermap.org/img/wn/${response.weather[0].icon}.png`} /><br/>
            {response.weather[0].main}<br/> */}
            {/* {response.wind.speed} meter/sec<br/>
            {response.wind.deg} direction<br/> */}
        </Box>
    )
}

export default WeatherContent
