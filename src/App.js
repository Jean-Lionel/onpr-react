import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./styles/pagination.css";

import { BrowserRouter as Router, Route} from "react-router-dom";
import { Navbar, NavbarComponent } from './Pages/web/Navbar';
import RouteComponent from "./route/RouteComponent";
import "./styles/App.css"
import Downloads from './Pages/web/Downloads';
import Infos from './Pages/web/Infos/Infos';



function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar
         />
        <RouteComponent/>
        <Route exact path='/Downloads' component={Downloads} />
        <Route exact path='/infos' component={Infos} />
      </div>
    </Router>
  );
}

export default App;
