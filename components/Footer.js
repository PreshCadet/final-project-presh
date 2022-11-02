import React from "react";
import { Container, Row, Col } from "reactstrap";


const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Brands",
      child: [
        { title: "Nike"},
        { title: "Adidas"},
        { title: "Jordan"},
        { title: "Vans"},
        { title: "and more..."}
      ]
    },
    {
      id: 2,
      title: "Home",
      child: [
        { title: "Home", link: "#Home"},
        { title: "Catalog", link: "#Catalog" },
        { title: "Brands", link: "#Brands" }
      ]
    }
  ];

  return (
    <section className="footer section" style={{marginTop:'50px'}}>
      <Container>
        <Row>
          <Col lg={4}>
            <div className="mb-4">
              <p className="text-muted mt-4 mb-2">precious.sorita@globe.com.ph</p>
              <h6 className="text-muted font-weight-normal">+99 1234-5678-9</h6>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              {links.map((link, key) => (
                <Col key={key} md={4}>
                  <h6 className="text-dark mb-3">{link.title}</h6>
                  <ul className="list-unstyled company-sub-menu">
                    {link.child.map((fLink, key) => (
                      <li key={key}>
                        <a href={fLink.link}>{fLink.title}</a>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}

              <Col md={4}>
                <h6 className="text-dark mb-3">SAPATOS | SHOES.PH</h6>
                <p className="text-muted f-14">
                  A start-up company created for sneakers and shoes enthusiasts
                </p>
                <h6 className="text-muted pb-2">Email: sapatos.shoes.ph@gmail.com</h6>
                <ul className="list-unstyled footer-social-list mt-4">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-5" style={{backgroundColor:'#173646', WebkitTextFillColor:'white'}}>
          <Col md={12}>
            <div className="text-center text-muted">
              <p className="mb-0 f-15">
                2022 © Technical Cadetship Globe Telecom, Inc.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
