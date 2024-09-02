import { Link, divnk } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center px-5"
          id="navbarNavDropdown"
        >
          <div className="col-7">
            <div className="d-flex justify-content-evenly">
              <div class="nav-item">
                <Link
                  className="nav-divnk active"
                  aria-current="page"
                  to="home"
                >
                  Home
                </Link>
              </div>
              <div class="nav-item">
                <Link
                  className="nav-divnk active"
                  aria-current="page"
                  to="about"
                >
                  About Us
                </Link>
              </div>
              <div class="nav-item dropdown">
                <div
                  class="nav-divnk dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </div>
                <ul class="dropdown-menu px-2 text-center">
                  <div>
                    <Link
                      className="nav-divnk active"
                      aria-current="page"
                      to="lite"
                    >
                      SE03 Lite
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="nav-divnk active"
                      aria-current="page"
                      to="seo"
                    >
                      SE03
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="nav-divnk active"
                      aria-current="page"
                      to="max"
                    >
                      SE03 Max
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="nav-divnk active"
                      aria-current="page"
                      to="compare"
                    >
                      Compare all
                    </Link>
                  </div>
                </ul>
              </div>
              <div class="nav-item">
                <Link
                  className="nav-divnk active"
                  aria-current="page"
                  to="prebook"
                >
                  Pre-book Now
                </Link>
              </div>
              <div class="nav-item">
                <Link
                  className="nav-divnk active"
                  aria-current="page"
                  to="contact"
                >
                  Contact Us
                </Link>
              </div>
              
            </div>
          </div>
        </div>
        <div className="d-flex ">
          <div className="pe-4">
            <img width={25} src="/images/instagram.png" alt=""></img>
          </div>
          <div>
            <img width={25} src="/images/message.png" alt=""></img>
          </div>
        </div>
      </div>
    </nav>
  );
}
