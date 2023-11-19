import * as React from 'react';
import Tag from '../../../model/tag';
import { TextField, Autocomplete, FormControl, Chip } from '@mui/material';
export default function Tags({tags, setTags} : {tags: Array<Tag>, setTags: React.Dispatch<React.SetStateAction<Tag[]>>}){
    const [value, setValue] = React.useState<any | null>([]);

    const handleChange = (event: any, newValue: any | null) => {
        setValue([...newValue]);
        const selectedTags : Tag[] = tags.map((item: Tag) => {
            return newValue.some((tag: Tag) => tag["tags_name"] === item["tags_name"]) ? {...item, "checked": true} : {...item, "checked": false}
         })
        setTags(selectedTags);
    }

    return (
        <FormControl>
            <Autocomplete
                multiple
                value={value}
                onChange={handleChange}
                id='tagSelector'
                options={tags}
                getOptionLabel={(option) => option["tags_name"]}
                isOptionEqualToValue={(option, value) => option["tags_name"] === value["tags_name"]}
                filterSelectedOptions
                renderOption={(props, option) => {
                    return (
                      <li {...props} key={option["tags_name"]}>
                        {option["tags_name"]}
                      </li>
                    )
                  }}

                renderTags={(tagValue, getTagProps) => {
                    return tagValue.map((option, index) => (
                        <Chip {...getTagProps({ index })} key={option["tags_name"]} label={option["tags_name"]} />
                    ))
                }}
                disablePortal={true}
                renderInput={(params) => <TextField {...params} variant='standard' label="Tag"/>}
            />
        </FormControl>
        
    )
}