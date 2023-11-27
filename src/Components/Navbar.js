import React from "react";
import { Button, Image } from "react-bootstrap";
import Logo from "../Assets/Images/Logo.png"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent px-15">
      <div className="container-fluid">
        <Image src={Logo} className="h-4 w-5"/>
       
        <div className="collapse navbar-collapse ps-5 ms-5" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active  text-light" aria-current="page" href="#">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active  text-light" href="#">
                Gifting
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active  text-light" href="#">
                How to Fangram
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active  text-light"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Support
              </a>
            </li>
          </ul>
          <form className="d-flex">
            
            <Button className="btn btn-outline-light bg-transparent custom-buton-radius text-light me-5">
              Promote My Business
            </Button>
            <Button className="btn btn-outline-none bg-pink custom-buton-radius  text-light">
              Login/Signup
            </Button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
