const initialState = {
    routes: [],
    nodes: [],
    totalDistance: 0,
    totalDemand: 0,
    totalVehicles: 0
}

const reducer = (state = initialState, action) => {

    if (action.type === 'STORE_SOL') {
        console.log(action.payload)
        const payload = action.payload;
        return state
    }

    else if (action.type === 'SAVE_SOL') {
        const payload = action.payload;
        return state
    }

    else if (action.type === 'FETCH_SOL') {
        const payload = action.payload;
        return state
    }

    else if (action.type === 'DELETE_SOL') {
        const payload = action.payload;
        console.log(payload);
        return state;
    }

    else {
        return state;
    }
}

export default reducer;