import {useState} from 'react';
import axios from 'axios';
import Checkbox from '../Checkbox';

const client = axios.create({
    baseURL: 'http://127.0.0.1:8000'
});

const NovelAdder = ({className, genres, tags, setGenres, setTags}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await client.post('novel', {
            title: title,
            author: author,
            description: description
        })
        console.log(res)
    }

    const tagBoxes = tags.map(tag => <Checkbox name={tag.name} boxes={tags} setBoxes={setTags}/>)
    const genreBoxes = genres.map(genre => <Checkbox name={genre.name} boxes={genres} setBoxes={setGenres}/>)

    return (
        <form className={className} onSubmit={handleSubmit}>
            <label htmlFor='title'>
                Enter novel name:
            </label>
            <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    name='title'
                    type="text"
                    className='novelInput'
                />     
            <label htmlFor='author'>
                Enter author name:
            </label>
            <input  
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                    name='author'
                    type="text"
                    className='novelInput'
                />    
            <label htmlFor='description'>
                Enter novel description:
            </label>
            <input
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    name='description'
                    type="text"
                    className='novelInput'
                />                         
            <label htmlFor='Genres'>
                Genres:
            </label>
            <div id='Genres'>
                {genreBoxes}
            </div>
            <label htmlFor='tags'>
                Tags:
                
            </label>
            <div id='Tags'>
                {tagBoxes}
            </div>
        </form>
    )
}

export default NovelAdder;