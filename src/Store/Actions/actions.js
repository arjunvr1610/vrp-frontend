export const uploadFile = (file) => {
    return (dispatch) => {
        dispatch({
            type: 'UPLOAD',
            payload: file
        })
    }
}

export const storeRoutes = (route) => {
    return (dispatch) => {
        dispatch({
            type: 'STORE_ROUTES',
            payload: route
        })
    }
}