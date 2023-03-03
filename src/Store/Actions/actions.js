// file

import axios from "axios";

export const uploadFile = (file) => {
  return async (dispatch) => {
    // const file = [
    //   78, 65, 77, 69, 32, 58, 32, 65, 45, 110, 51, 54, 45, 107, 53, 10, 67, 79,
    //   77, 77, 69, 78, 84, 32, 58, 32, 40, 65, 117, 103, 101, 114, 97, 116, 32,
    //   101, 116, 32, 97, 108, 44, 32, 78, 111, 32, 111, 102, 32, 116, 114, 117,
    //   99, 107, 115, 58, 32, 53, 44, 32, 79, 112, 116, 105, 109, 97, 108, 32,
    //   118, 97, 108, 117, 101, 58, 32, 55, 57, 57, 41, 10, 84, 89, 80, 69, 32,
    //   58, 32, 67, 86, 82, 80, 10, 68, 73, 77, 69, 78, 83, 73, 79, 78, 32, 58,
    //   32, 51, 54, 10, 69, 68, 71, 69, 95, 87, 69, 73, 71, 72, 84, 95, 84, 89,
    //   80, 69, 32, 58, 32, 69, 85, 67, 95, 50, 68, 32, 10, 67, 65, 80, 65, 67,
    //   73, 84, 89, 32, 58, 32, 49, 48, 48, 10, 78, 79, 68, 69, 95, 67, 79, 79,
    //   82, 68, 95, 83, 69, 67, 84, 73, 79, 78, 32, 10, 32, 49, 32, 49, 53, 32,
    //   49, 57, 10, 32, 50, 32, 49, 32, 52, 57, 10, 32, 51, 32, 56, 55, 32, 50,
    //   53, 10, 32, 52, 32, 54, 57, 32, 54, 53, 10, 32, 53, 32, 57, 51, 32, 57,
    //   49, 10, 32, 54, 32, 51, 51, 32, 51, 49, 10, 32, 55, 32, 55, 49, 32, 54,
    //   49, 10, 32, 56, 32, 50, 57, 32, 57, 10, 32, 57, 32, 57, 51, 32, 55, 10,
    //   32, 49, 48, 32, 53, 53, 32, 52, 55, 10, 32, 49, 49, 32, 50, 51, 32, 49,
    //   51, 10, 32, 49, 50, 32, 49, 57, 32, 52, 55, 10, 32, 49, 51, 32, 53, 55,
    //   32, 54, 51, 10, 32, 49, 52, 32, 53, 32, 57, 53, 10, 32, 49, 53, 32, 54,
    //   53, 32, 52, 51, 10, 32, 49, 54, 32, 54, 57, 32, 49, 10, 32, 49, 55, 32,
    //   51, 32, 50, 53, 10, 32, 49, 56, 32, 49, 57, 32, 57, 49, 10, 32, 49, 57,
    //   32, 50, 49, 32, 56, 49, 10, 32, 50, 48, 32, 54, 55, 32, 57, 49, 10, 32,
    //   50, 49, 32, 52, 49, 32, 50, 51, 10, 32, 50, 50, 32, 49, 57, 32, 55, 53,
    //   10, 32, 50, 51, 32, 49, 53, 32, 55, 57, 10, 32, 50, 52, 32, 55, 57, 32,
    //   52, 55, 10, 32, 50, 53, 32, 49, 57, 32, 54, 53, 10, 32, 50, 54, 32, 50,
    //   55, 32, 52, 57, 10, 32, 50, 55, 32, 50, 57, 32, 49, 55, 10, 32, 50, 56,
    //   32, 50, 53, 32, 54, 53, 10, 32, 50, 57, 32, 53, 57, 32, 53, 49, 10, 32,
    //   51, 48, 32, 50, 55, 32, 57, 53, 10, 32, 51, 49, 32, 50, 49, 32, 57, 49,
    //   10, 32, 51, 50, 32, 54, 49, 32, 56, 51, 10, 32, 51, 51, 32, 49, 53, 32,
    //   56, 51, 10, 32, 51, 52, 32, 51, 49, 32, 56, 55, 10, 32, 51, 53, 32, 55,
    //   49, 32, 52, 49, 10, 32, 51, 54, 32, 57, 49, 32, 50, 49, 10, 68, 69, 77,
    //   65, 78, 68, 95, 83, 69, 67, 84, 73, 79, 78, 32, 10, 49, 32, 48, 32, 10,
    //   50, 32, 49, 32, 10, 51, 32, 49, 52, 32, 10, 52, 32, 49, 53, 32, 10, 53,
    //   32, 49, 49, 32, 10, 54, 32, 49, 56, 32, 10, 55, 32, 50, 32, 10, 56, 32,
    //   50, 50, 32, 10, 57, 32, 55, 32, 10, 49, 48, 32, 49, 56, 32, 10, 49, 49,
    //   32, 50, 51, 32, 10, 49, 50, 32, 49, 50, 32, 10, 49, 51, 32, 50, 49, 32,
    //   10, 49, 52, 32, 50, 32, 10, 49, 53, 32, 49, 52, 32, 10, 49, 54, 32, 57,
    //   32, 10, 49, 55, 32, 49, 48, 32, 10, 49, 56, 32, 52, 32, 10, 49, 57, 32,
    //   49, 57, 32, 10, 50, 48, 32, 50, 32, 10, 50, 49, 32, 50, 48, 32, 10, 50,
    //   50, 32, 49, 53, 32, 10, 50, 51, 32, 49, 49, 32, 10, 50, 52, 32, 54, 32,
    //   10, 50, 53, 32, 49, 51, 32, 10, 50, 54, 32, 49, 57, 32, 10, 50, 55, 32,
    //   49, 51, 32, 10, 50, 56, 32, 56, 32, 10, 50, 57, 32, 49, 53, 32, 10, 51,
    //   48, 32, 49, 56, 32, 10, 51, 49, 32, 49, 49, 32, 10, 51, 50, 32, 50, 49,
    //   32, 10, 51, 51, 32, 49, 50, 32, 10, 51, 52, 32, 50, 32, 10, 51, 53, 32,
    //   50, 51, 32, 10, 51, 54, 32, 49, 49, 32, 10, 68, 69, 80, 79, 84, 95, 83,
    //   69, 67, 84, 73, 79, 78, 32, 10, 32, 49, 32, 32, 10, 32, 45, 49, 32, 32,
    //   10, 69, 79, 70, 32, 10,
    // ];
    const data = await axios({
      url: "http://ip172-18-0-92-cg0firgsf2q000c86peg-3000.direct.labs.play-with-docker.com/graphql",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        query: `
            mutation {
              createProblemInfo(file:${file}){
                id
                name
                vehicles
                depotNode
                nodeData
                solution
              }
            }
          `,
        variables: {
          file: file,
        },
      },
    });

    console.log(data);
    dispatch({
      type: "UPLOAD",
      payload: file,
    });
  };
};

// routes
export const storeRoutes = (routeData) => {
  return (dispatch) => {
    dispatch({
      type: "STORE_ROUTES",
      payload: routeData,
    });
  };
};

export const selectRoute = (routeData) => {
  return (dispatch) => {
    dispatch({
      type: "SELECT_ROUTE",
      payload: routeData,
    });
  };
};

export const emptyRoutes = () => {
  return (dispatch) => {
    dispatch({
      type: "EMPTY_ROUTES",
      payload: null,
    });
  };
};

// nodes
export const storeNodes = (locsData) => {
  return (dispatch) => {
    dispatch({
      type: "STORE_NODES",
      payload: locsData,
    });
  };
};

export const addNodes = (locsData) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_NODES",
      payload: locsData,
    });
  };
};

export const removeNodes = (locsData) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_NODES",
      payload: locsData,
    });
  };
};

export const submitNodes = (locsData) => {
  return (dispatch) => {
    dispatch({
      type: "SUBMIT_NODES",
      payload: locsData,
    });
  };
};

// solution
export const storeSolution = (solutionData) => {
  return (dispatch) => {
    dispatch({
      type: "STORE_SOL",
      payload: solutionData,
    });
  };
};

export const saveSolution = (solutionData) => {
  return (dispatch) => {
    dispatch({
      type: "SAVE_SOL",
      payload: solutionData,
    });
  };
};

export const fetchSolution = (id) => {
  return async (dispatch) => {
    let sol = null;
    let setTimeoutId;
    
    //until backend gives sol we req, so 3 sec delay for low oopsie
    const recursiveReq = async () => {
      const data = await axios({
        url: "http://ip172-18-0-92-cg0firgsf2q000c86peg-3000.direct.labs.play-with-docker.com/graphql",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          query: `
                  problemInfo(id:${id}){
                    id
                    name
                    vehicles
                    depotNode
                    nodeData
                    solution
                    capacity
                  }
              `,
          variables: {
            id: id,
          },
        },
      });
      sol = data.solution;
      if (sol === null) {
        setTimeoutId = setTimeout(recursiveReq, 3000);
      } else {
        clearTimeout(setTimeoutId);
      }
    };

    recursiveReq();
    dispatch({
      type: "FETCH_SOL",
      payload: sol,
    });
  };
};

export const deleteSolution = (solutionId) => {
  return async (dispatch) => {
    const data = await axios({
      url: "http://ip172-18-0-92-cg0firgsf2q000c86peg-3000.direct.labs.play-with-docker.com/graphql",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        query: `
            mutation {
              deleteProblemInfo(id:${solutionId}}){
                id
                name
                vehicles
                depotNode
                nodeData
                solution
              }
            }
          `,
        variables: {
          id: solutionId,
        },
      },
    });
    console.log(data);
    dispatch({
      type: "DELETE_SOL",
      payload: solutionId,
    });
  };
};

// modal actions
export const openAddLocModal = () => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_ADD_LOC",
      payload: null,
    });
  };
};

export const closeAddLocModal = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_ADD_LOC",
      payload: null,
    });
  };
};

export const openRemoveLocModal = () => {
  return (dispatch) => {
    dispatch({
      type: "OPEN_DEL_LOC",
      payload: null,
    });
  };
};

export const closeRemoveLocModal = () => {
  return (dispatch) => {
    dispatch({
      type: "CLOSE_DEL_LOC",
      payload: null,
    });
  };
};
