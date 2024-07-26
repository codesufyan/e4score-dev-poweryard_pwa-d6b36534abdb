// import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
// import React, { useState } from 'react';
// import {
//   Navbar,
//   NavbarToggler,
//   Nav,
//   NavItem,
//   NavLink,
// } from 'reactstrap';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import CameraRearIcon from '@mui/icons-material/CameraRear';
// import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
// import { useNavigate } from 'react-router-dom';

// function Menu(args) {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   const clickHandler = (text) => {
//     if (text === "Dashboard") return navigate("/dashboard");
//     if (text === "Yard View") return navigate("/yard-view");
//     if (text === "On Site") return navigate("/onsite");
//   };

//   const icons = (page) => {
//     if (page === "Dashboard") return <DashboardIcon />;
//     if (page === "Yard View") return <CameraRearIcon />;
//     if (page === "On Site") return <ViewQuiltIcon />;
//   };

//   const list = () => (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onClick={toggle}
//       onKeyDown={toggle}
//     >
//       <List>
//         {['Dashboard', 'Yard View', 'On Site'].map((text, index) => (
//           <ListItem key={text} onClick={() => clickHandler(text)}>
//             <ListItemButton>
//               <ListItemIcon>
//                 {icons(text)}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//     </Box>
//   );

//   return (
//       <Navbar {...args} expand={false} fixed="top" className='menu_bar' full={false}>
//         <NavbarToggler onClick={toggle} />
//         <Drawer
//           anchor="left"
//           open={isOpen}
//           onClose={toggle}
//           className='drawer'
//         >
//           {list()}
//         </Drawer>
//       </Navbar>
//   );
// }

// export default Menu;







import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CameraRearIcon from '@mui/icons-material/CameraRear';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

function Menu(args) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const clickHandler = (text) => {
    if (text === "Dashboard") return navigate("/dashboard");
    if (text === "Yard View") return navigate("/yard-view");
    if (text === "On Site") return navigate("/onsite");
    if (text === "Logout")  return navigate("/"); 
    
  };

  const icons = (page) => {
    if (page === "Dashboard") return <DashboardIcon />;
    if (page === "Yard View") return <CameraRearIcon />;
    if (page === "On Site") return <ViewQuiltIcon />;
    if (page === "Logout") return <LogoutIcon />;
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggle}
      onKeyDown={toggle}
    >
      <List>
        {['Dashboard', 'Yard View', 'On Site', 'Logout'].map((text) => (
          <ListItem key={text} onClick={() => clickHandler(text)}>
            <ListItemButton>
              <ListItemIcon>
                {icons(text)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Navbar {...args} expand={false} fixed="top" className='menu_bar' full={false}>
      <NavbarToggler onClick={toggle} />
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggle}
        className='drawer'
      >
        {list()}
      </Drawer>
    </Navbar>
  );
}

export default Menu;
