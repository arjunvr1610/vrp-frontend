// file
export const uploadFile = (file) => {
    return (dispatch) => {
        dispatch({
            type: 'UPLOAD',
            payload: file
        })
    }
}

// routes
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

// nodes
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

export const submitNodes = (locsData) => {
    return (dispatch) => {
        dispatch({
            type: 'SUBMIT_NODES',
            payload: locsData
        })
    }
}

// solution
export const storeSolution = (solutionData) => {
    return (dispatch) => {
        dispatch({
            type: 'STORE_SOL',
            payload: solutionData
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

// modal actions
export const openAddLocModal = () => {
    return (dispatch) => {
        dispatch({
            type: 'OPEN_ADD_LOC',
            payload: null
        })
    }
}

export const closeAddLocModal = () => {
    return (dispatch) => {
        dispatch({
            type: 'CLOSE_ADD_LOC',
            payload: null
        })
    }
}

export const openRemoveLocModal = () => {
    return (dispatch) => {
        dispatch({
            type: 'OPEN_DEL_LOC',
            payload: null
        })
    }
}

export const closeRemoveLocModal = () => {
    return (dispatch) => {
        dispatch({
            type: 'CLOSE_DEL_LOC',
            payload: null
        })
    }
}