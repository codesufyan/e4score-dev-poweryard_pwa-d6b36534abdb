import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/common/Header';
import { Col, Row } from 'reactstrap';
// import Guage from '../component/common/Guage';\
import Guage from '../component/common/Guage';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loginCheck = localStorage.getItem('loginCheck');
    if (loginCheck !== 'true') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className='page_top_margin p-3'>
      <Header pageName="Jockey Control Center" showVersion />
      <Row className='mt-4'>
        <Col sm="3" md="3">
          <div className='dashboard_heading'>
            <h3 className='text-center w-75 d-flex justify-content-center align-items-center'>Tasks</h3>
            <Guage descriptionInBottom />
          </div>
        </Col>
        <Col sm="3" md="3">
          <div className='dashboard_heading'>
            <h3 className='text-center w-75 d-flex justify-content-center align-items-center'>On-Site</h3>
            <Guage descriptionInBottom />
          </div>
        </Col>
        <Col sm="3" md="3">
          <div className='dashboard_heading'>
            <h3 className='text-center w-75 d-flex justify-content-center align-items-center'>Yard Check</h3>
            <Guage descriptionInBottom />
          </div>
        </Col>
        <Col sm="3" md="3">
          <div className='dashboard_heading'>
            <h3 className='text-center w-75 d-flex justify-content-center align-items-center'>Yard View</h3>
            <Guage descriptionInBottom />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
