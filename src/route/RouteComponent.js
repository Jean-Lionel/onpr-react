import {
    Switch,
    Route,
  } from "react-router-dom";
import BasePage from "../BasePage";
import Home from "../Home";
import AddUserToInstution from "../Pages/AddUserToInstution";
import Admin from "../Pages/Admin";
import ArticleAdd from "../Pages/Admin/articles/ArticleAdd";
import Article from "../Pages/Admin/articles/Articles";
import Cotisation from "../Pages/Admin/contisation/Cotisation";
import DetailDeclaration from "../Pages/Admin/DetailDeclaration";
import Institution from "../Pages/Admin/institution/Institution";
import InstitutionAdd from "../Pages/Admin/institution/InstitutionAdd";
import Slides from "../Pages/Admin/Slides/Slides";
import Users from "../Pages/Admin/Users";
import UserAdd from "../Pages/Admin/users/UserAdd";
import ConsultationCotisation from "../Pages/ConsultationCotisation";
import ConsultationCotisationDetataches from "../Pages/ConsultationCotisationDetataches";
import DeclarationFormulaire from "../Pages/DeclarationFormulaire";
import Login from "../Pages/Login";
import OnlineService from "../Pages/OnlineService";
import RecievedMessageDetail from "../Pages/RecievedMessageDetail";
import RicievedMessage from "../Pages/RicievedMessage";
import TestComponent from "../Pages/TestComponent";
import WebAdmin from "../Pages/WebAdmin";
import ProtectedRoute from "../utility/ProtectedRouter";

const RouteComponent = () => {
    return ( 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/detail" component={BasePage} />
          <Route exact path="/online-service" component={OnlineService} />
          <Route exact path="/client-consultation-cotisation-afilier" component={ConsultationCotisation} />
          <Route exact path="/client-consultation-cotisation-detaches" component={ConsultationCotisationDetataches} />
          <Route exact path="/client-declaration" component={DeclarationFormulaire} />
          <ProtectedRoute exact path="/admin" component={Admin} /> 
          <ProtectedRoute exact path="/users" component={Users} /> 
          <ProtectedRoute exact path="/admin-article" component={Article} /> 
          <ProtectedRoute exact path="/admin-article-add" component={ArticleAdd} /> 
          <ProtectedRoute name="add_user" exact path="/admin-add-user" component={UserAdd} /> 
          <ProtectedRoute name="admin-slides" exact path="/admin-slides" component={Slides} /> 
          <ProtectedRoute  exact path="/test-compontent" component={TestComponent} /> 
          <ProtectedRoute  exact path="/institution" component={Institution} /> 
          <ProtectedRoute  exact path="/cotisations" component={Cotisation} /> 
          <ProtectedRoute  exact path="/institutions/add" component={InstitutionAdd} /> 
          <ProtectedRoute  exact path="/web" component={WebAdmin} /> 
          <ProtectedRoute  exact path="/ricieved-message" component={RicievedMessage} /> 
          <ProtectedRoute  exact path="/ricieved-message/:id" component={RecievedMessageDetail} /> 
          <ProtectedRoute  exact path="/add-user-to-institution/:id" component={AddUserToInstution} /> 
          <ProtectedRoute  exact path="/show-detail-declaration/:id" component={DetailDeclaration} /> 
        </Switch>
     );
}
 
export default RouteComponent;