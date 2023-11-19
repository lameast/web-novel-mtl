import * as React from 'react';
import { FormControl, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

export default function Searchbar({searchValue, setSearchValue, handleSubmit} : {searchValue: String, setSearchValue: React.Dispatch<React.SetStateAction<String>>, handleSubmit: React.MouseEventHandler<HTMLDivElement>}){

    const handleChange = (event: any) => {
        setSearchValue(event.target.value)
    }

    return (
        <FormControl>
            <TextField 
            id='search' placeholder='Search Novel' variant='outlined' fullWidth
            value={searchValue}
            onChange={handleChange}
            InputProps={{
                endAdornment: (
                    <InputAdornment position='end'>
                        <div className='icon-button-wrapper' onClick={handleSubmit}>
                            <IconButton>
                                <SearchIcon/>
                            </IconButton>
                        </div>
                    </InputAdornment>
                )
            }}/>
        </FormControl>
    )
}