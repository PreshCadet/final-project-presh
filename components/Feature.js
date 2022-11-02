import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { style } from '@mui/system';

const Feature = () => {
  return (
    <section className="section" id="Catalog">           
    <Container>
      <Row className="justify-content-center">
        <Col lg={7} md={8}>
          <div className="title text-center mb-5">
            <h3 className="font-weight-normal text-dark" style={{backgroundColor:"#173646", paddingTop: 3, paddingBottom: 3, borderRadius: 20}}><span className="text-warning">Catalog</span></h3>
            <p className="text-muted">Trends and Latest Footwear</p> <br/>
            <Carousel>
                  <div>
                      <img src="./images/Addidas.webp" alt="Addidas"/>
                      <div class="carousel-caption d-none d-md-block">
                      <h5>Addidas</h5>
                      <p>Addidas conquers controversy and empowers individuality.</p>
                      </div>
                  </div>
                  
                  <div>
                      <img src="./images/jordan.webp" alt="Jordan"/>
                      <div class="carousel-caption d-none d-md-block" style={{color:"black"}}>
                      <h5>Jordan</h5>
                      <p>Timeless Air Jordans</p>
                      </div>
		              </div>
                  
                  
                  <div>
                      <img src="./images/nike.png" alt="Nike"/>
                      <div class="carousel-caption d-none d-md-block" style={{color:"black"}}>
                      <h5>Nike</h5>
                      <p>See What's Next: Nike Zoom 2022 new releases</p>
                      </div>
  
                  </div>

                  <div>
                      <img src="./images/jordan2.jpg" alt="Jordan"/>
                      <div class="carousel-caption d-none d-md-block" style={{color:"black"}}>
                      <h5>Jordan</h5>
                      <p>A Classic: The Jordans</p>
                      </div>
                  </div>

                  <div>
                      <img src="./images/nike2.webp" alt="Nike"/>
                        <div class="carousel-caption d-none d-md-block" style={{color:"black"}}>
                        <h5>Nike</h5>
                        <p>Run with Nike</p>
                        </div>
                  </div>

                  <div>
                      <img src="./images/puma2.png" alt="Puma"/>
                      <div class="carousel-caption d-none d-md-block" style={{color:"black"}}>
                      <h5>PUMA</h5>
                      <p>Run anytime, any place</p>
                      </div>
                  </div>

                  <div>
                      <img src="./images/newbalance2.jpg" alt="NewBalance"/>
                      <div class="carousel-caption d-none d-md-block" style={{color:"black"}}>
                      <h5>New Balance</h5>
                      <p>Reinventing Tommorow</p>
                      </div>
                  </div>
              </Carousel>
    
              
          </div>
          
        </Col>
      </Row>

    </Container>
  </section>
);    

}

export default Feature;