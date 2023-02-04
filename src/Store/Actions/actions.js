export const uploadFile = (file) => {
    return (dispatch) => {
        dispatch({
            type: 'UPLOAD',
            payload: file
        })
    }
}

export const storeRoutes = (routeData) => {
    return (dispatch) => {
        dispatch({
            type: 'STORE_ROUTES',
            payload: routeData
        })
    }
}

export const selectRoute = (routeData) => {
    return (dispatch) => {
        dispatch({
            type: 'SELECT_ROUTE',
            payload: routeData
        })
    }
}

export const emptyRoutes = () => {
    return (dispatch) => {
        dispatch({
            type: 'EMPTY_ROUTES',
            payload: null
        })
    }
}

export const storeNodes = (locsData) => {
    return (dispatch) => {
        dispatch({
            type: 'STORE_NODES',
            payload: locsData
        })
    }
}

export const addNodes = (locsData) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_NODES',
            payload: locsData
        })
    }
}

export const removeNodes = (locsData) => {
    return (dispatch) => {
        dispatch({
            type: 'REMOVE_NODES',
            payload: locsData
        })
    }
}

export const saveSolution = (solutionData) => {
    return (dispatch) => {
        dispatch({
            type: 'SAVE_SOL',
            payload: solutionData
        })
    }
}

export const fetchSolution = (solutionData) => {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_SOL',
            payload: solutionData
        })
    }
}

export const deleteSolution = (solutionData) => {
    return (dispatch) => {
        dispatch({
            type: 'DELETE_SOL',
            payload: solutionData
        })
    }
}