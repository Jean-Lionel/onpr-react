import {Link} from "react-router-dom"

const Home = () => {
    return ( <div className="App">
        <h1>
            <Link to="/login">
                <p>Login</p>
            </Link>
        </h1>
        <div>
        lorem ipsum dolor sit amet, consectetur adip
        </div>
    </div> );
}
 
export default Home;