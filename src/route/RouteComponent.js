import {
    Switch,
    Route,
  } from "react-router-dom";
import Home from "../Home";
import Admin from "../Pages/Admin";
import ArticleAdd from "../Pages/Admin/articles/ArticleAdd";
import Article from "../Pages/Admin/articles/Articles";
import Cotisation from "../Pages/Admin/contisation/Cotisation";
import Institution from "../Pages/Admin/institution/Institution";
import Slides from "../Pages/Admin/Slides/Slides";
import Users from "../Pages/Admin/Users";
import UserAdd from "../Pages/Admin/users/UserAdd";
import Login from "../Pages/Login";
import TestComponent from "../Pages/TestComponent";
import ProtectedRoute from "../utility/ProtectedRouter";


const RouteComponent = () => {
    return ( 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/admin" component={Admin} /> 
          <ProtectedRoute exact path="/users" component={Users} /> 
          <ProtectedRoute exact path="/admin-article" component={Article} /> 
          <ProtectedRoute exact path="/admin-article-add" component={ArticleAdd} /> 
          <ProtectedRoute name="add_user" exact path="/admin-add-user" component={UserAdd} /> 
          <ProtectedRoute name="admin-slides" exact path="/admin-slides" component={Slides} /> 
          <ProtectedRoute  exact path="/test-compontent" component={TestComponent} /> 
          <ProtectedRoute  exact path="/institution" component={Institution} /> 
          <ProtectedRoute  exact path="/cotisations" component={Cotisation} /> 
        </Switch>
     );
}
 
export default RouteComponent;