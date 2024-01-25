import React, { Component, useEffect, useState  } from "react";
import { Grid, Paper, Typography, Button, makeStyles, List, ListItem } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';






const useStyles = makeStyles((theme) => ({
    button: {
        display: 'flex', // Use flexbox
        alignItems: 'center', // Align items vertically in the center
        justifyContent: 'flex-start',
      backgroundColor: "transparent", // Set the background to transparent
      fontFamily: 'Montserrat, sans-serif',
      color: '#CCCCCC',
      fontWeight: 'bold',
      width: '100vw',
      minWidth: '100px',
      "&:hover": {
        backgroundColor: 'rgba(157, 157, 157, .2)' // Change background on hover,
        
      },

    },
    image: {
        width: '120px',
        height: '90px',
        marginRight: '10px', // Add some space between image and text
      },
  }));



  const paperStyles = makeStyles((theme) => ({
    paper: {
        borderRadius: '10px', 
        backgroundColor: '#121212', 
        height: '100vh',
        width: '20vw',
        minWidth: '500px'

    },
  }));



function SongList() {



    
    const [playlists, setPlaylists] = useState([]); 

    useEffect(() => {
        // Fetch playlists and set them in state
        fetch('/api/get-playlists')
          .then((response) => {
            if (!response.ok) {
              console.log("Failed to get playlists")
            }
            return response.json()
          })
          .then((data) => {
            setPlaylists(data); // Set playlists in state
          });
      }, []); 

    const handleSearchClicked = (e) => {
        console.log("Search has been clicked")
    };

    const handlePlaylistClicked = (e) => {
        console.log("Playlist has been clicked")
    };

    const classes = useStyles();
    const paperClass = paperStyles()



    return (


        <div>
            <Paper elevation={3} className={paperClass.paper}>

  
                <List>
                    <ListItem>
                        <Button 
                            variant="contained" 
                            onClick={handleSearchClicked}
                            style={{ textTransform: 'none' }}
                            className={classes.button}
                            >
                            <SearchIcon style={{ fontSize: 30, color: '#CCCCCC', marginRight: '.9vw'  }} /> Search
                        </Button>
                    </ListItem>


                    {playlists.map((playlist) => (
                        <ListItem key={playlist.id}>


                            <Button 
                       
                                variant="contained" 
                                onClick={handlePlaylistClicked}
                                style={{ textTransform: 'none'}}
                                className={classes.button}
                                >

                                <img 
                                    src={playlist.picture === "Unknown" ? "https://i.ytimg.com/vi/RbmS3tQJ7Os/default.jpg" : playlist.picture}
                                    className={classes.image}
                                />


                                {playlist.name}

                            </Button>


                        </ListItem>
                    ))}


                </List>



            </Paper>

        </div>
                               
        
    )
}

export default SongList;