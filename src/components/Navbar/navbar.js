import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{
      margin: '0'
    }}>
      <Navbar style={{background: '#006738', margin: '0', padding: '0.5rem'}} dark expand="md" fixed='top'>
        <NavbarBrand style={{color: '#E5C595'}} href="/">DS Landscape & Maintenance</NavbarBrand>
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/careers/" style={{color: '#E5C595'}}> <h5 style={{margin: '0'}}>Careers</h5> </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;