import * as React from 'react';
import { TextField, Autocomplete, FormControl } from '@mui/material';
export default function Tags(){

    const tags = [
        {label: 'OP Protag'},
        {label: 'Dystopian'},
        {label: 'Harem'},
        {label: 'Adventure'},
        {label: 'Cultivation'}
    ]

    return (
        <FormControl>
            <Autocomplete
                disablePortal
                id='tagSelector'
                options={tags}
                renderInput={(params) => <TextField {...params} label="Tag"/>}
            />
        </FormControl>
        
    )
}