import { React, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from '../Store/index';

const AddLocModal = () => {
//   { pos: arr[j], label: label.toString() }
  const [lng, setLng] = useState(null);
  const [ltd, setLtd] = useState(null);
  const [demand, setDemand] = useState(null);

  const dispatch = useDispatch();  
  const { closeAddLocModal, addNodes } = bindActionCreators(actionCreators, dispatch);  
  const open = useSelector(state => state.modals.openAddLoc);
  const nodesData = useSelector(state => state.nodes.nodes);

  const handleAdd = () => {
    const newNodeLabel = nodesData.length + 1;
    const nodeValue = {
        pos: {location: {lat: parseFloat(ltd), lng: parseFloat(lng)}}, 
        label: newNodeLabel.toString()
    }
    addNodes(nodeValue);
    handleClose();
  }

  const handleClose = () => {
    closeAddLocModal();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Node</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add longitude, latitude and the supply demand of the location.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="lat"
            label="Latitude"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => setLtd(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="lng"
            label="Longitude"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => setLng(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="demand"
            label="Demand"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => setDemand(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddLocModal;