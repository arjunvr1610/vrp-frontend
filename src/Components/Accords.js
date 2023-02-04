import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Chip, List } from '@mui/material';
import ListMaterial from './ListMaterial';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from '../Store/index';
import locs from '../Output/locs';

export default function Accords() {
    const [expanded, setExpanded] = useState(false);
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();
    const { uploadFile, storeNodes } = bindActionCreators(actionCreators, dispatch);
    const { mapRoutes } = useSelector(state => state.routes);
    const locationsData = useSelector(state => state.nodes.nodes);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const onInputChange = (e) => {
        console.log('working..')
        setFile(e.target.files[0]);
        console.log(e.target.files[0])
    }

    const onSubmitFile = (e) => {
        // e.preventDefault()
        // handleChange('panel4')
        console.log(file)
        uploadFile(file)
    }

    const colors = [
        "#C70039 ",
        "#19AF3F",
        "#0A517F",
        "#7B0680",
        "#F96AE3",
        "#EC177E",
        "#FFC300"
    ]

    const getNodesRes = () => {

        let label = 0;
        let nodes = [];
        for (let index = 0; index < locs.length; index++) {
            const arr = locs[index];
            for (let j = 0; j < arr.length; j++) {
                label++;
                nodes.push({ pos: arr[j], label: label.toString() })
            }
        }
        storeNodes(nodes)
    }

    useEffect(() => { getNodesRes() }, []);

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Upload
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack direction={'column'} alignItems={'center'} spacing={2}>
                        <IconButton aria-label='upload file' component='label'>
                            <input hidden type='file' onChange={onInputChange} />
                            <UploadFileIcon sx={{ fontSize: 100 }} />
                        </IconButton>
                        {file !== null ? <Chip label={file.name} variant="outlined" /> : <></>}
                        <Button variant='contained' onClick={onSubmitFile}>Submit</Button>
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Locations</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Card style={{ maxHeight: 450, overflow: 'auto' }}>
                        <CardContent>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                {
                                    locationsData.map((loc, index) => (
                                        <ListItemButton
                                            alignItems='flex-start'
                                            divider={true}
                                            onClick={() => {}}
                                        >
                                            <ListItemText 
                                                primary={`Node ${loc.label}`} 
                                                secondary={"demand = 20"} 
                                            />
                                        </ListItemButton>
                                    ))
                                }
                            </List>
                        </CardContent>
                    </Card>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Assigned Routes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Card style={{ maxHeight: 450, overflow: 'auto' }}>
                        <CardContent>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                {
                                    mapRoutes.map((route, index) =>
                                        <ListMaterial
                                            Tour={index}
                                            vehicle={'1298'}
                                            cost={'98'}
                                            color={route.clr}
                                        />
                                    )
                                }
                            </List>
                        </CardContent>
                    </Card>
                </AccordionDetails>
            </Accordion>
            <Accordion disabled expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Saved Plans
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Card style={{ maxHeight: 450, overflow: 'auto' }}>
                        <CardContent>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                            </List>
                        </CardContent>
                    </Card>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
