"use client"
import * as React from 'react';
import { FormControl, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

export default function Searchbar(){
    return (
        <FormControl>
            <TextField 
            id='search' placeholder='Search Novel' variant='outlined' fullWidth
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                    </InputAdornment>
                )
            }}/>
        </FormControl>
    )
}