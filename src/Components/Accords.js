import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Chip, List } from '@mui/material';
import ListMaterial from './ListMaterial';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from '../Store/index';

export default function Accords() {
    const [expanded, setExpanded] = useState(false);
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();
    const { uploadFile } = bindActionCreators(actionCreators, dispatch);

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
                            <input hidden type='file' onChange={onInputChange}/>
                            <UploadFileIcon sx={{fontSize: 100}} />
                        </IconButton>
                        {file !== null? <Chip label={file.name} variant="outlined"/>:<></>}
                        <Button variant='contained' onClick={onSubmitFile}>Submit</Button>
                    </Stack>
                </AccordionDetails>
            </Accordion>
            <Accordion disabled expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Geocode</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                        laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion disabled expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Configure
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Edit & Assign</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Card style={{ maxHeight: 450, overflow: 'auto' }}>
                        <CardContent>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListMaterial Tour={'Tour1'} vehicle={'1298'} cost={'98'} />
                                <ListMaterial Tour={'Tour2'} vehicle={'1298'} cost={'98'} />
                                <ListMaterial Tour={'Tour3'} vehicle={'1298'} cost={'98'} />
                                <ListMaterial Tour={'Tour4'} vehicle={'1298'} cost={'98'} />
                                <ListMaterial Tour={'Tour5'} vehicle={'1298'} cost={'98'} />
                                <ListMaterial Tour={'Tour6'} vehicle={'1298'} cost={'98'} />
                                <ListMaterial Tour={'Tour7'} vehicle={'1298'} cost={'98'} />
                            </List>
                        </CardContent>
                    </Card>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
