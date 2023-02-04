const initialState = {
    mapRoutes: [],
    selectedRoute: null,
}

const reducer = (state = initialState, action) => {
    if (action.type === 'STORE_ROUTES') {
        console.log("payload = ", action.payload)
        const payload = action.payload;
        return ({
            mapRoutes: [...state.mapRoutes, payload],
            selectedRoute: null,
        });
    } 

    else if (action.type === 'SELECT_ROUTE') {
        return ({
            mapRoutes: [...state.mapRoutes],
            selectedRoute: action.payload,
        });
    }

    else if (action.type === 'EMPTY_ROUTES') {
        return ({
            mapRoutes: [],
            selectedRoute: state.selectedRoute,
        });
    }

    else {
        return state;
    }
}

export default reducer;