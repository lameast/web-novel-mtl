import {useState, useEffect} from 'react';
import axios from 'axios';
import Checkbox from './Checkbox';

const client = axios.create({
    baseURL: 'http://127.0.0.1:8000'
});

//Need to redo checkboxes and lift state up to parent

const SearchNovel = (props) => {
    const [novelName, setNovelName] = useState('');
    const [genres, setGenres] = useState([]);
    const [tags, setTags] = useState([]);
    //Change tags to be an array of objects

    function Box(name, isChecked){
        this.name = name;
        this.isChecked = isChecked;
    }

    //Use useEffect to get all available genres and tags from database.
    useEffect(() => {
        const getTags = async () => {
            const res = await client.get('/showTags');
            setTags(res.data.map(tag => new Box(tag.tagName, false)))
            //setTags(res.data.map(tag => <Checkbox name={tag.tagName}/>));
        };

        const getGenres = async () => {
            const res = await client.get('/showGenres');
            setGenres(res.data.map(genre => new Box(genre.genreName, false)));
            //setGenres(res.data.map(genre => <Checkbox name={genre.genreName}/>));
        };

        getTags();
        getGenres();
    }, []);

    const tagBoxes = tags.map(tag => <Checkbox name={tag.name} boxes={tags} setBoxes={setTags}/>)
    const genreBoxes = genres.map(genre => <Checkbox name={genre.name} boxes={genres} setBoxes={setGenres}/>)

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(formData.entries())
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
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
                    {genreBoxes}
                </div>
            </label>
            <label>
                Tags:
                <div id='tags'>
                    {tagBoxes}
                </div>
            </label>
        </form>
    )
}

export default SearchNovel;