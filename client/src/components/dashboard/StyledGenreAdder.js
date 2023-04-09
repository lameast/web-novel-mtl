import styled from 'styled-components';
import GenreAdder from './GenreAdder';

const StyledGenreAdder = styled(GenreAdder)`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 1rem;
padding: 1rem;
gap: 1rem;
font-size: 1.25rem;
flex-grow: 1;

> #newGenreName {
    width: 40%;
    font-size: 1.25rem;
}
`;

export default StyledGenreAdder;