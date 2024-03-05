    import React, { useEffect, useState, useRef  } from "react";
    import { Paper, Button, makeStyles, List, ListItem } from '@material-ui/core'
    import SearchIcon from '@material-ui/icons/Search';
    import {Scrollbars} from 'react-custom-scrollbars';





    const paperStyles = makeStyles((theme) => ({
        paper: {
            borderRadius: '10px', 
            backgroundColor: '#121212', 
            height: '100vh',
            width: '20vw',
            minWidth: '150px',
            overflow: 'auto'

        },
    }));



    function SideView() {

        const paperRef = useRef(null); // Step 1: Create a ref for the Paper component
        const [paperWidth, setPaperWidth] = useState(0); // Step 2: State to store the Paper component's width
    
        // Step 3: Effect to measure the Paper component's width
        useEffect(() => {
            const updateWidth = () => {
                if (paperRef.current) {
                    setPaperWidth(paperRef.current.offsetWidth); // Update the width based on the Paper component
                }
            };
    
            updateWidth(); // Call once to set initial size
    
            window.addEventListener('resize', updateWidth); // Update width on window resize
            return () => window.removeEventListener('resize', updateWidth); // Cleanup listener
        }, []); // Empty dependency array means this effect runs once on mount
    



        const useStyles = makeStyles((theme) => ({
            button: {

        
    
                alignItems: 'center', // Align items vertically in the center
                justifyContent: 'flex-start',
                backgroundColor: "transparent", // Set the background to transparent
                fontFamily: 'Montserrat, sans-serif',
                color: '#CCCCCC',
                fontWeight: 'bold',
                width: '100vw',
                minWidth: '100px',
                "&:hover": {
                    backgroundColor: 'rgba(157, 157, 157, .2)', // Change background on hover,
                    
                },
                ...(paperWidth <= 150 ? {
                    padding: '0', // Hide text on extra-small devices
                    height: '100px' 
                } : {}),



                
            },   
            text: {
                overflow: 'hidden',
                whiteSpace: 'nowrap', 
                textOverflow: 'ellipsis', // the cut off text changes to ... 
                //[theme.breakpoints.down('sm')]: { //xs
                '@media (max-width: 1000px)': {
                    display: 'none', // Hide text on extra-small devices
                },
            },
        
            image: {
                width: '120px',
                height: '90px',
                marginRight: '10px',
                ...(paperWidth <= 150 ? {
                    marginRight: '0px',
                    objectFit: 'cover'
    
                } : {}),
        
            
            },
        }));


        
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
                <Paper elevation={3} className={paperClass.paper} ref={paperRef}>
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