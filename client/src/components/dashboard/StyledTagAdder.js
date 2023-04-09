import styled from 'styled-components'
import TagAdder from './TagAdder'

const StyledTagAdder = styled(TagAdder)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem;
    padding: 1rem;
    gap: 1rem;
    font-size: 1.25rem;

    > #newTagName {
        width: 40%;
        font-size: 1.25rem;
    }
`;

export default StyledTagAdder;