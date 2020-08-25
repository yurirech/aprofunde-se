import React, {useState, useEffect} from 'react';
import {Dropdown, Header} from "./main-navbar.styles";
import {withRouter, Link} from 'react-router-dom'
import {Nav, Navbar} from "react-bootstrap";
import {ReactComponent as AprofundeSeLogo} from '../../../assets/icon/aprofunde-se-logo-navbar.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MainNavBar = ({location}) => {
    const [openDayTours, setOpenDayTours] = useState(true);
    const [openPackages, setOpenPackages] = useState(true);
    const [openInspire, setOpenInspire] = useState(true);

    useEffect(() => {
      console.log(openDayTours);
      console.log(openPackages);
      console.log(openInspire);
    })

    return (
      <Header headerAbsolute={location.pathname === '/' ? 'absolute' : null}>
        <Navbar collapseOnSelect>
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
            <Nav.Link as={Link} eventKey='1' to='/'>Início</Nav.Link>
            <Nav.Link as={Link} eventKey='2' to='/about'>Sobre</Nav.Link>

            <Dropdown displayDropdown={openDayTours ? 'none' : null}>
             <div className='header-dropdown'>
               <Nav.Link as={Link} eventKey='3' to='/day-tours'>Day Tours</Nav.Link>
               {
                 openDayTours ?

                   <FontAwesomeIcon
                     onClick={() => setOpenDayTours(() => !openDayTours)}
                     className='menu-icon-mobile'
                     icon='plus-circle'
                   />
                   :
                   <FontAwesomeIcon
                     onClick={() => setOpenDayTours(() => !openDayTours)}
                     className='menu-icon-mobile'
                     icon='minus-circle'
                   />
               }
             </div>

              <div className='dropdown-items day-tours'>
                <Nav.Link as={Link} eventKey='2' to='/day-tours/gouda'>Gouda & Rotterdam</Nav.Link>
                <Nav.Link as={Link} eventKey='2' to='/day-tours/haarlem'>Haarlem & Praia de bicicleta</Nav.Link>
                <Nav.Link as={Link} eventKey='2' to='/day-tours/delft'>T.U. Delft & Fazenda</Nav.Link>
                <Nav.Link as={Link} eventKey='2' to='/day-tours/giethoorn'>Giethoorn & Dolmen</Nav.Link>
                <Nav.Link as={Link} eventKey='2' to='/day-tours/delta'>Delta Works & Middelburg</Nav.Link>
                <Nav.Link as={Link} eventKey='2' to='/day-tours/utrecht'>Utrecht & Castelo</Nav.Link>
                <Nav.Link as={Link} eventKey='2' to='/day-tours/haag'>Den Haag & Museu Voorlinden</Nav.Link>
                <Nav.Link as={Link} eventKey='2' to='/day-tours/kroller'>Museu Kroller Müller & Amersfoort</Nav.Link>
                <Nav.Link as={Link} eventKey='2' to='/day-tours/zaanse'>Zaanse Schans & Volendam</Nav.Link>
                <Nav.Link as={Link} eventKey='2' to='/day-tours/park'>Parque de diversões & Sauna</Nav.Link>
              </div>
            </Dropdown>

            <Dropdown displayDropdown={openPackages ? 'none' : null}>
              <div className='header-dropdown'>
                <Nav.Link as={Link} eventKey='2' to='/packages'>Pacotes</Nav.Link>

                {
                  openPackages ?

                    <FontAwesomeIcon
                      onClick={() => setOpenPackages(() => !openPackages)}
                      className='menu-icon-mobile'
                      icon='plus-circle'
                    />
                    :
                    <FontAwesomeIcon
                      onClick={() => setOpenPackages(() => !openPackages)}
                      className='menu-icon-mobile'
                      icon='minus-circle'
                    />
                }
              </div>

              <div className='dropdown-items'>
                <Nav.Link as={Link} eventKey='2' to='/packages/embrenha'>Embrenhe-se</Nav.Link>
                <Nav.Link as={Link} eventKey='2' to='/packages/entranhe'>Entranhe-se</Nav.Link>
                <Nav.Link as={Link} eventKey='2' to='/packages/entregue'>Entregue-se</Nav.Link>
              </div>
            </Dropdown>

            <Dropdown displayDropdown={openInspire ? 'none' : null}>
             <div className='header-dropdown'>
               <Nav.Link as={Link} eventKey='2' to='/inspire'>Inspire-se</Nav.Link>
               {
                 openInspire ?

                   <FontAwesomeIcon
                     onClick={() => setOpenInspire(() => !openInspire)}
                     className='menu-icon-mobile'
                     icon='plus-circle'
                   />
                   :
                   <FontAwesomeIcon
                     onClick={() => setOpenInspire(() => !openInspire)}
                     className='menu-icon-mobile'
                     icon='minus-circle'
                   />

               }
             </div>
                <div className='dropdown-items'>
                  <Nav.Link as={Link} eventKey='2' to='/inspire/innovate'>Inove-se</Nav.Link>
                  <Nav.Link as={Link} eventKey='2' to='/inspire/relax'>Relaxe-se</Nav.Link>
                  <Nav.Link as={Link} eventKey='2' to='/inspire/adventure'>Aventure-se</Nav.Link>
                </div>
            </Dropdown>
           
            <Nav.Link as={Link} eventKey='2' to='/instagram'>Instagram</Nav.Link>
            <Nav.Link as={Link} eventKey='2' to='/contact-us'>Contato</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Header>
    );
  };


export default withRouter(MainNavBar);
