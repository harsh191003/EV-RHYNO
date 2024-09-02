import { Link } from "react-router-dom";
import "./footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer px-5 py-2">
        <div class="container">
          <div class="footer__columns">
            <div>
              <ul class="footer__nav-list">
                <li>
                  <p>Privacy policy</p>
                </li>
                <li class="footer__nav-item">
                  <p>Refund policy</p>
                </li>
                <li>
                  <p>Website policym</p>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <p>Products</p>
                </li>
                <li>
                  <p>Career</p>
                </li>
                <li>
                  <p>Rentals</p>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <h5 className="mb-1">Contact Us</h5>
                <div className="d-flex pb-1 align-items: center">
                  <Link>
                    <img
                      className="pe-1"
                      width={23}
                      src="/images/email.png"
                      alt=""
                    ></img>
                  </Link>
                  <p>info@rhyno.in</p>
                </div>
                <div className="d-flex align-items: center">
                  <Link>
                    <img
                      className="pe-1"
                      width={23}
                      src="/images/phone.png"
                      alt=""
                    ></img>
                  </Link>
                  <p>+91-9023987528</p>
                </div>
              </ul>
            </div>
            <div className="d-flex p-2 align-items-center">
              <div className="pe-3">
                <Link>
                  <img width={50} src="/images/instagram.png" alt="Insta"></img>
                </Link>
              </div>
              <div>
                <Link>
                  <img width={50} src="/images/message.png" alt="Link"></img>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
