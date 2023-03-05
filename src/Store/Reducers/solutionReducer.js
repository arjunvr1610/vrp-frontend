const initialState = {
  routes: [],
  nodes: [],
  totalDistance: 0,
  totalDemand: 0,
  totalVehicles: 0,
  solutionData: null,
  routeSolutionStatus: false,
  routeAssigned: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === "STORE_SOL") {
    return state;
  } else if (action.type === "SAVE_SOL") {
    return state;
  } else if (action.type === "FETCH_SOL") {
    return {
      ...state,
      solutionData: action.payload,
      routeSolutionStatus: true,
    };
  } else if (action.type === "DELETE_SOL") {
    return state;
  } else if (action.type === "ROUTE_ASSIGNED") {
    return {
      ...state,
      routeAssigned: action.payload,
    };
  } else {
    return state;
  }
};

export default reducer;
