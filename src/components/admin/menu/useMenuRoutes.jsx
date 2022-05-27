import CellTowerIcon from '@mui/icons-material/CellTower';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ArticleIcon from '@mui/icons-material/Article';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import BlenderIcon from '@mui/icons-material/Blender';

const useMenuRoutes = () => {


    const routes = [
        {
          name : "Web",
          path : "/web",
          icon : <CellTowerIcon />,
          isAdmin : true,

        },
        {
          name : "Utilisateurs",
          path : "/users",
          icon: <PeopleOutlineIcon />,
          isAdmin : true,
        },
        {
          name : "Articles",
          path : "/admin-article",
          icon: <ArticleIcon />,
          isAdmin : true,
        },
        {
          name : "Slides",
          path : "/admin-slides",
          icon : <SlideshowIcon/>,
          isAdmin : true,
        },
        {
          name : "Test",
          path : "/test-compontent"
        },
        {
          name : "Institution",
          path : "/institution",
          icon : <AdminPanelSettingsIcon />,
          isAdmin : true,
        },
        
        {
          name : "Déclaration",
          path : "/cotisations",
          icon : <BlenderIcon />,
          isAdmin : false,
        },
      
      ];


    return {
        routes
    };
}
 
export default useMenuRoutes;