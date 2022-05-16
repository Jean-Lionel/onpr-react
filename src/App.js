import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter as Router,} from "react-router-dom";
import { Navbar, NavbarComponent } from './Pages/web/Navbar';
import RouteComponent from "./route/RouteComponent";
import "./styles/App.css"


function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar
         />
        <RouteComponent/>
      </div>
    </Router>
  );
}

export default App;
