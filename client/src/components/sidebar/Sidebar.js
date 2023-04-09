import {Link} from 'react-router-dom';

const Sidebar = ({className}) => {
    return (
        <div>
            <div id="sidebar" className={className}>
                <div>Sidebar</div>
                <Link to="/">Home</Link>
                <Link to="/novel">Novels</Link>
                <Link to="/dashboard">Dashboard</Link>
            </div>
        </div>
    );
};

export default Sidebar;