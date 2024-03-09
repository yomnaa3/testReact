
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Certificate.css'
import certificateImage from '../../../Assets/certificateImage.png'
import mint from '../../../Assets/mint.jpg'

const Certificate = () => {
  return (
    <div>
      <Container className='certificatecontainer' style={{ marginTop: "100px" }}>
        <Row>

          <Col className='certificatetxt' style={{ marginLeft: "auto", marginTop: "90px" }}>

            <h1 className='certificateh1' style={{ marginLeft: "120px" }}>get your quaility</h1>
            <p className='certificatep' style={{ marginLeft: "120px" }}> Skill Certificate <br></br>From The EduTrax.</p>
            <Button className='certificatebtn' style={{ borderRadius: "30px", fontSize: "16px", backgroundColor: "#018883", marginTop: "30px", border: "none", marginLeft: "280px" }}>Get Start Now <i class="fas fa-arrow-right"></i></Button>


          </Col>
          <Col>
            <img className='certificateimg' style={{ height: "300px", marginTop: "50px ", marginLeft: "800px" }} src={certificateImage} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Certificate;
