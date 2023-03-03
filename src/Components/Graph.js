import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

const Graph = () => {
  const [xaxis, setXaxis] = useState([]);
  const [yaxis, setYaxis] = useState([]);

  const [dataPoints, setDataPoints] = useState({});

  const response = {
    data: {
      problemInfo: {
        id: "640215d78255de0964940fbd",
        name: "A-n36-k5",
        dimension: 36,
        vehicles: 5,
        optimalValue: 799,
        capacity: 100,
        depotNode: 1,
        nodeData: [
          { node: 1, latitude: 15, longitude: 19, demand: 0, priority: 0 },
          { node: 2, latitude: 1, longitude: 49, demand: 1, priority: 0 },
          { node: 3, latitude: 87, longitude: 25, demand: 14, priority: 0 },
          { node: 4, latitude: 69, longitude: 65, demand: 15, priority: 0 },
          { node: 5, latitude: 93, longitude: 91, demand: 11, priority: 0 },
          { node: 6, latitude: 33, longitude: 31, demand: 18, priority: 0 },
          { node: 7, latitude: 71, longitude: 61, demand: 2, priority: 0 },
          { node: 8, latitude: 29, longitude: 9, demand: 22, priority: 0 },
          { node: 9, latitude: 93, longitude: 7, demand: 7, priority: 0 },
          { node: 10, latitude: 55, longitude: 47, demand: 18, priority: 0 },
          { node: 11, latitude: 23, longitude: 13, demand: 23, priority: 0 },
          { node: 12, latitude: 19, longitude: 47, demand: 12, priority: 0 },
          { node: 13, latitude: 57, longitude: 63, demand: 21, priority: 0 },
          { node: 14, latitude: 5, longitude: 95, demand: 2, priority: 0 },
          { node: 15, latitude: 65, longitude: 43, demand: 14, priority: 0 },
          { node: 16, latitude: 69, longitude: 1, demand: 9, priority: 0 },
          { node: 17, latitude: 3, longitude: 25, demand: 10, priority: 0 },
          { node: 18, latitude: 19, longitude: 91, demand: 4, priority: 0 },
          { node: 19, latitude: 21, longitude: 81, demand: 19, priority: 0 },
          { node: 20, latitude: 67, longitude: 91, demand: 2, priority: 0 },
          { node: 21, latitude: 41, longitude: 23, demand: 20, priority: 0 },
          { node: 22, latitude: 19, longitude: 75, demand: 15, priority: 0 },
          { node: 23, latitude: 15, longitude: 79, demand: 11, priority: 0 },
          { node: 24, latitude: 79, longitude: 47, demand: 6, priority: 0 },
          { node: 25, latitude: 19, longitude: 65, demand: 13, priority: 0 },
          { node: 26, latitude: 27, longitude: 49, demand: 19, priority: 0 },
          { node: 27, latitude: 29, longitude: 17, demand: 13, priority: 0 },
          { node: 28, latitude: 25, longitude: 65, demand: 8, priority: 0 },
          { node: 29, latitude: 59, longitude: 51, demand: 15, priority: 0 },
          { node: 30, latitude: 27, longitude: 95, demand: 18, priority: 0 },
          { node: 31, latitude: 21, longitude: 91, demand: 11, priority: 0 },
          { node: 32, latitude: 61, longitude: 83, demand: 21, priority: 0 },
          { node: 33, latitude: 15, longitude: 83, demand: 12, priority: 0 },
          { node: 34, latitude: 31, longitude: 87, demand: 2, priority: 0 },
          { node: 35, latitude: 71, longitude: 41, demand: 23, priority: 0 },
          { node: 36, latitude: 91, longitude: 21, demand: 11, priority: 0 },
        ],
        solution: {
          routes: [
            { tour: [1, 15, 35, 24, 3, 36, 9, 5, 16], tourDistance: 17956 },
            { tour: [1, 13, 32, 20, 4, 7, 29, 10], tourDistance: 16273 },
            { tour: [1, 11, 8], tourDistance: 3731 },
            { tour: [1, 17, 2, 12, 26, 6, 21, 27], tourDistance: 13089 },
            {
              tour: [1, 22, 19, 34, 30, 31, 18, 14, 33, 23],
              tourDistance: 19958,
            },
            { tour: [1, 25, 28], tourDistance: 10474 },
          ],
          totalDistance: null,
        },
        file: [
          78, 65, 77, 69, 32, 58, 32, 65, 45, 110, 51, 54, 45, 107, 53, 10, 67,
          79, 77, 77, 69, 78, 84, 32, 58, 32, 40, 65, 117, 103, 101, 114, 97,
          116, 32, 101, 116, 32, 97, 108, 44, 32, 78, 111, 32, 111, 102, 32,
          116, 114, 117, 99, 107, 115, 58, 32, 53, 44, 32, 79, 112, 116, 105,
          109, 97, 108, 32, 118, 97, 108, 117, 101, 58, 32, 55, 57, 57, 41, 10,
          84, 89, 80, 69, 32, 58, 32, 67, 86, 82, 80, 10, 68, 73, 77, 69, 78,
          83, 73, 79, 78, 32, 58, 32, 51, 54, 10, 69, 68, 71, 69, 95, 87, 69,
          73, 71, 72, 84, 95, 84, 89, 80, 69, 32, 58, 32, 69, 85, 67, 95, 50,
          68, 32, 10, 67, 65, 80, 65, 67, 73, 84, 89, 32, 58, 32, 49, 48, 48,
          10, 78, 79, 68, 69, 95, 67, 79, 79, 82, 68, 95, 83, 69, 67, 84, 73,
          79, 78, 32, 10, 32, 49, 32, 49, 53, 32, 49, 57, 10, 32, 50, 32, 49,
          32, 52, 57, 10, 32, 51, 32, 56, 55, 32, 50, 53, 10, 32, 52, 32, 54,
          57, 32, 54, 53, 10, 32, 53, 32, 57, 51, 32, 57, 49, 10, 32, 54, 32,
          51, 51, 32, 51, 49, 10, 32, 55, 32, 55, 49, 32, 54, 49, 10, 32, 56,
          32, 50, 57, 32, 57, 10, 32, 57, 32, 57, 51, 32, 55, 10, 32, 49, 48,
          32, 53, 53, 32, 52, 55, 10, 32, 49, 49, 32, 50, 51, 32, 49, 51, 10,
          32, 49, 50, 32, 49, 57, 32, 52, 55, 10, 32, 49, 51, 32, 53, 55, 32,
          54, 51, 10, 32, 49, 52, 32, 53, 32, 57, 53, 10, 32, 49, 53, 32, 54,
          53, 32, 52, 51, 10, 32, 49, 54, 32, 54, 57, 32, 49, 10, 32, 49, 55,
          32, 51, 32, 50, 53, 10, 32, 49, 56, 32, 49, 57, 32, 57, 49, 10, 32,
          49, 57, 32, 50, 49, 32, 56, 49, 10, 32, 50, 48, 32, 54, 55, 32, 57,
          49, 10, 32, 50, 49, 32, 52, 49, 32, 50, 51, 10, 32, 50, 50, 32, 49,
          57, 32, 55, 53, 10, 32, 50, 51, 32, 49, 53, 32, 55, 57, 10, 32, 50,
          52, 32, 55, 57, 32, 52, 55, 10, 32, 50, 53, 32, 49, 57, 32, 54, 53,
          10, 32, 50, 54, 32, 50, 55, 32, 52, 57, 10, 32, 50, 55, 32, 50, 57,
          32, 49, 55, 10, 32, 50, 56, 32, 50, 53, 32, 54, 53, 10, 32, 50, 57,
          32, 53, 57, 32, 53, 49, 10, 32, 51, 48, 32, 50, 55, 32, 57, 53, 10,
          32, 51, 49, 32, 50, 49, 32, 57, 49, 10, 32, 51, 50, 32, 54, 49, 32,
          56, 51, 10, 32, 51, 51, 32, 49, 53, 32, 56, 51, 10, 32, 51, 52, 32,
          51, 49, 32, 56, 55, 10, 32, 51, 53, 32, 55, 49, 32, 52, 49, 10, 32,
          51, 54, 32, 57, 49, 32, 50, 49, 10, 68, 69, 77, 65, 78, 68, 95, 83,
          69, 67, 84, 73, 79, 78, 32, 10, 49, 32, 48, 32, 10, 50, 32, 49, 32,
          10, 51, 32, 49, 52, 32, 10, 52, 32, 49, 53, 32, 10, 53, 32, 49, 49,
          32, 10, 54, 32, 49, 56, 32, 10, 55, 32, 50, 32, 10, 56, 32, 50, 50,
          32, 10, 57, 32, 55, 32, 10, 49, 48, 32, 49, 56, 32, 10, 49, 49, 32,
          50, 51, 32, 10, 49, 50, 32, 49, 50, 32, 10, 49, 51, 32, 50, 49, 32,
          10, 49, 52, 32, 50, 32, 10, 49, 53, 32, 49, 52, 32, 10, 49, 54, 32,
          57, 32, 10, 49, 55, 32, 49, 48, 32, 10, 49, 56, 32, 52, 32, 10, 49,
          57, 32, 49, 57, 32, 10, 50, 48, 32, 50, 32, 10, 50, 49, 32, 50, 48,
          32, 10, 50, 50, 32, 49, 53, 32, 10, 50, 51, 32, 49, 49, 32, 10, 50,
          52, 32, 54, 32, 10, 50, 53, 32, 49, 51, 32, 10, 50, 54, 32, 49, 57,
          32, 10, 50, 55, 32, 49, 51, 32, 10, 50, 56, 32, 56, 32, 10, 50, 57,
          32, 49, 53, 32, 10, 51, 48, 32, 49, 56, 32, 10, 51, 49, 32, 49, 49,
          32, 10, 51, 50, 32, 50, 49, 32, 10, 51, 51, 32, 49, 50, 32, 10, 51,
          52, 32, 50, 32, 10, 51, 53, 32, 50, 51, 32, 10, 51, 54, 32, 49, 49,
          32, 10, 68, 69, 80, 79, 84, 95, 83, 69, 67, 84, 73, 79, 78, 32, 10,
          32, 49, 32, 32, 10, 32, 45, 49, 32, 32, 10, 69, 79, 70, 32, 10,
        ],
        __typename: "ProblemInfo",
      },
    },
  };

  useEffect(() => {
    createAxis();
    createEdge();
  }, []);

  const createAxis = () => {
    for (const ele of response.data.problemInfo.nodeData) {
      setXaxis((xaxis) => [...xaxis, ele.latitude]);
      setYaxis((yaxis) => [...yaxis, ele.longitude]);
    }
  };

  const pointsData = [
    {
      x: xaxis,
      y: yaxis,
      mode: "markers",
      marker: {
        color: "black",
        size: 10,
      },
      type: "scatter",
    },
    {
      x: [response.data.problemInfo.nodeData[response.data.problemInfo.depotNode]
        .latitude],
      y: [response.data.problemInfo.nodeData[response.data.problemInfo.depotNode]
        .longitude],
      mode: "markers",
      marker: {
        color: "red",
        symbol: 'cross',
        size: 10,
      },
      type: "scatter",
    },
  ];
  const createEdge = () => {
    const colors = ["red", "blue", "green", "black", "purple","orange"];
    let i = 0
    for (let tour of response.data.problemInfo.solution.routes) {
      const x = [];
      const y = [];
      for (const ele of tour.tour) {
        console.log("element of tour =>", ele);
        x.push(response.data.problemInfo.nodeData[ele - 1].latitude);
        y.push(response.data.problemInfo.nodeData[ele - 1].longitude);
      }

      pointsData.push({
        x: x,
        y: y,
        mode: "lines",
        line: {
          color: colors[i],
          width: 2,
        },
        type: "scatter",
      });
      i++;
    }
    setDataPoints(pointsData);
  };

  return (
    <>
      <Plot
        data={dataPoints}
        layout={{ width: 700, height: 500, title: "Routing" }}
      />
    </>
  );
};

export default Graph;
