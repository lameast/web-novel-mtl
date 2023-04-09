import StyledSidebar from "./sidebar/StyledSidebar";
import { Outlet } from "react-router-dom";

const Layout = ({className}) => {
    return (
        <div id="layout" className={className}>
            <StyledSidebar/>
            <Outlet/>
        </div>
    )
};

export default Layout;