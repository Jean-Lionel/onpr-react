import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Box } from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import useFetchData from '../../../utility/useFecthData';

const PrimarySearchAppBar = () => {
  const [unreadMessage, setUnreadMessage] = useState(0);
  const {data} =  useFetchData('unReadDeclaration');
  const message = useMemo(() => data?.data?.success , [data]);

  useEffect(() => {
    setUnreadMessage(message)
  }, [message]);
  
  return ( <Box sx={{ 
    display: 'flex',
    marginRight: '6px',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5rem',
    backgroundColor: '#fafafa',
    borderBottom: '1px solid #e0e0e0',
    borderTop: '1px solid #e0e0e0',
    borderLeft: '1px solid #e0e0e0',
    borderRight: '1px solid #e0e0e0',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)',
    borderRadius: '0.5rem',

  }}>
    <Badge badgeContent={JSON.stringify(unreadMessage)} color="success">
        <MailIcon color="action" />
    </Badge>
   
  </Box> );
}
 
export default PrimarySearchAppBar;