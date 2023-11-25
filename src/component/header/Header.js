import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import imgsrc from './img/logo.png';


const Header = () => {
  return (
    <Container className='home-header'>
      <header>

        <Navbar expand="lg" >
          <Container >
            <Navbar.Brand href="#"><img src={imgsrc} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link ><Link className='link' to={'/'}>Home</Link></Nav.Link>
                <Nav.Link ><Link className='link' to='/about'>About</Link></Nav.Link>
                <Nav.Link ><Link className='link' to='/about'>About</Link></Nav.Link>
                <Nav.Link ><Link className='link' to='/about'>About</Link></Nav.Link>
                <Nav.Link ><Link className='link' to='/about'>About</Link></Nav.Link>
                <Nav.Link ><Link className='link' to='/about'>About</Link></Nav.Link>

              </Nav>
              <div className="d-flex sideicons">
                <Link to='/about'><CiUser /></Link>
                <Link to='/about'><BsCart2 /></Link>
                <button><IoSearchOutline /></button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </Container>
  )
}

export default Header
