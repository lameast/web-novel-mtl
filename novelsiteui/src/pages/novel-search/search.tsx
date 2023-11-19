import React, {useState, useEffect} from 'react';
import Searchbar from './search/searchbar';
import Genres from './search/genres';
import Tag from '../../model/tag';
import Tags from './search/tags';
import { Container, Button } from '@mui/material';
import Novel from '../../model/novel';
import NovelCard from './novel-card/NovelCard';

export default function Search(){
    const [searchValue, setSearchValue] = useState<String>("");
    const [genres, setGenres] = useState<Array<Tag>>([]);
    const [tags, setTags] = useState<Array<Tag>>([]);
    const [searchedNovels, setSearchedNovels] = useState<React.ReactNode>([])

    const getTagsAndGenres = async () => {
        const response = await fetch('http://127.0.0.1:8000/novel/api');
        const result = await response.json();
        result.forEach((item: Tag) => {
            item.checked = false;
        });
        const fetchedGenres = result.filter((item : Tag) => item["genre_flag"] === 1);
        const fetchedTags = result.filter((item : Tag) => item["genre_flag"] === 0);
        setGenres(fetchedGenres);
        setTags(fetchedTags);
    }

    const handleSubmit = async () => {
        const selectedTags =  tags.filter((tag: Tag) => tag.checked === true);
        const selectedGenres =  genres.filter((tag: Tag) => tag.checked === true);
        const tagsAndGenres = selectedGenres.concat(selectedTags).map((tag: Tag) => {return {'tags_name': tag.tags_name, 'genre_flag': tag.genre_flag}});
        const body = {'translated_title': searchValue, 'tags': tagsAndGenres};
        const response = await fetch('http://127.0.0.1:8000/novel/api/search', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        });
        const result = await response.json();
        console.log(result)
        const novelCards = result.map((novel: Novel) => {return <NovelCard novel={novel} key={novel["translated_title"]}></NovelCard>})
        setSearchedNovels(novelCards)
        return result
    }

    useEffect(() => {
        getTagsAndGenres();
    }, [])
    //TODO: Wrap in form
    //TODO: Form submit logic
    //TODO: Display search result
    return (
        <Container>
            <Container sx={{display: 'flex', flexDirection: 'column', paddingTop: "1rem"}}>
                <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} handleSubmit={handleSubmit}></Searchbar>
                <Genres genres={genres} setGenres={setGenres}></Genres>
                <Tags tags={tags} setTags={setTags}></Tags>
                <Button variant="contained" onClick={handleSubmit}>Search</Button>
            </Container>
            <Container sx={{display: 'flex', flexDirection: 'column', paddingTop: "1rem"}}>
                {searchedNovels}
            </Container>
        </Container>
    )
}