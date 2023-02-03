const initialState = {
    mapRoutes: [],
    nodes: [],
    colors:[]
}

const reducer = (state = initialState, action) => {
    if (action.type === 'STORE_ROUTES') {
        console.log("payload = ", action.payload)
        const payload = action.payload;
        return ({
            mapRoutes: [...state.mapRoutes, payload],
            nodes: [...state.nodes],
            colors: [...state.colors]
        });
    } else {
        return state;
    }
}

export default reducer;