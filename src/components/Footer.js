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
          <h3>Ahsan Farooq</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="http://github.com/AHSANFAROOQ1999"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >

                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.upwork.com/freelancers/~012b3189db30391995"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <SiUpwork />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.fiverr.com/users/ahsanfarooq1999"
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                <SiFiverr />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="http://linkedin.com/in/ahsan-farooq-9b1627199"
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
