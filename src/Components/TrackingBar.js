import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const TrackingBar = () => {
    return (
        <Card>
            <CardContent>
                <Grid container paddingX={6}>
                    <Grid item xs={3} textAlign='center'>
                        <Typography variant='h4'>50km</Typography>
                        <Typography fontSize={13}>Total Distance</Typography>
                    </Grid>
                    <Grid item xs={3} textAlign='center'>
                        <Typography variant='h4'>12/16</Typography>
                        <Typography fontSize={13}>Vehicle Assigned</Typography>
                    </Grid>
                    <Grid item xs={3} textAlign='center'>
                        <Typography variant='h4'>10</Typography>
                        <Typography fontSize={13}>Loactions</Typography>
                    </Grid>
                    <Grid item xs={3} textAlign='center'>
                        <Typography variant='h4'>60</Typography>
                        <Typography fontSize={13}>Total Demand</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default TrackingBar;