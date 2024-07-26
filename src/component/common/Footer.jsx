import React, { useState } from 'react'
import { CardFooter } from 'reactstrap';
import EmailIcon from '@mui/icons-material/Email';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import MessageIcon from '@mui/icons-material/Message';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';

const Footer = () => {
  const [unreadEmail, setUnreadEmail] = useState(false);
  const [unreadMessage, setUnreadMessage] = useState(true);

  return (
    <CardFooter className='w-100 pageFooter'>
        {unreadEmail ?
          <EmailIcon sx={{
            color: "#0278fb",
            fontSize: "50px"
          }} />
         : 
          <MarkEmailUnreadIcon sx={{
            color: "#0278fb",
            fontSize: "50px"
          }} />
        }
        <p className='fs-4'>Please check spot R7 if trailor in!! : <span className='fs-6'>Dispatcher 8:45pm Jul 7th 2022</span></p>
        {unreadMessage ?
          <MessageIcon sx={{
            color: "#0278fb",
            fontSize: "50px"
          }} />
        :
          <MarkUnreadChatAltIcon sx={{
            color: "#0278fb",
            fontSize: "50px"
          }} />
        }
    </CardFooter>
  );
};

export default Footer;