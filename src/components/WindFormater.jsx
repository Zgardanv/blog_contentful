import React from 'react';

const WindFormater = (formatedWind) => {
    switch (true) {
        case (10 < formatedWind && formatedWind < 80):
            formatedWind = 'NEast';
            break;
        case (80 <= formatedWind && formatedWind <= 100):
            formatedWind = 'East';
            break;
        case (100 < formatedWind && formatedWind < 170):
            formatedWind = 'ESouth';
            break;
        case (170 <= formatedWind && formatedWind <= 190):
            formatedWind = 'South';
            break;
        case (190 < formatedWind && formatedWind < 260):
            formatedWind = 'SWest';
            break;
        case (260 <= formatedWind && formatedWind <= 350):
            formatedWind = 'West';
            break;
        case (260 <= formatedWind && formatedWind <= 350):
            formatedWind = 'NWest';
            break;
        default: formatedWind = 'North';
            break;
    }
    return formatedWind;
}

export default WindFormater
