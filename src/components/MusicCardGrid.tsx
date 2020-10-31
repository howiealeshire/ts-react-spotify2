import {Card, CardActionArea, CardActions, CardContent, CardMedia, Link} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, {useEffect, useState} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MusicCard from './MusicCard'
import SpotifyWebApi from "spotify-web-api-js";
import MusicCardRow from "./MusicCardRow";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: {
            padding: theme.spacing(2, 2, 0),
        },
        paper: {
            paddingBottom: 50,
        },
        list: {
            marginBottom: theme.spacing(2),
            marginLeft: 250,
        },
        subheader: {
            backgroundColor: theme.palette.background.paper,
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        appBar: {
            top: 'auto',
            bottom: 0,
            zIndex: 1400,
        },
        appBarCenter: {
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
        },

        grow: {
            flexGrow: 1,
        },
        fabButton: {
            position: 'absolute',
            zIndex: 1,
            top: -30,
            left: 0,
            right: 0,
            margin: '0 auto',
        },
        link: {
            paddingTop: 110,
            paddingBottom:121,
        },
        endLink: {
            paddingTop: 110,
            paddingBottom:121,
            marginRight:590,
        },
        typography: {
            marginBottom: theme.spacing(2),
            marginLeft: 250,
            marginTop: 95,
        },
        root: {
            maxWidth: 345,
            background: "#f1f1f1",

        },
    }),
);




export default function MusicCardGrid() {
    const classes = useStyles();
    const [isShown, setIsShown] = useState(false);
    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
    const [albums,setAlbums] = useState([]);

    const Spotify = require('spotify-web-api-js');
    const s = new Spotify();
    s.setAccessToken('1c9865ce985144d6866fd053189d53d8');


    return (
        <React.Fragment>
            <div style={{   overflowX: 'hidden'}}>
                <Grid container spacing={2} className={classes.typography} style={{
                    width: '100%',

                }}>

                    <MusicCardRow></MusicCardRow>
                    <MusicCardRow></MusicCardRow>
                    <MusicCardRow></MusicCardRow>
                    <MusicCardRow></MusicCardRow>
                    <MusicCardRow></MusicCardRow>
                    <MusicCardRow></MusicCardRow>
                    <MusicCardRow></MusicCardRow>
                    <MusicCardRow></MusicCardRow>
                    <MusicCardRow></MusicCardRow>
                    <MusicCardRow></MusicCardRow>
                    <MusicCardRow></MusicCardRow>
                    <MusicCardRow></MusicCardRow>
                    <MusicCardRow></MusicCardRow>
                    <MusicCardRow></MusicCardRow>
                    <MusicCardRow></MusicCardRow>
                    <MusicCardRow></MusicCardRow>
                    <MusicCardRow></MusicCardRow>
                    <MusicCardRow></MusicCardRow>
                    <MusicCardRow></MusicCardRow>
                    <MusicCardRow></MusicCardRow>



                </Grid>
            </div>
        </React.Fragment>

    );
}