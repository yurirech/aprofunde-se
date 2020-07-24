import React from 'react';
import {Header} from "./main-navbar.styles";
import {withRouter, Link} from 'react-router-dom'
import {Nav, Navbar} from "react-bootstrap";
import {ReactComponent as AprofundeSeLogo} from '../../../assets/icon/aprofunde-se-logo-navbar.svg';

const MainNavBar = ({location}) => {
    return (
      <Header headerAbsolute={location.pathname === '/' ? 'absolute' : null} >
        <Navbar>
          <div className='nav-header'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Link to='/'>
              <Navbar.Brand className='brand'>
                <AprofundeSeLogo />
              </Navbar.Brand>
            </Link>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to='/'>Início</Link>
            <Link to='/about'>Sobre</Link>
            <div className='dropdown'>
              <Link to='/day-tours'>Day Tours</Link>
              <div className='dropdown-items'>
                <Link to='/day-tours/gouda'>Gouda & Rotterdam</Link>
                <Link to='/day-tours/haarlem'>Haarlem & Praia de bicicleta</Link>
                <Link to='/day-tours/delft'>T.U. Delft & Fazenda</Link>
                <Link to='/day-tours/giethoorn'>Giethoorn & Dolmen</Link>
                <Link to='/day-tours/delta'>Delta Works & Middelburg</Link>
                <Link to='/day-tours/utrecht'>Utrecht & Castelo</Link>
                <Link to='/day-tours/haag'>Den Haag & Museu Voorlinden</Link>
                <Link to='/day-tours/kroller'>Museu Kroller Müller & Amersfoort</Link>
                <Link to='/day-tours/zaanse'>Zaanse Schans & Volendam</Link>
                <Link to='/day-tours/park'>Parque de diversões & Sauna</Link>
              </div>
            </div>
            <div className='dropdown'>
              <Link to='/packages'>Pacotes</Link>
              <div className='dropdown-items'>
                <Link to='/packages/embrenha'>Embrenhe-se</Link>
                <Link to='/packages/entranhe'>Entranhe-se</Link>
                <Link to='/packages/entregue'>Entregue-se</Link>
              </div>
            </div>
            <div className='dropdown'>
            <Link to='/inspire'>Inspire-se</Link>
              <div className='dropdown-items'>
                <Link to='/inspire/innovate'>Inove-se</Link>
                <Link to='/inspire/relax'>Relaxe-se</Link>
                <Link to='/inspire/adventure'>Aventure-se</Link>
              </div>
            </div>
           
            <Link to='/instagram'>Instagram</Link>
<<<<<<< HEAD:src/components/shared-components/main-navbar/main-navbar.component.jsx
            <Link to='/contact-us'>Contato</Link>
=======
            <Link to='/'>Contato</Link>
>>>>>>> master:src/components/SharedComponents/main-navbar/main-navbar.component.jsx
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Header>
    );
  };


export default withRouter(MainNavBar);
