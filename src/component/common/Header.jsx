// import React, { useState } from "react"
// import { Col, Row } from "reactstrap"

// const Header = ({ pageName, showVersion = false }) => {
//     const [timeAndDate, setTimeAndDate] = useState("7th July 2022 9:45am CST");
//     const [location, setLocation] = useState("Tyler TX USA");
//     const [netService, setNetService] = useState("Good");
//     const [userName, setUserName] = useState("John Doe");
//     const [organization, setOrganization] = useState("DAIKIN GOODMAN (WALLER TX)");
//     const [version, setVersion] = useState("v2.10 Rel May 7th 2021");

//   return (
//     <Row>
//         <Col sm="4" md="4" className="text-start">
//             <div className="left_items fs-5">
//                 <p><span className="fw-bold">Today: </span>{timeAndDate}</p>
//                 <p><span className="fw-bold">Location: </span>{location}</p>
//                 <p><span className="fw-bold">Internet Service: </span>{netService}</p>
//             </div>
//         </Col>
//         <Col sm="4" md="4" className="text-center">
//             <div className="page_heading">
//                 <h1>Poweryard</h1>
//                 <h2>{pageName}</h2>
//                 {showVersion && <p>{version}</p>}
//             </div>
//         </Col>
//         <Col sm="4" md="4" className="text-end">
//             <div className="left_items">
//                 <p className="fs-5">{organization}</p>
//                 <p>{userName} / Jocky</p>
//                 <p><span className="fw-bold fs-6">Last Login: </span>{netService}</p>
//             </div>
//         </Col>
//     </Row>
//   );
// };

// export default Header;


// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";


// const Header = ({ pageName, showVersion = false }) => {
//   return (
//     <div className="header-container">
//       <div className="header-left">
//         {/* Left Corner Icons */}
//         <FontAwesomeIcon icon={faSearch} className="icon" />
//       </div>
//       <div className="header-center">
//         <h1 className="title">
//           Poweryard <span className="sub-title">Jockey Control Center</span>
//         </h1>
//         {showVersion && <p className="version">v2.10 Rel May 7th 2024</p>}
//       </div>
//       <div className="header-right">
//         {/* Right Corner Icon */}
//         <FontAwesomeIcon icon={faBell} className="icon" />
//       </div>
//     </div>
//   );
// };

// export default Header;


import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import { Box, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CameraRearIcon from '@mui/icons-material/CameraRear';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Header = ({ pageName, showVersion = false }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const clickHandler = (text) => {
    if (text === "Dashboard") return navigate("/dashboard");
    if (text === "Yard View") return navigate("/yard-view");
    if (text === "On Site") return navigate("/onsite");
    if (text === "Logout") return localStorage.clear(), navigate("/");
  };

  const icons = (page) => {
    if (page === "Dashboard") return <DashboardIcon />;
    if (page === "Yard View") return <CameraRearIcon />;
    if (page === "On Site") return <ViewQuiltIcon />;
    if (page === "Logout") return <LogoutIcon />;
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <List>
        {['Dashboard', 'Yard View', 'On Site', 'Logout'].map((text) => (
          <ListItem key={text} button onClick={() => clickHandler(text)}>
            <ListItemIcon>{icons(text)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="header-container">
      <div className="header-left">
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          {list()}
        </Drawer>
        <FontAwesomeIcon icon={faSearch} className="icon" />
      </div>
      <div className="header-center">
        <h1 className="title">
          Poweryard <span className="sub-title">Jockey Control Center</span>
        </h1>
        {showVersion && <p className="version">v2.10 Rel May 7th 2024</p>}
      </div>
      <div className="header-right">
        <FontAwesomeIcon icon={faBell} className="icon" />
      </div>
    </div>
  );
};

export default Header;
