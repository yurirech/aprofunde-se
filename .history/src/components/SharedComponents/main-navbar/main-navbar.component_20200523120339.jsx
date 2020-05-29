import React from 'react';
import {Header} from "./main-navbar.styles";
import {withRouter, Link} from 'react-router-dom'
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {ReactComponent as AprofundeSeLogo} from '../../../assets/icon/aprofunde-se-logo-navbar.svg';

const MainNavBar = ({location}) => {
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
            <div class='dropdown'>
              <Link to='/tours'>Day Tours</Link>
              <div class='dropdown-items'>
                <Link to='/'>1</Link>
                <Link to='/'>2</Link>
                <Link to='/'>3</Link>
              </div>
            </div>
            <div class='dropdown'>
              <Link to='/packages'>Pacotes</Link>
              <div class='dropdown-items'>
                <Link to='/pakcages/embrenhe-se'>Embrenhe-se</Link>
                <Link to='/packages/entranhe-se'>Entranhe-se</Link>
                <Link to='/packages/entregue-se'>Entregue-se</Link>
              </div>
            </div>
            <Link to='/'>Inspire-se</Link>
            <Link to='/'>Instagram</Link>
            <Link to='/' >Contato</Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Header>
    );
  };


export default withRouter(MainNavBar);
