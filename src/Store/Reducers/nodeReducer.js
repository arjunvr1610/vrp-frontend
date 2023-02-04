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

    else if (action.type === 'ADD_NODES') {
        const payload = action.payload;
        console.log(payload);
        return ({
            nodes: [...state.nodes, payload],
        });
    } 

    else if (action.type === 'REMOVE_NODES') {
        console.log("nodes payload = ", action.payload)
        // const payload = action.payload;
        // return ({
        //     nodes: payload,
        // });
    }

    else {
        return state;
    }
}

export default reducer;