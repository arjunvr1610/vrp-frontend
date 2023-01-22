export const uploadFile = (file) => {
    return (dispatch) => {
        dispatch({
            type: 'UPLOAD',
            payload: file
        })
    }
}