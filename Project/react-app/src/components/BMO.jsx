// 100% GPT
import React from 'react';
import { Box } from '@mui/material';

export const BMOComponent = () => {

    return (<>
        <Box>
            <Box style={{
                height: '400px',
                width: '250px',
                backgroundColor: 'lightgreen',
                borderRadius: '25px',
                position: 'relative',
            }}> </Box>
            <Box style={{
                backgroundColor: 'black',
                borderRadius: '15px',
                height: '200px',
                width: '200px',
                position: 'absolute',
                top: '50px',
                left: '25px',
            }}></Box>
            <Box style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                height: '40px',
                width: '40px',
                position: 'absolute',
                top: '130px',
                left: '105px',
            }}></Box>
            <Box style={{
                backgroundColor: 'white',
                borderRadius: '50%',
                height: '10px',
                width: '10px',
                position: 'absolute',
                top: '155px',
                left: '120px',
            }}></Box>
            <Box style={{
                backgroundColor: 'white',
                borderRadius: '50%',
                height: '10px',
                width: '10px',
                position: 'absolute',
                top: '155px',
                left: '150px',
            }}></Box>
            <Box style={{
                backgroundColor: 'red',
                borderRadius: '50%',
                height: '15px',
                width: '15px',
                position: 'absolute',
                top: '240px',
                left: '110px',
            }}></Box>
        </Box>
    </>);
}

export default BMOComponent;