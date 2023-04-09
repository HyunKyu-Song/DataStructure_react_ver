/*eslint-disable*/
import './css/App.css';
import './css/stack.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faArrowRightArrowLeft, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Stack from './component/stack.js'


function App() {
  let navigate = useNavigate();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container id='a'>
          <Navbar.Brand onClick={() => { navigate('/') }}>Data Structure</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/stack') }}>
                Stack <FontAwesomeIcon icon={faLayerGroup} />
              </Nav.Link>
              <Nav.Link onClick={() => { navigate('/queue') }}>
                Queue <FontAwesomeIcon icon={faArrowRightArrowLeft} />
              </Nav.Link>
              <Nav.Link onClick={() => { navigate('/linkedList') }}>
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

      <Routes>
        <Route path='/' element={<div>home</div>} />
      </Routes>

      <Routes>
        <Route path='/stack' element={<Stack />} />
      </Routes>

      <Routes>
        <Route path='/queue' element={<div>queue</div>} />
      </Routes>

      <Routes>
        <Route path='/linkedList' element={<div>linkedList</div>} />
      </Routes>

      <footer>
        <p className='copyRight m-2' style={{ textAlign: 'right' }}>Copyright © 송현규. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default App;
