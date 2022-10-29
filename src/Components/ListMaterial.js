import React from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const ListMaterial = (props) => {
    const {Tour, vehicle, cost} = props
    const  generateRandomColor = () => {
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal; 
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);   
        return `#${randColor.toUpperCase()}`
    }
    
    const details = (
        <div>
            <Typography variant="h6" marginTop={2} color={generateRandomColor()}>{Tour}</Typography>
            <Typography>Vehicle: {vehicle}</Typography>
            <Typography marginBottom={2}>Cost: {cost}</Typography>
        </div>
    )
    return (
        <>
            <FormControlLabel
                control={
                    <Checkbox/>
                }
                label={details}
            />
            <Divider variant="inset" component="li" />
        </>
    );
}

export default ListMaterial;
