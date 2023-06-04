import SearchNovel from "./SearchNovel";
import { Outlet } from "react-router-dom";

const Novels = () => {
    return (
        <div>
            <div>
            View or search for novels here.
            </div>
            <SearchNovel/>
            <Outlet/>
        </div>
    )
};

export default Novels;