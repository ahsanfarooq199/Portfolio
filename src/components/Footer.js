import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiUpwork, SiFiverr } from 'react-icons/si'

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Muhammad Zahid Noor</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ZahidNoor7"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >

                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.upwork.com/freelancers/~01d4a0d725741c3f27"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <SiUpwork />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.fiverr.com/muhammadzahid_"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <SiFiverr />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/muhammad-zahid-noor-aa72561aa/"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
