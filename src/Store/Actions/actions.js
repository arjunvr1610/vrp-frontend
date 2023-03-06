// file

import axios from "axios";

let URL_ = window.location.origin.replace(
  /([a-zA-Z0-9-:/]*-)(\d{2,4})(\.direct\.labs\.play-with-docker\.com)/g,
  "$13000$3"
);
if (window.location.hostname === "localhost") {
  URL_ =
    "http://localhost:8080";
}
URL_ = URL_ + "/graphql";

export const uploadFile = (file) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: URL_,
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          query: `
              mutation createProblemInfo($file : [Int]!){
                createProblemInfo(file:$file){
                  id
                }
              }
            `,
          variables: {
            file: file,
          },
        },
      });
      console.log(res);

      if (res.data.errors) {
        console.log(res.data.errors);
      }
      dispatch({
        type: "UPLOAD",
        payload: res.data.data.createProblemInfo.id,
      });
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  };
};

// routes
export const assignRoute = (payload) => {
  return (dispatch) => {
    dispatch({
      type: "ROUTE_ASSIGNED",
      payload: payload,
    });
  };
};

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

let intervalID;
export const fetchSolution = (id) => {
  return async (dispatch) => {
    try {
      console.log("chalra", id);

      // until backend gives sol we req, so 3 sec delay for low oopsie
      const request = async () => {
        const res = await axios({
          url: URL_,
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            query: `
                  query problemInfo($id: ID!) {
                    problemInfo(id: $id) {
                      id
                      name
                      dimension
                      vehicles
                      optimalValue
                      capacity
                      depotNode
                      nodeData {
                        node
                        latitude
                        longitude
                        demand
                        priority
                      }
                      solution {
                        routes {
                          tour
                          tourDistance
                        }
                        totalDistance
                      }
                    }
                  }
                `,
            variables: {
              id: id,
            },
          },
        });
        const result = res.data.data.problemInfo;
        let totalDemand = 0;
        let totalDistance = 0;
        for (const item of result.nodeData) {
          totalDemand = totalDemand + item.demand;
        }
        const solution = result.solution.routes;
        for (const item of solution) {
          totalDistance = totalDistance + item.tourDistance;
        }

        const payload = {
          solution,
          depotNode: result.depotNode,
          nodeData: result.nodeData,
          vehicles: result.vehicles,
          capacity: result.capacity,
          locations: result.dimension,
          totalDemand,
          totalDistance,
        };

        console.log("payload => ", payload);
        dispatch({
          type: "FETCH_SOL",
          payload: payload,
        });
      };
      await request();

      const fetchUpdatedSolution = async () => {
        const res = await axios({
          url: URL_,
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            query: `
                  query problemInfo($id: ID!) {
                    problemInfo(id: $id) {
                      id
                      dimension
                      solution {
                        routes {
                          tour
                          tourDistance
                        }
                        totalDistance
                      }
                    }
                  }
                `,
            variables: {
              id: id,
            },
          },
        });
        const result = res.data.data.problemInfo;
        let totalDistance =
          result.solution.routes
            ?.map((t) => t.tourDistance)
            ?.reduce((acc, l) => acc + l, 0);
        const sum =
          result.solution.routes
            ?.map((t) => t.tour.length - 1)
            ?.reduce((acc, l) => acc + l, 0) + 1;
        if (sum === result.dimension) {
          clearTimeout(intervalID);
          dispatch({
            type: "FETCH_UPDATED_SOL",
            payload: {totalDistance:totalDistance,result:result.solution.routes},
          });
        }
        console.log(result);
        console.log("SUM ", sum, result.dimension);
      };
      intervalID = setInterval(fetchUpdatedSolution, 3000);
    } catch (err) {
      throw new Error(err.message);
    }
  };
};

export const deleteSolution = (solutionId) => {
  return async (dispatch) => {
    const data = await axios({
      url: URL_,
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
