import { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
//import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavDropdown, NavLink } from 'react-bootstrap';
import { Link } from "react-router-dom";

const ModalLogIn = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const handleClose1Show2 = () => {
        handleClose();
        handleShow2();
    }
    
    return ( 
        <>
            <Button style={{color: "lightgrey", border: "none"}} variant="dark" className="navRightBut" onClick={handleShow}>
                LogIn
            </Button>
            <Button style={{color: "lightgrey", border: "none"}} variant="dark" className="navRightBut" onClick={handleShow2}>
                SignUp
            </Button>
            <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>LogIn</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <div className="logIn-div">
                                <form class="px-4 py-3">
                                        <div class="form-group">
                                        <label for="exampleDropdownFormEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" required/>
                                        </div>
                                        <div class="form-group">
                                        <label for="exampleDropdownFormPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" required/>
                                        </div>
                                        <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="dropdownCheck"/>
                                        <label class="form-check-label" for="dropdownCheck">
                                            Remember me
                                        </label>
                                        </div>
                                        <button type="submit" class="btn btn-primary">LogIn</button>
                                </form>
                                <div class="dropdown-divider"></div>
                                <Link class="dropdown-item text-info" to="#" onClick={handleClose1Show2} >New around here? Sign up</Link>
                                <a class="dropdown-item text-danger" href="#" onClick={() => alert("Bad luck! This option is not available yet :(")}>Forgot password?</a>
                        
                        </div>
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <NavLink to="/logIn" onClick={handleClose} style={{borderRadius: "5px"}} className="bg-primary text-white">LogIn</NavLink>
                    </Modal.Footer> */}
            </Modal>

            <Modal
                    show={show2}
                    onHide={handleClose2}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Welcome to CryptoFlo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <div className="logIn-div">
                                        <form class="px-4 py-3">
                                                <div class="form-group">
                                                <label for="signUpEmail">Email address</label>
                                                <input type="email" class="form-control" id="signUpEmail" placeholder="email@example.com" required/>
                                                </div>
                                                <div class="form-group">
                                                <label for="signUpPassword">Password</label>
                                                <input type="password" class="form-control" id="signUpPassword" placeholder="Password" required/>
                                                </div>
                                                <div class="form-group">
                                                <label for="repeatSignUpPassword">Repeat Password</label>
                                                <input type="password" class="form-control" id="repeatSignUpPassword" placeholder="Password" required/>
                                                </div>
                                                <br />
                                                <button type="submit" class="btn btn-primary">Save</button>
                                        </form>
                            </div>
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <NavLink to="/" onClick={handleClose} className="bg-primary text-white">Save</NavLink>
                    </Modal.Footer> */}
            </Modal>
    </>
     );
}
 
export default ModalLogIn;