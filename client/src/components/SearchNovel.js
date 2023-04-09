import {useState, useEffect} from 'react';
import axios from 'axios';
import Checkbox from './Checkbox';

const client = axios.create({
    baseURL: 'http://127.0.0.1:8000'
});

const SearchNovel = (props) => {
    const [novelName, setNovelName] = useState('');
    const [genres, setGenres] = useState([]);
    const [tags, setTags] = useState([]);

    //Use useEffect to get all available genres and tags from database.
    useEffect(() => {
        const getTags = async () => {
            const res = await client.get('/showTags');
            setTags(res.data.map(tag => <Checkbox name={tag.tagName}/>));
        }

        const getGenres = async () => {
            const res = await client.get('/showGenres');
            setGenres(res.data.map(genre => <Checkbox name={genre.genreName}/>));
        }

        getTags();
        getGenres();
    });
    
    return (
        <form>
            <label>
                Enter novel name:
                <input
                    value={novelName}
                    onChange={e => setNovelName(e.target.value)}
                    name='search'
                />                
            </label>
            <label>
                Genre:
                <div id='Genres'>
                    {genres}
                </div>
            </label>
            <label>
                Tags:
                <div id='tags'>
                    {tags}
                </div>
            </label>
        </form>
    )
}

export default SearchNovel;