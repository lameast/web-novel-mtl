import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
import * as React from  "react";
import Tag from "../../../model/tag";

export default function Genres({genres, setGenres} : {genres: Array<Tag>, setGenres: React.Dispatch<React.SetStateAction<Tag[]>>}){

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checkedGenres : Tag[] = genres.map((item: Tag) => {
           return item["tags_name"] === event.target.name ? {...item, "checked": event.target.checked} : item
        })
        setGenres(checkedGenres);
    }

    const genreBoxes = genres.map((item: Tag) => (
            <FormGroup key={item["tags_name"]}>
                <FormControlLabel
                    control={
                        <Checkbox checked={item["checked"]} onChange={handleChange} name={`${item["tags_name"]}`}/>
                    }
                    label={`${item["tags_name"]}`}
                />
            </FormGroup>
        )
    );

    return (
        <Box sx={{display: 'flex'}}>
            <FormControl sx={{
                    m: 3, 
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
                }} 
                component="fieldset"
                variant="standard"
            >
                <FormLabel component="legend">Genres</FormLabel>
                {genreBoxes}
            </FormControl>
        </Box>
        
    )
}