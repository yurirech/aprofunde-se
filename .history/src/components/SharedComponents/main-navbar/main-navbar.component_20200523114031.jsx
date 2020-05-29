import React from 'react';
import {Header} from "./main-navbar.styles";
import {withRouter, Link} from 'react-router-dom'
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {ReactComponent as AprofundeSeLogo} from '../../../assets/icon/aprofunde-se-logo-navbar.svg';

const MainNavBar = ({onRouteChange, location}) => {
    return (
      <Header headerAbsolute={location.pathname === '/' ? 'absolute' : null} >
        <Navbar>
          <div className='nav-header'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Link to='/'>
              <Navbar.Brand class='brand'>
                <AprofundeSeLogo />
              </Navbar.Brand>
            </Link>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to='/'>Início</Link>
            <Link to='/about'>Sobre</Link>
            <div>
              <Link to=></Link>
            </div>
            <NavDropdown  title="Day Tours" id="tours">
              <NavDropdown.Item  onClick={() => onRouteChange('embrenhe-se') }>Embrenhe-se</NavDropdown.Item>
              <NavDropdown.Item  onClick={() => onRouteChange('entranhe-se') }>Entranhe-se</NavDropdown.Item>
              <NavDropdown.Item onClick={() => onRouteChange('entregue-se') }>Entregue-se</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown  title="Pacotes" id="tours">
              <NavDropdown.Item  onClick={() => onRouteChange('embrenhe-se') }>Embrenhe-se</NavDropdown.Item>
              <NavDropdown.Item  onClick={() => onRouteChange('entranhe-se') }>Entranhe-se</NavDropdown.Item>
              <NavDropdown.Item onClick={() => onRouteChange('entregue-se') }>Entregue-se</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#day-tours">Inspire-se</Nav.Link>
            <Nav.Link href="#instagram">Instagram</Nav.Link>
            <Nav.Link href="#contact">Contato</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Header>
    );
  };


export default withRouter(MainNavBar);
