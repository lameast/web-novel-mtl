"use client"
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
import * as React from  "react";

export default function Genres(){
    const [genres, setGenres] = React.useState({
        action: false,
        comedy: false, 
        romance: false
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGenres({
            ...genres,
            [event.target.name]: event.target.checked
        })
    }

    const {action, comedy, romance} = genres;

    return (
        <Box sx={{display: 'flex'}}>
            <FormControl sx={{m: 3}} component="fieldset" variant="standard">
                <FormLabel component="legend">Genres</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={action} onChange={handleChange} name="action"/>
                        }
                        label="Action"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={comedy} onChange={handleChange} name="comedy"/>
                        }
                        label="Comedy"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={romance} onChange={handleChange} name="romance"/>
                        }
                        label="Romance"
                    />
                </FormGroup>
            </FormControl>
        </Box>
        
    )
}