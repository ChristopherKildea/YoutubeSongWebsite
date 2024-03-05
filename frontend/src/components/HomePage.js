import React, { Component } from "react";
import SideView from "./SideView";
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
            <Grid container spacing={2}>

        {/*}
            <Grid item xs={3} md={6} style={{ marginTop: '20px', marginLeft: '20px' }}>
                    <SideViewTwo />
            </Grid> */}

    
                <Grid item xs={3} md={6} style={{ marginTop: '20px', marginLeft: '20px' }}>
                    <SideView />
                </Grid>  


                {/*
                <Grid item xs={3} md={5} style={{ marginTop: '20px'}}>
                    <SongList />
                </Grid> */}


         

         
      
            </Grid> 
        
        </div>

    )
}

export default HomePage;