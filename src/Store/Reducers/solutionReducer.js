const initialState = {
    routes: [],
    nodes: [],
    totalDistance: 0,
    totalDemand: 0,
    totalVehicles: 0
}

const reducer = (state = initialState, action) => {

    if (action.type === 'STORE_SOL') {
        return state
    }

    else if (action.type === 'SAVE_SOL') {
        return state
    }

    else if (action.type === 'FETCH_SOL') {
        return state
    }

    else if (action.type === 'DELETE_SOL') {
        return state;
    }

    else {
        return state;
    }
}

export default reducer;