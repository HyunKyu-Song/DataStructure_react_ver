/*eslint-disable*/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faArrowRightArrowLeft, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';


function App() {
  let navigate = useNavigate();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container id='a'>
          <Navbar.Brand onClick={()=>{navigate('/')}}>Data Structure</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">
                Stack <FontAwesomeIcon icon={faLayerGroup} />
              </Nav.Link>
              <Nav.Link href="#pricing">
                Queue <FontAwesomeIcon icon={faArrowRightArrowLeft} />
              </Nav.Link>
              <Nav.Link href="#pricing">
                Linked List <FontAwesomeIcon icon={faCodeBranch} />
              </Nav.Link>
              <NavDropdown title="sample" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">a</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">b</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">c</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default App;
