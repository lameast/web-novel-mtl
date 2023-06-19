"use client"
import * as React from 'react';
import Searchbar from './search/searchbar';
import Genres from './search/genres';
import Tags from './search/tags';
import { Container } from '@mui/material';

export default function Search(){
    return (
        <Container sx={{display: 'flex', flexDirection: 'column', paddingTop: "1rem"}}>
            <Searchbar></Searchbar>
            <Genres></Genres>
            <Tags></Tags>
        </Container>
    )
}