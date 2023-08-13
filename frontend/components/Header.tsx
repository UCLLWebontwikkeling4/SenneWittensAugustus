import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "../public/favicon.ico";
import { useEffect, useState } from "react";
import UserService from "../services/UserService";

const Header: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [admin, setAdmin] = useState(false)
  const LogoutSubmit = (event: any) => {
    event.preventDefault();
    UserService.logout();
  };

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("id"));
    if (userData) {
      setFirstName(sessionStorage.getItem("firstname"));
      setLastName(sessionStorage.getItem("lastname"));

      if (firstName == 'admin'){
        console.log(firstName)
        setAdmin(true);
      }
      
    }
  }, []);

  const AdminPage  = () => {
    if (!admin){ return(
      <></>
    )} else {return (
        <li>
           <Link href="/users" className="nav-link px-4 text-white">
                Users
            </Link>
        </li>
    )}
  }
  return (
    <>
      <header className="site-navbar site-navbar-target" role="banner">
        <div className="container">
          <div className="d-flex justify-content-around align-items-center align-self-stretch">
            <div>
              <nav
                className="site-navigation text-right ml-auto "
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                  <li className="active f">
                    <Link href="/" className="nav-link px-4 text-white">
                      home
                    </Link>
                  </li>
                  
                  {AdminPage()}
                </ul>
              </nav>
            </div>
            <div>
              <div className="site-logo">
                <a>Avarts</a>
              </div>
            </div>
            <div>
              <nav
                className="site-navigation text-left mr-auto "
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                  <li>
                    <Link href="/personal" className="nav-link px-4 fs-5 text-black">
                      Personal info
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/trainings"
                      className="nav-link px-4  text-white"
                    >
                      trainings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/bikes"
                      className="nav-link px-4  text-white"
                    >
                      bikes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/races"
                      className="nav-link px-4  text-white"
                    >
                      races
                    </Link>
                  </li>
                  <li className="px-4 fs-5 text-white">
                    <NavDropdown
                      title={
                        <>
                          {firstName} {lastName}{" "}
                        </>
                      }
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        <Link
                          href="/"
                          className="nav-link px-4 fs-5 text-black"
                        >
                          Personal info
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        <form onSubmit={LogoutSubmit}>
                          <button className="button login__submit">
                            <span className="button__text">Log out</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                          </button>
                        </form>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
