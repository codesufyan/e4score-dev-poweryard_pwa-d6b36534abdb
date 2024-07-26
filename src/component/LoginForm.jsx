// import React from 'react';
// import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import { useNavigate } from "react-router-dom";

// const LoginForm = () => {
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     // Handle form submission logic
//     event.preventDefault();
//     navigate("/dashboard");
//     // Add your login logic here
//   };

//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <div className="login_box">
//             <h2>Login</h2>
//             <Form onSubmit={handleSubmit}>
//               <FormGroup>
//                 <Label for="username">Username</Label>
//                 <Input type="text" name="username" id="username" required />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="password">Password</Label>
//                 <Input type="password" name="password" id="password" required />
//               </FormGroup>
//               <Button type="submit" color="primary">Login</Button>
//             </Form>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default LoginForm;




import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, InputGroup, InputGroupText } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import axios from '../axios';  // Adjust the import if you have a different Axios setup
import logo from '../assets/Pwerdyard.png';
import passwordViewIcon from '../assets/passwordview.png';

const LoginForm = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Log the data being sent to the server
      console.log('Attempting login with:', {
        username: email,
        password: password
      });

      const response = await axios.post('https://py-dev-api.e4score.com/authentication/v2/login', {
        username: email,
        password: password
      }, {
        withCredentials: true
      });

      // Log the server response for debugging
      console.log('Login response:', response.data);
     
      if (response.data.code === '200') {
        navigate("/dashboard");
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);

      // Display more specific error messages if available
      if (error.response) {
        if (error.response.status === 401) {
          setError('Unauthorized: Invalid email or password');
        } else {
          setError(`Error: ${error.response.statusText}`);
        }
      } else if (error.request) {
        setError('No response received from server.');
      } else {
        setError('An error occurred during login. Please try again.');
      }
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="login-box">
            <div className="login-header">
              <img src={logo} alt="Logo" />
              <h2>Hey, Jockey Control Center 👋</h2>
              <p>Enter the information you entered while registering.</p>
            </div>
            <Form className="Form-box" onSubmit={handleSubmit}>
              {error && <p className="text-danger">{error}</p>}
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder='Jockey123@e4score.com'
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <InputGroup>
                  <Input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                  <InputGroupText onClick={togglePasswordVisibility}>
                    <img src={passwordViewIcon} alt="Toggle Password Visibility" />
                  </InputGroupText>
                </InputGroup>
              </FormGroup>
              <Button type="submit" block>Sign In</Button>
            </Form>
            <div className="login-footer">
              <p>
                <strong><span>PowerYard © 2024 </span> Lazer Logistics, Inc. and IGIT Enterprises, Inc. D/B/A e4score.com. All Rights Reserved. Patent Pending</strong>
              </p>
              <p>Version : <span> 2.3.3.0</span></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;



