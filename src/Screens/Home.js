import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Map from "../Components/Map";
import Accords from "../Components/Accords.js";
import TrackingBar from "../Components/TrackingBar";
import AddLocModal from "../Components/AddLocModal";
import RemoveLocModal from "../Components/RemoveLocModal";
import { useSelector } from "react-redux";
import Switch from "@mui/material/Switch";
import Graph from "../Components/Graph";
import { CircularProgress } from "@mui/material";

const Home = () => {
  const { routeSolutionStatus } = useSelector((state) => state.solution);
  let graphReady = useSelector((state) => state.solution.graphReady);

  const [isMapView, setisMapView] = useState(false);
  return (
    <Box
      component="main"
      sx={{ height: "100vh", flexGrow: 1, p: 3, bgcolor: "#F4F6F6" }}
    >
      <AddLocModal />
      <RemoveLocModal />
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Switch
            disabled={!routeSolutionStatus}
            value={isMapView}
            defaultChecked
            color="primary"
            onChange={() => setisMapView((prev) => !prev)}
          />
          <span>{!isMapView ? "Graph View" : "Map View"}</span>
        </Grid>
        <Grid item xs={12}>
          <TrackingBar />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Accords />
        </Grid>
        <Grid item xs={12} sm={9}>
          {!isMapView? (
            <Card style={{ display:"flex", alignItems:"center",justifyContent:'center', height: "100%", overflow: "auto" }}>
              {graphReady ? (
                <CardContent>
                  <Graph />
                </CardContent>
              ) : (
                <CardContent>
                  {routeSolutionStatus ? (
                    <CircularProgress size={"3rem"} />
                  ) : (
                    "Upload a .vrp File"
                  )}
                </CardContent>
              )}
            </Card>
          ) : (
            <Card style={{ height: "100%", overflow: "auto" }}>
              <CardContent>
                {routeSolutionStatus === true ? <Map /> : null}
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
