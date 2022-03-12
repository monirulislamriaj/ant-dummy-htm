import React from "react";
import Styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <section className={Styles.footer}>
        <div className="container">
          <div className="row justify-content-between g-5 g-lg-0">
            <div className="col-12 col-lg-4">
              <img className="img-fluid mb-4" src="images/logo.png" alt="bdtickets" />
              <p>
                bdtickets.com is premium online booking portal which allows you
                to purchese ticket for various bus services, lounch services,
                movies and events across the country
              </p>
            </div>
            <div className="col-lg-3">
              <h4 className="text-white mb-5">Company Info</h4>
              <ul>
                <li>
                  <a href="faq.html">FAQ</a>
                </li>
                <li>
                  <a href="term-condition.html">Privecy Policy</a>
                </li>
                <li>
                  <a href="#!" id="modal-btn-2">
                    How To Buy Ticket
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h4 className="text-white mb-5">About BDTICKETS</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
              <ul className={`${Styles.social_icons} mt-3`}>
                <li>
                  <a href="#">
                    <img src="images/icon/facebook-icon.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/icon/twitter-icon.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/icon/youtube-icon.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={Styles.copyright}>
        <p className="m-0">
          © {new Date().getFullYear()} bdtickets. All rights reserved.
        </p>
      </section>
    </footer>
  );
}
