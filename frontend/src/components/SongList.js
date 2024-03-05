import React, { Component, useEffect, useState  } from "react";
import { Grid, Paper, Typography, Button, makeStyles, List, ListItem, Link } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';



function SongList(props) {


    const paperStyles = makeStyles((theme) => ({
        paper: {
            borderRadius: '10px', 
            backgroundColor: '#121212', 
            height: '100vh',
            width: '20vw',
            minWidth: '500px',
            overflow: 'auto'
    
        },
      }));


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
          whiteSpace: 'nowrap'

    
        },
        image: {
            width: '80px',  
            height: '60px',
            marginRight: '10px', // Add some space between image and text
          },
        songTitle: {
            display: 'inline-block',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            maxWidth: '120px',
            margin: '0 40px'

        },
        songAuthor: {
            display: 'inline-block',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            maxWidth: '120px',
            margin: '0 20px'
        }

      }));
    

    const classes = useStyles();
    const paperClass = paperStyles()

    const [songs, setSongs] = useState([]); 

    useEffect(() => {
        // Fetch songs and set them in state
        fetch('/api/get-songs')
          .then((response) => {
            if (!response.ok) {
              console.log("Failed to get songs")
            }
            return response.json()
          })
          .then((data) => {
            setSongs(data); // Set songs in state
          });
      }, []); 


      const handleSongClicked = (e) => {
        console.log("Song has been clicked")
    };
    return (

        
        <div>
            <Paper elevation={3} className={paperClass.paper}> 

                <List>

                        {songs.map((song) => (

                            <ListItem key={song.id}>
                        


                                <Button 
                        
                                    variant="contained" 
                                    onClick={handleSongClicked}
                                    style={{ textTransform: 'none'}}
                                    className={classes.button}
                                    >

                                    <img 
                                        src={song.thumbnail === "Unknown" ? "https://i.ytimg.com/vi/RbmS3tQJ7Os/default.jpg" : song.thumbnail}
                                        className={classes.image}
                                    />

                                    <div>
                                        <span className={classes.songTitle}>{song.title}</span>
                                    </div>

                               
                                    <div>
                                        <span className={classes.songAuthor}>{song.author}</span>
                                    </div>
                              

                                    <Link href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                                        <MoreHorizIcon style={{ fontSize: 30, color: '#CCCCCC', marginRight: '10px'  }} />
                                    </Link>
                                                                        



                                </Button>


                            </ListItem>
                        ))}


                    </List>


            </Paper>

        </div>
    )   
}


export default SongList;
