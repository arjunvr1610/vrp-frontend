import React from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const ListMaterial = (props) => {
    const {Tour, vehicle, cost, color} = props
    
    const details = (
        <div>
            <Typography variant="h6" marginTop={2} color={color}>{Tour}</Typography>
            <Typography>Vehicle: {vehicle}</Typography>
            <Typography marginBottom={2}>Cost: {cost}</Typography>
        </div>
    )
    return (
        <>
            <FormControlLabel
                control={
                    <Checkbox />
                }
                label={details}
            />
            <Divider variant="inset" component="li" />
        </>
    );
}

export default ListMaterial;
