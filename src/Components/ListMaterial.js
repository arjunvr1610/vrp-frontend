import React from 'react';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from '../Store/index';

const ListMaterial = (props) => {
    const { Tour, vehicle, cost, color } = props;
    const dispatch = useDispatch();
    const { selectRoute } = bindActionCreators(actionCreators, dispatch);
    const mapRoutes = useSelector(state => state.routes.mapRoutes);

    const handleClick = () => {
        console.log("checked = ", Tour)
        console.log("checked route = ", mapRoutes[Tour])
        selectRoute(mapRoutes[Tour])
    }

    const secText = (
        <div>
            <Typography>Vehicle: {vehicle}</Typography>
            <Typography marginBottom={2}>Cost: {cost}</Typography>
        </div>
    )
    const primText = (
        <div>
            <Typography variant="h6" marginTop={2} color={color}>{`Tour ${Tour}`}</Typography>
        </div>
    )
    return (
        <>
            <ListItemButton
                alignItems='flex-start'
                divider={true}
                onClick={() => handleClick()}
            >
                <ListItemText primary={primText} secondary={secText} />
            </ListItemButton>
        </>
    );
}

export default ListMaterial;
