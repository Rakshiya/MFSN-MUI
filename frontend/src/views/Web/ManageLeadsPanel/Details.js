
import React from 'react';
import DefaultLayout from '../../../Components/DefaultLayout';
import { Box } from '@mui/material';


function Details(props) {
    function ContentLayout() {
        return (
            <Box>
                <h1>Dashboard Page 123 676767</h1>
                <h1>Dashboard Page 123 676767</h1>
            </Box>
        );
    }
     
    return(
        <div>
            <DefaultLayout content={<ContentLayout />} />
        </div>
    );
}


export default Details;