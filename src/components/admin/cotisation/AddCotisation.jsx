import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddCotisationAfilier from '../../../Pages/Admin/contisation/AddCotisationAfilier';
import AddCotisationDetache from './AddCotisationDetache';

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="publications des données des affiliers" />
          <Tab label="publications des données des detaches"  />
          <Tab label="Déclaration des données des affiliers"  />
          <Tab label="Déclaration des données des detaches"  />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <AddCotisationAfilier/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <AddCotisationDetache/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      12
      </TabPanel>
      <TabPanel value={value} index={3}>
       13
      </TabPanel>
      
    </Box>
  );
}
