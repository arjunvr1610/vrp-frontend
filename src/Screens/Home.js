import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Map from '../Components/Map';
import Accords from '../Components/Accords.js'
import TrackingBar from '../Components/TrackingBar';

const Home = () => {

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: '#F4F6F6' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TrackingBar />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Accords />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Card style={{ height: 450, overflow: 'auto' }}>
            <CardContent>
              <Map/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
