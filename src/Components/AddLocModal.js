import { React, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "../Store/index";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const AddLocModal = () => {
  //   { pos: arr[j], label: label.toString() }
  const loc = useSelector((state) => state.modals.loc);
  const [lng, setLng] = useState(null);
  const [ltd, setLtd] = useState(null);
  const [demand, setDemand] = useState(0);
  const [remaining, setRemaining] = useState(0);

  const [demandName, setDemandName] = useState();
  const [chips, setChips] = useState([]);
  const [name, setName] = useState([]);
  const [count, setCount] = useState([]);

  const dispatch = useDispatch();
  const { closeAddLocModal, addNodes, addChip } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const open = useSelector((state) => state.modals.openAddLoc);
  const index = useSelector((state) => state.modals.index);
  const demandTypes = useSelector((state) => state.solution.demandType);

  const handleAdd = () => {
    name.push(demandName);
    count.push(demand);
    chips.push({ name: demandName, count: demand });
    setRemaining((prev) => prev - demand);
  };

  const start = () => {
    const ChipsFromStore = demandTypes?.filter((x) => x.node === index + 1);
    if (ChipsFromStore.length === 1) {
      const result = ChipsFromStore[0].name.map((name, index) => ({
        name: name,
        count: parseInt(ChipsFromStore[0].count[index]),
      }));
      setChips(result);
      setName(ChipsFromStore[0]?.name);
      setCount(ChipsFromStore[0]?.count.map(Number));
      const sum = ChipsFromStore[0]?.count.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0);
      setRemaining(loc - sum);
    } else {
      setRemaining(loc);
    }
  };
  console.log(name, count);

  useEffect(() => {
    start();
  }, [loc]);

  const handleClose = () => {
    setDemand(0);
    setChips([]);
    closeAddLocModal();
    setName([]);
    setCount([]);
  };

  const onSubmit = async () => {
    await addChip({ node: index+1, name: name, count: count });
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Node {index + 1}</DialogTitle>
        <Stack
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          direction="row"
          spacing={1}
        >
          {chips.length !== 0
            ? chips.map((item, index) => {
                return (
                  <Chip
                    key={index}
                    label={item.name + ":" + item.count}
                    color="primary"
                    variant="outlined"
                  />
                );
              })
            : null}
        </Stack>
        <DialogContent>
          <DialogContentText>Remaining: {remaining}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            value={demandName}
            label="Demand Name"
            fullWidth
            variant="standard"
            onChange={(e) => setDemandName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            value={demand}
            label="Demand"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => setDemand(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button disabled={remaining - demand < 0} onClick={handleAdd}>
            Add New
          </Button>
          <Button onClick={onSubmit}>Done</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddLocModal;
