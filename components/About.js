import React from 'react';
import { Container, Row, Col } from "reactstrap";


const About = () => {

  return (
    <section className="section bg-light" id="about">
      <Container style={{backgroundColor:'#fcf2e8', paddingTop:'30px', paddingBottom:'30px'}}>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">About <span className="text-warning">Us</span></h3>
              <p className="text-muted">Footwear exclusives and more for every brand name on the market. It evolves one-stop sneaker destination to a cultural hub for sneaker enthusiasts and novices.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h1 className="font-weight-light line-height-1_6 text-dark mb-4">Lifestyle Footwear Apparel Signature Athletes</h1>
          
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row style={{ WebkitTextFillColor:'#173646'}}>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Our Mission</h6>
                <p className="text-muted font-weight-light">To bring stories and inspirations together and resonate a lifestyle that reflects personality, identity, and creations</p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-3">Our Vision</h6>
                <p className="text-muted font-weight-light">Bring happiness, connection, memories, and sanctuary for passion</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;