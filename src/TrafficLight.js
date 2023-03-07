import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { TrafficLightdiv, Bulb } from './StyledComponents';

const TrafficLight = () => {
    const [color, setColor] = useState('red');
    const intervalRef = useRef();
    // const updateColor = () => {
    //     intervalRef.current = setInterval(() => {
    //         switch (color) {
    //             case 'red':
    //                 setColor('yellow');
    //                 break;
    //             case 'yellow':
    //                 setColor('green');
    //                 break;
    //             case 'green':
    //                 setColor('red');
    //                 break;
    //             default:
    //                 setColor('red');
    //         }
    //     }, 1000);


    // }



    // const interval = setInterval(async () => {
    //     switch (color) {
    //         case 'red':
    //             setColor('yellow');
    //             await new Promise(resolve => setTimeout(resolve, 1));
    //             break;
    //         case 'yellow':
    //             setColor('green');
    //             await new Promise(resolve => setTimeout(resolve, 1));
    //             break;
    //         case 'green':
    //             setColor('red');
    //             await new Promise(resolve => setTimeout(resolve, 1));
    //             break;
    //         default:
    //             setColor('red');
    //             break;
    //     }
    // }, 1000);

    useEffect(() => {
        const updateColor = () => {

            intervalRef.current = setInterval(() => {
                switch (color) {
                    case 'red':
                        setColor('yellow');
                        break;
                    case 'yellow':
                        setColor('green');
                        break;
                    case 'green':
                        setColor('red');
                        break;
                    default:
                        setColor('red');
                }
            }, 1000);

        }

        updateColor();
        return () => clearInterval(intervalRef.current);
    });




    // updateColor();
    // if (color === 'green') {
    //     clearInterval(intervalRef.current);
    //     updateColor();
    // }
    // return () => clearInterval(intervalRef.current);

    const isredEnabled = () => {
        if (color === 'red') {
            return true;
        }
        return false;
    }
    const isyellowEnabled = () => {
        if (color === 'yellow') {
            return true;
        }
        return false;
    }
    const isgreenEnabled = () => {
        if (color === 'green') {
            return true;
        }
        return false;
    }


    return (

        <TrafficLightdiv>
            <Bulb isActive={isredEnabled()} color={'red'} />
            <Bulb color={'yellow'} isActive={isyellowEnabled()} />
            <Bulb color={'green'} isActive={isgreenEnabled()} />
            {/* <div className={`bulb ${color === 'red' ? 'red' : 'off'}`} />
            <div className={`bulb ${color === 'yellow' ? 'yellow' : 'off'}`} />
            <div className={`bulb ${color === 'green' ? 'green' : 'off'}`} /> */}
        </TrafficLightdiv>

    );
}


export default TrafficLight;