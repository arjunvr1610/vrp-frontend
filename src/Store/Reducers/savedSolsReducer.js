const initialState = {
    savedSolutionsData: [],
};

const reducer = (state = initialState, action) => {
    if (action.type === 'FETCH_SAVED_SOLS') {
        return {
            ...state,
            savedSolutionsData: action.payload
        }
    } else {
        return state;
    }
}

export default reducer;