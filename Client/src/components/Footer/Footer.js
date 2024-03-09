import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} sm={6}>
            <h1 className='footerh1' style={{marginTop:"15px"}}>EduTrax</h1>
            <p className='footerp'>It is a long established fact that a reader<br></br> will be distracted by the readable content of a page <br></br> when looking at its layout. </p>
            <a href="#"><i className="fab fa-linkedin linkedin iconspace" style={{color:"006db0" ,fontSize:"20px"}}></i></a>
            <a href="#"><i className="fab fa-facebook facebook iconspace" style={{color:"#295ec9" ,fontSize:"20px"}}></i></a>
            <a href="#"><i className="fab fa-google google iconspace" style={{fontSize:"20px"}}></i></a>
            <a href="#"><i className="fab fa-youtube youtube iconspace " style={{color:"#FF0000",fontSize:"20px"}}></i></a>
          </Col>
          
          <Col md={4} sm={12}>
            <h2 style={{marginTop:"15px"}}> Quick Links </h2>
            <p className='Quicklinksp'>    Latest Courses</p>
    <p className='Quicklinksp'>Mission & Vision</p>
    <p className='Quicklinksp'>Our Approach</p>
    <p className='Quicklinksp'>Exclusive Advisors</p>
   <p className='Quicklinksp'> Join A Carrer </p> 
           
          </Col>
          <Col md={4} sm={6}>
            <h2 style={{marginTop:"15px"}}>Contact Us</h2>
            <i class="fas fa-map-marker-alt contact contacticon"></i>  <span style={{fontWeight:" 600"}}> 123 Main Street, City, Country</span> <br></br>
            <i class="fas fa-envelope contacticon"></i> <span style={{fontWeight:" 600"}}>Email: info@example.com</span> <br></br>
            <i class="fas fa-phone contacticon"></i> <span style={{fontWeight:" 600"}}>Phone: +123 456 789</span>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <Row>
            <hr></hr>
            <Col>
              <p className="text-center">&copy; 2024 EduTrax. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;