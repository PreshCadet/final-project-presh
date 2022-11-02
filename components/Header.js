
import React, { useState, useEffect } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Modal from './Modal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isModalOpen, setModalIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  return (
  
    <section className="section" id="Home">
      
    <div className={`header${sticky ? ' sticky' : ''}`}>
      <Navbar light expand="md">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>

            <NavItem>
            <NavLink style={{fontFamily:"monospace"}}>S A P A T O S | S H O E S . P H </NavLink>
            </NavItem>

              <NavItem>
                <NavLink href="#Home">Home</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#Catalog">Catalog</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#Brands">Brands</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink>
                <Modal open={isModalOpen} onClose={() => setModalIsOpen(false)}>
                </Modal>
                </NavLink>
                
              </NavItem>

            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
   
   </section>


     
  );
}

export default Header;