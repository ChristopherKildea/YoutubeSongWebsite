    import React, { useEffect, useState  } from "react";
    import { Paper, Button, makeStyles, List, ListItem } from '@material-ui/core'
    import SearchIcon from '@material-ui/icons/Search';
    import {Scrollbars} from 'react-custom-scrollbars';






    const useStyles = makeStyles((theme) => ({
        button: {

      
            //display: 'flex', // Use flexbox
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
        text: {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',   
            [theme.breakpoints.down('xs')]: {
                display: 'none', // Hide text on extra-small devices
            },
        },
     
        image: {
            width: '120px',
            height: '90px',
            marginRight: '10px', // Add some space between image and text
            [theme.breakpoints.down('xs')]: {
                width: '60px',
                height: '45px', // Hide text on extra-small devices
            },
        },
    }));



    const paperStyles = makeStyles((theme) => ({
        paper: {
            borderRadius: '10px', 
            backgroundColor: '#121212', 
            height: '100vh',
            width: '20vw',
            minWidth: '120px',
            overflow: 'auto'

        },
    }));



    function SideView() {



        
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
                    <Scrollbars style={{width: "100%", height: "100%"}}>

                    
    
                    <List>
                        <ListItem>
                            <Button 
                                variant="contained" 
                                onClick={handleSearchClicked}
                                style={{ textTransform: 'none' }}
                                className={classes.button}
                                >
                    
                                    <SearchIcon style={{ fontSize: 30, color: '#CCCCCC', marginRight: '5px' }} /> <span className={classes.text}>Search</span>
                           
                                
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


                                    
                                    <span className={classes.text}>{playlist.name}</span>

                                </Button>


                            </ListItem>
                        ))}


                    </List>

                    </Scrollbars>



                </Paper>

            </div>
                                
            
        )
    }

    export default SideView;