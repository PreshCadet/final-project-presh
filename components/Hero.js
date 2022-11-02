import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section position-relative" style={{marginTop:"60px", marginBottom:"60px"}}>
      <Container >
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase font-weight-medium f-14 mb-4" style={{color:"#173646"}}>ESTD. 2022</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4"  style={{color:"#173646"}}>CHECK WHAT IS AT TREND <span style={{fontFamily:"monospace"}}>SAPATOS</span></h1>
              <p className="text-muted mb-4 pb-2">Check out genuine sneakers, shoes, exclusive drops and much more online from brands like Nike, Adidas Originals, Jordan, Vans, Puma, Fila, Yeezy, New Balance ,and more.</p>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target={'_blank'} className="btn btn-warning">
                Find Out How <span className="ml-2 right-icon">&#8594;</span>
              </a>

            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img src="/images/Sapatos.svg" style={{width:'380px'}} alt="" className="img-fluid mx-auto d-block"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;