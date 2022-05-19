import {Link} from "react-router-dom"
import WebPortal from "./Pages/WebPortal";

const Home = () => {
    return ( <div className="App">
        <h1>
            <Link to="/login">
                <p>Login</p>
            </Link>
        </h1>

        <div>
        <WebPortal />
        </div>
    </div> );
}
 
export default Home;