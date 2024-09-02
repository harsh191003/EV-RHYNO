import { Outlet } from "react-router-dom"
import Footer from "../features/footer/footer"
import Header from "../features/header/header"

function Layout(){
    return(
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
export default Layout