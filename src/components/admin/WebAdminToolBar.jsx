import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useGetConnectedUser from "../../utility/useGetConnectedUser";
import BackGroundImage from './web/BackGroundImage';
import AdmnistrationWeb from '../../blog/components/AdmnistrationWeb';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

export default function WebAdminToolBar() {
  const [value, setValue] = React.useState(0);
  const {userConnected} = useGetConnectedUser();
  return (
    <Box sx={{ width: '100%' }}>
    
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} aria-label="basic tabs example">
          {userConnected.isAdmin() && (
                <Tab label="admnistration" onClick={() => setValue(0)}/>
          )}
          {userConnected.isAdmin() && (
                <Tab label="Photo" onClick={() =>  setValue(1)} />
          )}

          <Tab label="Déclaration des données pour les membres"  onClick={() =>  setValue(2)}  />
          <Tab label="Mes déclarations" onClick={() =>  setValue(3)} />
        </Tabs>
       
      </Box>
      {userConnected.isAdmin() && (
        <Box>
          <TabPanel value={value} index={0}>
            <AdmnistrationWeb/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <BackGroundImage />
          </TabPanel>
        </Box>
      )}
      <TabPanel value={value} index={2}>
      
      </TabPanel>
      <TabPanel value={value} index={3}>
    
      </TabPanel>
      
    </Box>
  );
}
