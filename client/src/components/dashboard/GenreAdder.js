import {useState} from 'react';
import axios from 'axios';


const client = axios.create({
    baseURL: 'http://127.0.0.1:8000'
});


const GenreAdder = ({className, setGenreList}) => {
    const [newGenre, setNewGenre] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({
            genreName: newGenre
        })
        const res  = await client.post('/genre', {
            genreName: newGenre
        });
        setGenreList([...newGenre])
        console.log(res);
    }

    return (
        <form onSubmit={handleSubmit} className={className}>
            <label htmlFor='newGenreName'>
                Enter new genre name:      
            </label>
            <input
                value={newGenre}
                onChange={e => setNewGenre(e.target.value)}
                name='newGenreName'
                id='newGenreName'
            />          
        </form>
    )
}

export default GenreAdder;