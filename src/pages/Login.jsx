import React from 'react'
import LoginForm from '../component/LoginForm';
// import { Col, Row } from 'reactstrap';

const Login = () => {
  return (
    <div className='loginn_bg'>
      <LoginForm />
      {/* <Row className='login_page_links fs-4'> */}
      {/* <Col>
          <p><span className='fw-bold text-danger'>Alert: </span>New version 2.023 Available - <br />please <a href="#">click here</a> to update!</p>

          <p><span className='fw-bold text-danger'>Alert: </span>Your internet connection is unstable, <br />please check your connectivity <a href="#">here</a></p>
        </Col> */}
      {/* </Row> */}
    </div>
  );
};

export default Login;