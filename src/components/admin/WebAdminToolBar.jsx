import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useHistory} from "react-router-dom";

function LinkTab(props) {
    const history = useHistory();
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
        history.push(props.to);
      }}
      {...props}
    />
  );
}

export default function WebAdminToolBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Page One" to="/drafts" />
        <LinkTab label="Page Two" to="/trash" />
        <LinkTab label="Page Three" to="/spam" />
      </Tabs>
    </Box>
  );
}
