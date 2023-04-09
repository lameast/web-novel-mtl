import styled from 'styled-components';
import DashboardHeader from './DashboardHeader';

const StyledDashboardHeader = styled(DashboardHeader)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    gap: 2rem;
    font-size: 1.25rem;
    
    > div {
        cursor: pointer;
    }

`;

export default StyledDashboardHeader;