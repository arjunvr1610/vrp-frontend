import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Chip, List } from "@mui/material";
import ListMaterial from "./ListMaterial";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import WrongLocationIcon from "@mui/icons-material/WrongLocation";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "../Store/index";
import locs from "../Output/locs";
import result from "../Output/result";
import CircularProgress from "@mui/material/CircularProgress";

export default function Accords() {
  const [expanded, setExpanded] = useState(false);
  const [file, setFile] = useState(null);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const {
    uploadFile,
    storeNodes,
    openAddLocModal,
    openRemoveLocModal,
    submitNodes,
    storeRoutes,
    emptyRoutes,
    fetchSolution,
    assignRoute,
  } = bindActionCreators(actionCreators, dispatch);

  const { mapRoutes } = useSelector((state) => state.routes);
  const { routeSolutionStatus } = useSelector((state) => state.solution);
  const { routeAssigned } = useSelector((state) => state.solution);
  // const locationsData = useSelector((state) => state.nodes.nodes);
  const fileId = useSelector((state) => state.file.fileId);
  const solutionData = useSelector((state) => state.solution.solutionData);
  console.log("Solution Frontend =>", solutionData);
  console.log("FILE ID => ", fileId);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const onInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmitFile = async (e) => {
    try {
      if (file) {
        setLoader(true);
        e.preventDefault();
        let parsed = new Uint8Array(await file.arrayBuffer());
        parsed = Array.from(parsed);
        await uploadFile(parsed);
        setLoader(false);
        // const timeoutId = setTimeout(function () {
        //   findSolution(timeoutId);
        // }, 1000);
      } else {
        window.alert("Choose A File");
      }
    } catch (err) {
      window.alert("Something Went Wrong");
    }
    setLoader(false);
  };

  const onFindSolution = async () => {
    setLoader(true);
    if (fileId) {
      await fetchSolution(fileId);
      if (solutionData) {
        await storeNodes(solutionData.nodeData);
      }

      // window.alert("Route created");
      // await onSubmitNodes();
    }
    setLoader(false);
  };

  const calcRoutes = async (center) => {
    const directionsService = new window.google.maps.DirectionsService();
    let tours = [];
    solutionData?.solution.forEach((route) => {
      let temp = [];

      for (let item of route.tour) {
        if (item !== solutionData.depotNode) {
          temp.push({
            location: {
              lat: solutionData.nodeData[item - 1].latitude,
              lng: solutionData.nodeData[item - 1].longitude,
            },
          });
        }
      }
      tours.push(temp);
    });
    return Promise.all(
      tours.map(async (tour, index) => {
        return await directionsService.route(
          {
            origin: center,
            destination: center,
            travelMode: window.google.maps.TravelMode.DRIVING,
            waypoints: tour,
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              storeRoutes({ dir: result, clr: colors[index], tourDistance: solutionData.solution[index].tourDistance});
            } else {
              console.error(`error fetching directions ${result}`);
            }
          }
        );
      })
    );
    
  };

  const onSubmitNodes = async () => {
    // emptyRoutes();
    await calcRoutes({
      lat: solutionData.nodeData[0]?.latitude,
      lng: solutionData.nodeData[0]?.longitude,
    });
    await assignRoute(true);
    // submitNodes(solutionData.nodeData);
  };

  const colors = [
    "#C70039 ",
    "#19AF3F",
    "#0A517F",
    "#7B0680",
    "#F96AE3",
    "#EC177E",
    "#FFC300",
  ];

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Upload</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction={"column"} alignItems={"center"} spacing={2}>
            <IconButton aria-label="upload file" component="label">
              <input hidden type="file" onChange={onInputChange} />
              <UploadFileIcon sx={{ fontSize: 100 }} />
            </IconButton>
            {file !== null ? (
              <Chip label={file.name} variant="outlined" />
            ) : (
              <></>
            )}
            {loader ? (
              <CircularProgress size={"2.3rem"} />
            ) : (
              <div>
                <Button
                  style={{ marginRight: "10px" }}
                  variant="contained"
                  onClick={onSubmitFile}
                >
                  Submit
                </Button>
                <Button
                  style={{ marginLeft: "0px" }}
                  variant="outlined"
                  disabled={fileId ? false : true}
                  onClick={onFindSolution}
                >
                  Display
                </Button>
              </div>
            )}
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        disabled={!routeSolutionStatus}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Locations
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "flex", flexDirection: "column" }}>
          {/* <div
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              display: "flex",
            }}
          >
            <IconButton
              aria-label="remove-location"
              size="large"
              edge="start"
              sx={{ mr: 2 }}
              onClick={() => openRemoveLocModal()}
            >
              <WrongLocationIcon sx={{ fontSize: 50 }} />
            </IconButton>
            <IconButton
              aria-label="add-new-location"
              size="large"
              edge="end"
              sx={{ mr: 2 }}
              onClick={() => openAddLocModal()}
            >
              <AddLocationIcon sx={{ fontSize: 50 }} />
            </IconButton>
          </div> */}
          <Card style={{ maxHeight: 450, overflow: "auto" }}>
            <CardContent>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {solutionData?.nodeData?.map((loc, index) => (
                  <ListItemButton
                    alignItems="flex-start"
                    divider={true}
                    onClick={() => {}}
                    key={index}
                  >
                    <ListItemText
                      primary={`Node ${loc.node} `}
                      secondary={`Lat: ${loc.latitude} Long: ${loc.longitude} Demand: ${loc.demand} `}
                    />
                  </ListItemButton>
                ))}
              </List>
            </CardContent>
          </Card>
          <Button
            style={{ margin: "20px" }}
            variant="contained"
            onClick={() => {
              onSubmitNodes();
            }}
          >
            Find Route
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        disabled={!routeAssigned}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Assigned Routes
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card style={{ maxHeight: 450, overflow: "auto" }}>
            <CardContent>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {mapRoutes.map((route, index) => (
                  <ListMaterial
                    Tour={index}
                    vehicle={"1298"}
                    distance={route.tourDistance}
                    cost={"98"}
                    color={route.clr}
                    key={index}
                  />
                ))}
              </List>
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>
      <Accordion
        disabled
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Saved Plans
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Card style={{ maxHeight: 450, overflow: "auto" }}>
            <CardContent>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              ></List>
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
