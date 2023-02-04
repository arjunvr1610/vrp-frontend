const initialState = {
    openAddLoc: false,
    openRemoveLoc: false
}

const reducer = (state = initialState, action) => {
    if (action.type === 'OPEN_ADD_LOC') {
        return ({
            openAddLoc: true,
            openRemoveLoc: false
        })
    }

    else if (action.type === 'CLOSE_ADD_LOC') {
        return ({
            openAddLoc: false,
            openRemoveLoc: false
        })
    }

    else {
        return state
    }
}

export default reducer