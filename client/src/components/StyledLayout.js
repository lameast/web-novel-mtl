import styled from 'styled-components';
import Layout from './Layout';
//TODO Update to using grid
const StyledLayout = styled(Layout)`
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 6fr;
    height: 100vh;
    width: 100vw;
`;

export default StyledLayout;