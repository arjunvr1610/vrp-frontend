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

const Home = () => {
  const { fileUploadStatus } = useSelector((state) => state.file);
  const [isMapView, setisMapView] = useState(true);
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: "#F4F6F6" }}>
      <AddLocModal />
      <RemoveLocModal />
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Switch
            value={isMapView}
            defaultChecked
            color="warning"
            onChange={() => setisMapView((prev) => !prev)}
          />
          <span>{!isMapView ? "Node View" : "Map View"}</span>
        </Grid>
        <Grid item xs={12}>
          <TrackingBar />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Accords />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Card style={{ height: 450, overflow: "auto" }}>
            {isMapView ? (
              <CardContent>
                {fileUploadStatus === false ? <Map /> : "Upload a file"}
              </CardContent>
            ) : (
              <CardContent>
                <Graph/>
              </CardContent>
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
