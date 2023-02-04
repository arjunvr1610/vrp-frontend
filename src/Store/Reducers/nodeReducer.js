const initialState = {
    nodes: [],
}

const reducer = (state = initialState, action) => {
    if (action.type === 'STORE_NODES') {
        console.log("nodes payload = ", action.payload)
        const payload = action.payload;
        return ({
            nodes: payload,
        });
    } 

    else {
        return state;
    }
}

export default reducer;