import { Box,Button,Grid, Stack } from '@mui/material';
import React from 'react';

function LoginHeader(props) {
    return (
        <Box sx={{ flexGrow: 1,boxShadow: 4,p:1,justifyContent:"center",alignItems:"center" }}>
            <Stack direction='row' justifyContent="space-between" alignItems="center" >
                <Grid xs={6} justifyContent="center">
                    <img src={require('../assets/images/mainLogo.jpg')} />
                </Grid>
                <Grid xs={6}>                        
                        <img src={require('../assets/images/bureau-logos.png')} />
                        <Button variant="contained">Register</Button>
                </Grid>
            </Stack>
        </Box>
        
    );
}

export default LoginHeader;