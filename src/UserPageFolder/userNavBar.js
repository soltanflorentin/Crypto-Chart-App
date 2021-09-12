import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavbarBrand, NavDropdown, NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import "../index.css";
import fav from '../favicon.ico';


const UserNavBar = () => {
    return ( 
        <div>
                    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">

                        <NavbarBrand href="/user" id="navBrand"> <img src={fav} style={{height: "25px", margin: "0px", background: "white"}} />{" "}
                                            CryptoFlo</NavbarBrand>
                        <NavbarToggle aria-controls="responsive-navbar-nav" />
                        <NavbarCollapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            <NavLink href="#features">Features</NavLink>
                            <NavLink href="#pricing">Pricing</NavLink>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">drop1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">drop2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">drop3</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated drop</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                            <Nav>
                                <NavLink href="/" style={{marginRight: "20px"}}>LogOut</NavLink>
                            </Nav>
                        </NavbarCollapse>
                    </Navbar>
        </div>
     );
}
 
export default UserNavBar;