import CellTowerIcon from '@mui/icons-material/CellTower';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
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