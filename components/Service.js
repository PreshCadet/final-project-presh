import React from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import { storage } from '../context/firebase';
import { listAll, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from 'react';
import {v4} from 'uuid';


const Service = () => {
    const services = [
      { title : "Jordan", desc : "Hoops Inspired Comfort and Classic Jordan Style in Nike Air Jordans" },
      { title : "Nike", desc : "Be Your Best Every Time With Nike Shoes & Clothing" },
      { title : "Adidas", desc : "Express your creativity through our adidas originals shoes and sneakers, a perfect fusion of sport and style." },
      { title : "PUMA", desc : "PUMA men's shoes give you a performance boost with comfortable cushioning technology that provides your feet a supportive fit." },
      { title : "New Balance", desc : "Tackle your workouts with confidence in performance running shoes and stylish clothes from New Balance." },
      { title : "Converse", desc : "lifestyle wear that markets, distributes, and licenses sneakers, skating shoes, lifestyle brand footwear, apparel, and accessories." },
    ]
  
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");

  useEffect(() => {
        listAll(imageListRef).then((response) => {
          response.items.forEach((item) => {
              getDownloadURL(item).then((url) => {
                setImageList((prev) => [...prev, url])
              })
          })
        });
      }, []);


  return (
    <section className="section" id="Brands">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8} >
            <div className="title text-center mb-5 mt-5">
              <h3 className="font-weight-normal text-dark" style={{backgroundColor:"#173646", paddingTop: 3, paddingBottom: 3, borderRadius: 20}}><span className="text-warning">Brands</span></h3>
              <p className="text-muted">We pride for sharing different sources for passion, lifestyle, and inspiration. These brands celebrate and empower individuality, capabilities, and more to show you the impact of <i>SAPATOS</i> </p>
            </div>
          </Col>
        </Row>
        <center>
      <iframe width="820" height="530" src="https://www.youtube.com/embed/3jk7KFvjWVI?autoplay=1&mute=1&controls=0&loop=1&playlist=3jk7KFvjWVI"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ></iframe> </center>
  
        <Row>
          {
            services.map((service, key) =>
             <Col key={key} lg={4} md={5}>
               <div className="mb-5">
                 <div className="mb-5">
                     <i className={service.icon}></i>
                 </div>
                 <h5 className="text-dark font-weight-normal pt-1 mb-4">{service.title}</h5>
                 <p className="text-muted mb-4">{service.desc}</p>
               </div>
             </Col>
           )
          }
        </Row>
          <Row>

          <Col className="lg={4} md={6} rg={4}">
                <div>

                  <center>{imageList.map ((url) => {
                    return <img src={url} className="pt-1 mb-4" style={{width:'20%', height:'20%'}} />
                            }) }
  
                  </center>
                </div>
              </Col>
          </Row>

      </Container>
    </section>
  );
}

export default Service;