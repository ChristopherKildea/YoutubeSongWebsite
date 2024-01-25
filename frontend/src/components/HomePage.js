import React, { Component } from "react";
import SongList from "./SongList";
import {
    Grid
}
from '@material-ui/core';


function HomePage() {



    const pageStyle = {
        backgroundColor: '#000000' // Replace 'your-color-here' with your desired background color
    };


    return (

        <div style={pageStyle}>
            <Grid container spacing={1}>
                
                <Grid item xs={12} align="center" style={{ marginTop: '20px', marginLeft: '20px' }}>
                    <SongList />
                </Grid>
            </Grid> 
        
        </div>







    )
}

export default HomePage;