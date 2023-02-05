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

    else if (action.type === 'CLOSE_ADD_LOC' || action.type === 'CLOSE_DEL_LOC') {
        return ({
            openAddLoc: false,
            openRemoveLoc: false
        })
    }

    else if (action.type === 'OPEN_DEL_LOC') {
        return ({
            openAddLoc: false,
            openRemoveLoc: true
        })
    }

    else {
        return state
    }
}

export default reducer