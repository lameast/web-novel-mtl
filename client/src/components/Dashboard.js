import StyledGenreAdder from "./dashboard/StyledGenreAdder";
import StyledNovelAdder from "./dashboard/StyledNovelAdder";
import StyledTagAdder from "./dashboard/StyledTagAdder";
import StyledDashboardHeader from "./dashboard/StyledDashboardHeader";
import {useState, useEffect} from 'react';
import Checkbox from './Checkbox';
import axios from 'axios';

const client = axios.create({
    baseURL: 'http://127.0.0.1:8000'
});

const Dashboard = () => {
    const [genres, setGenres] = useState([]);
    const [tags, setTags] = useState([]);
    const [genreList, setGenreList] = useState([]);
    const [tagList, setTagList] = useState([]);
    const [mode, setMode] = useState(0);

    function Box(name, isChecked){
        this.name = name;
        this.isChecked = isChecked;
    }

    //Use useEffect to get all available genres and tags from database.
    useEffect(() => {
        const getTags = async () => {
            const res = await client.get('/showTags');
            //setTags(res.data.map(tag => <Checkbox name={tag.tagName}/>));
            setTags(res.data.map(tag => new Box(tag.tagName, false)))
        }

        const getGenres = async () => {
            const res = await client.get('/showGenres');
            //setGenres(res.data.map(genre => <Checkbox name={genre.genreName}/>));
            setGenres(res.data.map(genre => new Box(genre.genreName, false)));
        }

        getTags();
        getGenres();
    }, [genreList, tagList]);

    return (
        <div>
            <StyledDashboardHeader setMode={setMode}/>
            { mode === 0 && <StyledNovelAdder genres={genres} tags={tags} setGenres={setGenres} setTags={setTags}/>}
            { mode === 1 && <StyledGenreAdder setGenreList={setGenreList}/>}
            { mode === 2 && <StyledTagAdder setTagList={setTagList}/> }
        </div>
    )
}

export default Dashboard