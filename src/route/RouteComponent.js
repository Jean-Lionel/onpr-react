import {
    Switch,
    Route,
  } from "react-router-dom";
import Home from "../Home";
import Admin from "../Pages/Admin";
import ArticleAdd from "../Pages/Admin/articles/ArticleAdd";
import Article from "../Pages/Admin/articles/Articles";
import Users from "../Pages/Admin/Users";
import Bonjour from "../Pages/Bonjour";
import Login from "../Pages/Login";
import ProtectedRoute from "../utility/ProtectedRouter";


const RouteComponent = () => {
    return ( 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bonjour" component={Bonjour} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/admin" component={Admin} /> 
          <ProtectedRoute exact path="/users" component={Users} /> 
          <ProtectedRoute exact path="/admin-article" component={Article} /> 
          <ProtectedRoute exact path="/admin-article-add" component={ArticleAdd} /> 
        </Switch>
     );
}
 
export default RouteComponent;