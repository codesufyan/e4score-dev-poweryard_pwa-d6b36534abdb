
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../component/common/Header';
// import { Col, Row } from 'reactstrap';

// import Guage from '../component/common/Guage';

// const Dashboard = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loginCheck = localStorage.getItem('loginCheck');
//     if (loginCheck !== 'true') {
//       navigate('/');
//     }
//   }, [navigate]);

//   return (
//     // className='page_top_margin p-3'
//     <div style={{overflow:'hidden'}} >
//       <Header pageName="Jockey Control Center" showVersion />



//       <Row className='mt-4'>
//         <Col sm="3" md="3">
//           <div className='dashboard_heading'>
//             <h3 className='text-center w-75 d-flex justify-content-center align-items-center'>Tasks</h3>
//             <Guage descriptionInBottom />
//           </div>
//         </Col>
//         <Col sm="3" md="3">
//           <div className='dashboard_heading'>
//             <h3 className='text-center w-75 d-flex justify-content-center align-items-center'>On-Site</h3>
//             <Guage descriptionInBottom />
//           </div>
//         </Col>
//         <Col sm="3" md="3">
//           <div className='dashboard_heading'>
//             <h3 className='text-center w-75 d-flex justify-content-center align-items-center'>Yard Check</h3>
//             <Guage descriptionInBottom />
//           </div>
//         </Col>
//         <Col sm="3" md="3">
//           <div className='dashboard_heading'>
//             <h3 className='text-center w-75 d-flex justify-content-center align-items-center'>Yard View</h3>
//             <Guage descriptionInBottom />
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Dashboard;






import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/common/Header';
import Guage from '../component/common/Guage';
import InfoCard from '../component/common/InfoCard'; 
import IconToday from '../assets/IconToday.png';
import IconInternet from '../assets/IconInternet.png';
import IconLocation from '../assets/IconLocation.png';
import EllipseImage from '../assets/Ellipse.svg';
import CornerImage from '../assets/Chat.svg'; // Import the SVG image

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loginCheck = localStorage.getItem('loginCheck');
    if (loginCheck !== 'true') {
      navigate('/');
    }
  }, [navigate]);

  const tasksItems = [
    { label: 'Pending', value: 15, color: 'text-info' },
    { label: 'Assigned', value: 5, color: 'text-primary' },
    { label: 'In-Progress', value: 5, color: 'text-warning' },
    { label: 'Complete', value: 30, color: 'text-success' },
    { label: 'Cancelled', value: 5, color: 'text-danger' }
  ];

  const yardCheckItems = [
    { label: 'Total Checks', value: 45, color: 'text-info' },
    { label: 'Completed', value: 30, color: 'text-success' },
    { label: '%Remaining', value: 40, color: 'text-danger' }
  ];

  const yardViewItems = [
    { label: 'Open', value: 15, color: 'text-info' },
    { label: '%Full', value: 60, color: 'text-danger' }
  ];

  return (
    <div style={{ overflow: 'hidden' }}>
      <Header pageName="Jockey Control Center" showVersion />
      <div className="d-flex justify-content-center mt-4" style={{ overflow: 'hidden', fontFamily: 'DM Sans' }}>
        <InfoCard
          ellipseImgSrc={EllipseImage}
          imageSrc={IconToday}
          title="Today"
          content={<div>05/10/2024 <span style={{ display: 'flex', alignItems: 'flex-start', color: 'white', flexDirection: 'column' }}>9:45am CST</span></div>}
        />
        <InfoCard
          ellipseImgSrc={EllipseImage}
          imageSrc={IconLocation}
          title="Location"
          content="Tyler TX USA"
        />
        <InfoCard
          ellipseImgSrc={EllipseImage}
          imageSrc={IconInternet}
          title="Internet Service"
          content={<span style={{ color: '#51B32E', fontSize: 40.68, fontWeight: 700, fontFamily: 'DM Sans' }}>Good</span>}
        />
      </div>
      <div className="gauge-container mt-4">
        <Guage
          title="Tasks"
          value={60}
          max={100}
          items={tasksItems}
          description="All"
        />
        <Guage
          title="Yard Check"
          value={0} // Assuming 0 as no value was provided
          max={100}
          items={yardCheckItems}
          description="In-Progress"
        />
        <Guage
          title="Yard View"
          value={50}
          max={100}
          items={yardViewItems}
          description="Spots Total"
        />
      </div>
      <div>
        <p className='ParaNoti'>Please check spot R7 if trailer in!! : <span className='ParaNoti_span'>Dispatcher 8:45pm Jul 7th 2022</span></p>
      </div>
      <div className="corner-image-container">
        <img src={CornerImage} alt="Corner SVG" className="corner-image" />
      </div>
    </div>
  );
};

export default Dashboard;












