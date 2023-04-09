import styled from 'styled-components';
import NovelAdder from './NovelAdder';

const StyledNovelAdder = styled(NovelAdder)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 2rem 4rem 4rem 2rem;
    font-size: 1.25rem;

    > #Genres, #Tags {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
        font-size: 1rem;
    }

    > .novelInput {
        width: 40%;
        font-size: 1.25rem;
    }

    > #Tags .checkbox, #Genres .checkbox  {
        vertical-align: middle;
        cursor: pointer;
    }
`;

export default StyledNovelAdder;