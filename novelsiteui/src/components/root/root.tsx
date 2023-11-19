import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import { Outlet } from "react-router-dom";

export default function Root(){
    return (
        <div>
            <Header/>
            <div id="detail">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}