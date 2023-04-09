import {useState} from 'react';
import axios from 'axios';

const client = axios.create({
    baseURL: 'http://127.0.0.1:8000'
});

const TagAdder = ({className, setTagList}) => {
    const [newTag, setNewTag] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res  = await client.post('/tag', {
            tagName: newTag
        });
        setTagList([...newTag])
        console.log(res);
    }

    return (
        <form onSubmit={handleSubmit} className={className}>
            <label htmlFor='newTagName'>
                Enter new tag name:      
            </label>
            <input
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                name='newTagName'
                id='newTagName'
            />
        </form>
    )
}

export default TagAdder;