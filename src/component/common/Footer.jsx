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
    <CardFooter className='pageFooter'>
        {/* {unreadEmail ?
          <EmailIcon sx={{
            color: "#0278fb",
            fontSize: "50px"
          }} />
         : 
          <MarkEmailUnreadIcon sx={{
            color: "#0278fb",
            fontSize: "50px"
          }} />
        } */}
    <div> 
    <p>  <span>PowerYard</span> © 2024 Lazer Logistics, Inc. and IGIT Enterprises, Inc. D/B/A e4score.com. All Rights Reserved. Patent Pending  Version : 2.3.3.0</p>
    </div> 
        {/* {unreadMessage ?
          <MessageIcon sx={{
            color: "#0278fb",
            fontSize: "50px"
          }} />
        :
          <MarkUnreadChatAltIcon sx={{
            color: "#0278fb",
            fontSize: "50px"
          }} />
        } */}
    </CardFooter>
  );
};

export default Footer;