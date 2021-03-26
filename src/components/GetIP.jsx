import React from 'react';
import axios from 'axios';
import { store } from '../App';
import { clientCity } from './redux/actions';


const GetIP = async () => {

    return await axios.get('https://ipapi.co/json/').then(response => (localStorage.setItem('clientCity', response.data.city)))

    // return axios.get('https://ipapi.co/json/')
    // .then(response => localStorage.setItem('clientCity', response.data.city))


}

export default GetIP
